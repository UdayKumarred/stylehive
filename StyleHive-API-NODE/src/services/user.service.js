const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.model.js');
const jwtProvider=require("../config/jwtProvider")

const createUser = async (userData)=>{
    try {

        let {firstName,lastName,email,password,role}=userData;

        const isUserExist=await User.findOne({email});


        if(isUserExist){
            throw new Error("user already exist with email : ",email)
        }

        // password=await bcrypt.hash(password,8);
    
        const user=await User.create({firstName,lastName,email,password,role})

        console.log("user ",user)
    
        return user;
        
    } catch (error) {
        console.log("error - ",error.message)
        throw new Error(error.message)
    }

}

const findUserById=async(userId)=>{
    try {
        const user = await User.findById(userId)
        // .populate("address");
        if(!user){
            throw new Error("user not found with id : ",userId)
        }
        return user;
    } catch (error) {
        console.log("error :------- ",error.message)
        throw new Error(error.message)
    }
}

const getUserByEmail=async(email)=>{
    try {

        const user=await User.findOne({email});

        if(!user){
            throw new Error("user found with email : ",email)
        }

        return user;
        
    } catch (error) {
        console.log("error - ",error.message)
        throw new Error(error.message)
    }
}

const getUserProfileByToken=async(token)=>{
    try {

        const userId=jwtProvider.getUserIdFromToken(token)

        console.log("userr id ",userId)


        const user= (await findUserById(userId))
        user.password=null;
        
        if(!user){
            throw new Error("user not exist with id : ",userId)
        }
        return user;
    } catch (error) {
        console.log("error ----- ",error.message)
        throw new Error(error.message)
    }
}

const getAllUsers=async()=>{
    try {
        const users=await User.find();
        return users;
    } catch (error) {
        console.log("error - ",error)
        throw new Error(error.message)
    }
}

const updateUserProfile = async (userId, updateData) => {
    try {
        const user = await User.findById(userId);

        if (!user) {
            throw new Error("User not found");
        }

        console.log("Updated User Before Save:", user);

        // Update fields if provided
        if (updateData.firstName) user.firstName = updateData.firstName;
        if (updateData.lastName) user.lastName = updateData.lastName;
        if (updateData.email) user.email = updateData.email;
        if (updateData.password) user.password = updateData.password;

     

        const updatedUser = await user.save(); // Save updated user

        console.log("Saved User:", updatedUser);
        
        return updatedUser;
    } catch (error) {
        console.log("Error updating user profile: ", error.message);
        throw new Error(error.message);
    }
};


module.exports={
    createUser,
    findUserById,
    getUserProfileByToken,
    getUserByEmail,
    getAllUsers,
    updateUserProfile
}
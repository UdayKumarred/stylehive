const userService=require("../services/user.service.js")

const getUserProfile=async (req,res)=>{
    const jwt= req.headers.authorization?.split(' ')[1];
    console.log("req",jwt)
    try {
        

        if(!jwt){
            return res.status(404).send({error:"token not found"})
        }
        const user=await userService.getUserProfileByToken(jwt)

        return res.status(200).send(user)

    
    } catch (error) {
        console.log("error from controller - ",error)
        return res.status(500).send({error:error.message})
    }
}

const getAllUsers=async(req,res)=>{
    try {
        const users=await userService.getAllUsers()
        return res.status(200).send(users)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const updateUserProfile = async (req, res) => {
    const jwt= req.headers.authorization?.split(' ')[1];
    try {
        const user=await userService.getUserProfileByToken(jwt)
        const updatedUser = await userService.updateUserProfile(user, req.body);
        return res.status(200).send({
            message: "Profile updated successfully",
            user: {
                firstName: updatedUser.firstName,
                lastName: updatedUser.lastName,
                email: updatedUser.email,
                password: updatedUser.password,
            },
        });
    } catch (error) {
        console.log("Error in updateUserProfile controller: ", error.message);
        return res.status(500).send({ error: error.message });
    }
};


module.exports={getUserProfile,getAllUsers,updateUserProfile}
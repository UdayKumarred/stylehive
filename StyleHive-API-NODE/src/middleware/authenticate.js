const jwtProvider=require("../config/jwtProvider.js")
const userService=require("../services/user.service.js")


const authenticate = async(req,res,next)=>{

    try {
        const token= req.headers.authorization?.split(" ")[1];
        // console.log(token)
        if(!token){
            return res.status(404).send({message:"token not found"})
        }

        const userId=jwtProvider.getUserIdFromToken(token);
        // console.log(userId)
        const user = await userService.findUserById(userId);
        req.user=user;
        
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
    next();
}

module.exports=authenticate;
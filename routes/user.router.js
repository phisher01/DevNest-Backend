const express=require("express");
const userRouter=express.Router();

const userController=require("../controllers/userController");

userRouter.get("/allUsers",userController.getAllUsers);
userRouter.post("/signup",userController.signup);
userRouter.put("/updateProfile/:id",userController.updateUserProfile);
userRouter.delete("/deleteProfile/:id",userController.deleteUserProfile);
userRouter.post("/login",userController.login);
userRouter.get("/userProfile/:id",userController.getUserProfile);
userRouter.patch("/user/:uid/repo/:rid",userController.makeStar);

module.exports=userRouter;
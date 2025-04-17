
const express=require("express");
const issueController=require("../controllers/IssueController")
const issueRouter=express.Router();

issueRouter.post( "/issue/create/:id",issueController.createIssue);
issueRouter.put("/issue/update/:id",issueController.updateIssueById);
issueRouter.delete("/issue/delete/:id",issueController.deleteIssueById );
issueRouter.get("/issue/repo/:id",issueController.getAllIssues);
issueRouter.get("/issue/:id",issueController.getIssueById);


module.exports=issueRouter;




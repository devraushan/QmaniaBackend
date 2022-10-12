import models from "../../Models/index"
import { Request,Response } from "express"
const {Quiz,User} = models

const createQuiz = async (req:Request,res:Response)=>{
    try {
        const userId = req.body.user.id;
        const user = await User.findById(userId);
        const owner = user.id;
        const {editors,quizName,rounds} = req.body;
        const quiz = await Quiz.create({
            owner,editors,quizName,rounds
        });
        user.ownedQuizzes.push(quiz.id);
        user.save();
        res.send({success: true,user: userId, quiz});

    } catch (error) {
        console.log(error);
    }
    
}

export default createQuiz;
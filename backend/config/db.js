import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://ajayr5096:Oppo123@cluster0.wot19.mongodb.net/food-del')
    .then(()=>console.log("DB connected"))
    .catch(err=>console.log(err));
}


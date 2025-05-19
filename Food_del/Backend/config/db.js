import mongoose from "mongoose";


 export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://fullstack:808977@cluster0.0rsjimr.mongodb.net/food-del').then(()=>console.log("DB connected"))

}
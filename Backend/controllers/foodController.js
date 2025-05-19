// import foodModel from "../models/foodModel.js";
// import fs from 'fs'



// //add food item



// const addFood=async(req,res)=>{

//     let image_filename=`${req.file.filename}`;

//     const food=new foodModel({
//         name:req.body.name,
//         desciprion:req.body.description,
//         price:req.body.price,
//         category:req.body.category,
//         image:image_filename


//     })
//     try{
//         await food.save()
//         res.json({success:true,message:"food added"})
//     }
//         catch(error){
//             console.log(error)
//             res.json({success:false,message:"failed"})
//         }
    
// }



// //all  food list 

// const listFood=async(req,res)=>{
// try{
//     const foods=await foodModel.find({});
//     res.json({success :true,data:foods})
// }
// catch(error){
// console.log(error);
// res.json({success:false,message:"error"})
// }
// }


// export {addFood,listFood}




import foodModel from "../models/foodModel.js";

// Add food item
const addFood = async (req, res) => {
    try {
        // Check if file was uploaded
        let image_filename = req.file ? req.file.filename : null;

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description, // Fixed typo
            price: req.body.price,
            category: req.body.category,
            image: image_filename
        });

        await food.save();
        res.json({ success: true, message: "Food added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Failed to add food" });
    }
};

// List all food items
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods }); // Fixed typo
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error fetching food list" });
    }
};

export { addFood, listFood };

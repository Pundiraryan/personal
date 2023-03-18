import mongoose from "mongoose";
const careplaceSchema=new mongoose.Schema({
    careplace:{type:String},
    supname:{type:String},
    supid:{type:String},
    pwd:{type:String},
    phone:{type:Number},
    add:{type:String},
    staffsize:{type:Number},
    foodcount:{type:Number},
    feedback:{type:String}
})
const userModel=mongoose.model("hosteldata",careplaceSchema);
export default userModel;

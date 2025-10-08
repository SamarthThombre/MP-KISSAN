import mongoose, { Schema, Types } from "mongoose";

const userSchema = new Schema({
    Name: {
        type: String,
        require: true,
    },
    Email: String || null,
    Number:{
        type:Number,
        unique: true,
        index:true,
        require:true,
    },
    Password: {
        type: String,
        require: true,
    },
    Role:{
        type: String,
        enum: ["admin", "goverment", "farmer","basic"],
        default: "basic",
    },
    Address: {
    house_no: { type: String },
    street: { type: String },
    city: { type: String, index: true },
    zip_code: { type: String, index: true }, 
    state: { type: String },
  },
    Aadhaar_number:{
        type: String,
        unique: true,
    },
    Aadhaar_status:{
        type: String,
        emun: ["Full-KYC","No-KYC"],
        default: "No-KYC",
    },
    Farmer_id:Number || null,
    Doc_id:{
        type: Schema.Types.ObjectId, 
        ref: Document ,
    },
    Crop_id:{
        type: Schema.Types.ObjectId, 
        ref: Crop ,
    },
    Application_id:{
        type: Schema.Types.ObjectId, 
        ref: Application ,
    },

},{ timestamps: true});

const User = mongoose.model(User, userSchema);

export default User;

    // regesterUser,
    // loginUser,
    // logoutUser,
    // refreshAcessToken,
    // updateAccountDetails,
    // getCurrentUser,
    // changeCurrentPassword
import ApiError from '../utils/ApiError.js'
import User from '../models/userModel.js'
import asyncHandeler from '../utils/AsyncHandeler.js'



const regesterUser =  asyncHandeler(async(req, res) => {
    const { Name, Email,Number, Password, Role } = req.body;

    if([Name, Email, Password,Number, Role].some((field) =>field?.trim() == "")){
        throw new ApiError(404, "[User_regester] All fields are required");
    }

    const exist = await User.findOne({
        $or: [{ Email },{ Number }]
    });

    if(exist){
        throw new ApiError(404, "[User_regester] User already Exists");
    }

    const user = await User.create({
        Name: Name.tolowercase(),
        Email: Email.tolowercase(),
        Number,
        Password
    });

    const user_created = await User.findOne(user_id);
    
    if(!user_created){
        throw new ApiError(500,"[User_regester] Something went wrong whlie creating user ");
    }
    return res.status(201).json(
        new ApiResponse(200, "[User_regester] User regestered Successfully")
    )
})  

export { regesterUser, }



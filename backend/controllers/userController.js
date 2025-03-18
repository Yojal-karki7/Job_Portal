import { User } from "../models/userSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getDataUri from "../utils/dataUri.js";
import cloudinary from "../utils/cloudinary.js";
export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "Please fill all fields!",
        success: false,
      });
    }
    // cloudinary
    const file = req.file;
    const fileUri = getDataUri(file)
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content)
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exits!",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
      profile: {
        profilePhoto: cloudResponse.secure_url,
      }
    });
    return res.status(201).json({
      message: "User has been created Successfully!",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Please fill all fields!",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials!",
        success: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Invalid credentials!",
        success: false,
      });
    }
    // check role of the user
    if (role !== user.role) {
      return res.status(400).json({
        message: "Your role doesn't match",
        success: false,
      });
    }
    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: "strict",
      })
      .json({ message: `Welcome back, ${user.fullname}`, user, success: true });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async(req, res) => {
    try {
        return res.status(200).cookie("token", "", {maxAge: 0}).json({
            message: 'Logged out Successfully',
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}

export const updateProfile = async(req, res) => {
    try {
        const {fullname, email, phoneNumber, bio, skills} = req.body;
        
        const file = req.file;
        // cloudinary 
        const fileUri = getDataUri(file)
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
        
      let skillsArray;
      if(skills) {
        skillsArray = skills.split(",");
      }
        const userId = req.id;
        let user = await User.findById(userId);
        if(!user) {
            return res.status(400).json({
                message: "You are not logged in yet!",
                success: false,
              });
        }
        // Update data
        if(fullname) user.fullname = fullname;
        if(email) user.email = email;
        if(phoneNumber) user.phoneNumber = phoneNumber;
        if(bio) user.profile.bio = bio;
        if(skills) user.profile.skills = skillsArray;

        // Resume
        if(cloudResponse) {
          user.profile.resume = cloudResponse.secure_url; //save cloudinary uri in database
          user.profile.resumeOriginalName = file.originalname // save original file name
        }

        await user.save();

        return res.status(200).json({
            message: 'Profile updated Successfully!',
            success: true,
            user,
        })
    } catch (error) {
        console.log(error);
        
    }
}
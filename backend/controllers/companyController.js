import { Company } from "../models/companySchema.js";

export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res.status(401).json({
        message: "Company Name is required!",
        success: false,
      });
    }
    let comapny = await Company.findOne({ name: companyName });
    if (comapny) {
      return res.status(400).json({
        message: "Company already exists!",
        success: false,
      });
    }
    comapny = await Company.create({
      name: companyName,
      userId: req.id,
    });
    return res.status(201).json({
      message: "Company registered successfully!",
      success: true,
      comapny,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCompany = async (req, res) => {
  try {
    const userId = req.id; // logged in user id
    const companies = await Company.find({ userId });

    if (!companies) {
      return res.status(404).json({
        message: "Companies not found!",
        success: false,
      });
    }
    return res.status(200).json({
      companies,
      success: true
    });
  } catch (error) {
    console.log(error);
  }
};

// get company by id
export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;

    const company = await Company.findById(companyId);

    if (!company) {
      return res.status(404).json({
        message: "Company not found!",
        success: false,
      });
    }
    return res.status(200).json({
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateComapny = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    console.log(name);
    
    const file = req.file;

    // cloudinary

    const updateData = {
      name,
      description,
      website,
      location,
    };
    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });
    if(!company) {
        return res.status(400).json({
            message: 'Company not found!',
            success: false,
        })
    }
    return res.status(200).json({
        message: 'Company information has been updated!',
        company,
        success: true,
    })
  } catch (error) {
    console.log(error);
  }
};

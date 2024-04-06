import { asyncHandler } from "../Utils/asyncHandler.js";
import { ApiError } from "../Utils/ApiError.js";
import { Volunteer } from "../Models/Volunteer.model.js";
import { ApiResponse } from "../Utils/ApiResponse.js";


const VolunteerUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, phonenumber,password, state, district } = req.body;

  if ( !firstname || !lastname || !phonenumber || !password || !state || !district) {
    throw new ApiError(400, "Please provide name, phonenumber, state, and district");
  }
  
  const existedVolunteer = await Volunteer.findOne({ phonenumber });
  if (existedVolunteer) {
    throw new ApiError(409, "Volunteer is already registered is already registered");
  }

  const VolunteerData = await Volunteer.create({
    firstname,
    lastname,
    phonenumber,
    password,
    state,
    district
  });

  if (!VolunteerData) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, VolunteerData, "User registered successfully"));
});

export { VolunteerUser };


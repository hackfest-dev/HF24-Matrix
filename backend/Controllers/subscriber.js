import { asyncHandler } from "../Utils/asyncHandler.js";
import { ApiError } from "../Utils/ApiError.js";
import { Subscriber } from "../Models/Subscriber.model.js";
import { ApiResponse } from "../Utils/ApiResponse.js";


const subscribeUser = asyncHandler(async (req, res) => {
  const { name, phonenumber, state, district } = req.body;

  if (!name || !phonenumber || !state || !district) {
    throw new ApiError(400, "Please provide name, phonenumber, state, and district");
  }
  
  const existedUser = await Subscriber.findOne({ phonenumber });
  if (existedUser) {
    throw new ApiError(409, "Phone number is already registered");
  }

  const subscriberData = await Subscriber.create({
    name,
    phonenumber,
    state,
    district
  });

  if (!subscriberData) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, subscriberData, "User registered successfully"));
});

export { subscribeUser };


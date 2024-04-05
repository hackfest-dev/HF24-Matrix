import { asyncHandler } from "../Utils/asyncHandler.js";
import { ApiError } from "../Utils/ApiError.js";
import { ApiResponse } from "../Utils/ApiResponse.js";
import { Post } from "../Models/Post.models.js";
import { uploadOnCloudinary } from "../utils/fileUpload.js";
import { verifyJWT } from "../Middlewares/auth.js";

const userpost = asyncHandler(async (req, res) => {
  const { text, state, district } = req.body;
  const imageUrl = req.files?.imageUrl[0]?.path; 
  const user = req.user; 
  console.log(user);
  if (!text || !state || !district || !imageUrl) {
    throw new ApiError(
      400,
      "Please provide all required fields: text, imageUrl, state, district"
    );
  }

  const image = await uploadOnCloudinary(imageUrl);

  if (!image || !image.url) {
    throw new ApiError(500, "Server error while uploading image");
  }

  const userPost = await Post.create({
    text,
    imageUrl: image.url, 
    user,
    state,
    district,
  });

  if (!userPost) {
    throw new ApiError(500, "Something went wrong while creating the post");
  }

  return res.status(201)
  .json(new ApiResponse(200, userpost, "post posted successfully"));
});

const getuserpost = asyncHandler(async (req, res) => {
  const posts = await Post.find().populate("user", "username");
  return res
    .status(200)
    .json(new ApiResponse(200, posts, "post fetched successfully"));
});

export { userpost, getuserpost };

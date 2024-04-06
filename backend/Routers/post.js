import { Router } from "express";
import { userpost, getuserpost } from "../Controllers/Post.js";
import {upload} from  "../middlewares/multer.js"

const postrouter = Router();

postrouter.route("/postnews").post(upload.fields([{ name: "imageUrl", maxCount: 1 }]), userpost);

postrouter.route('/getposts').get(getuserpost) 

export default postrouter;

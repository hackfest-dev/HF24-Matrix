import { Router } from "express";
import { VolunteerUser } from "../Controllers/volunteer.js";

const volrouter = Router()

    volrouter.route("/volunteerer").post(VolunteerUser)


    export default volrouter
import { Router } from "express";
import { subscribeUser } from "../Controllers/subscriber.js";

const subrouter = Router()

    subrouter.route("/subscribe").post(subscribeUser)


    export default subrouter
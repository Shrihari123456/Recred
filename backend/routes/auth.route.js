import express from "express";
import { register, login , sendResetCode , verifyCode , resetPassword} from "../controllers/Auth.controllers.js";
import { getGoogleAuthURL, handleGoogleCallback } from "../controllers/googleauth.js";


const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/send-reset-code", sendResetCode);
router.post("/verify", verifyCode);
router.post("/reset-password", resetPassword);
router.get("/google-url", getGoogleAuthURL);
router.post("/google/callback", handleGoogleCallback);


export default router;
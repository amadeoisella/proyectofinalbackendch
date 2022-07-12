import { Router } from "express";
import passport from "passport";
import { signIn, signOut, signUp } from "../controllers/user";
import fileUpload from "../middlewares/imageUpload";

import { roleCheck } from "../middlewares/roleCheck";
import { signUpValidation } from "../middlewares/signUpValidation";

const userRoutes = Router();

userRoutes.post(
  "/login",
  passport.authenticate("local", { session: true }),
  signIn
);
userRoutes.post("/logout", signOut);
userRoutes.post(
  "/register",
  fileUpload.single("picture"),
  signUpValidation,
  signUp
);

export { userRoutes };

import { Router } from "express";
import { registerUser } from "../controller/userController.js";


const router = Router()

router.get("/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "[User-router] Backend route is working perfectly!",
  });
});
router.route("/regester").post(registerUser)
// router.route("/login").post(loginUser)

// // secure route
// router.route("/logout").post(verifyJWT, logoutUser) 
// router.route("/refresh-token").post(refreshAcessToken)
// router.route("/change-password").post(verifyJWT, changeCurrentPassword )
// router.route("/get-user").get(verifyJWT, getCurrentUser )
// router.route("/update-account").patch(verifyJWT, updateAccountDetails )

export default router;
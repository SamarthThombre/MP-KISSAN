import userRouter from './userRouter.js'
import { Router } from "express";

const router = Router()

router.get("/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "[Main_Router] Backend route is working perfectly!",
  });
});
router.use("/user",userRouter);

export default router;
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import MainRouter from './src/routes/mainRouter.js'

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database
connectDB();

app.get('/', (req, res) => {
  res.send('[ Server ] working')
})

app.use("/api",MainRouter);

//Global Eror handeer for server 
app.use((err,req,res,next) => {
  if (err.name === "APIError"){
    return res.status(err.statuscode || 500).json({
      success: err.success,
      message: err.message,
      error: err.error || [],
      data: err.data || null,
    });
  }
  
  // For unknown errors
  res.status(500).json({
    success: false,
    message: err.message || "Something went wrong",
    error: [],
    data: null
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`[Server] Server is running on port http://localhost:${PORT}`)
});



export default app;
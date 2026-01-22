import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

// Enable CORS for Next.js
app.use(cors({
    origin: "http://localhost:3000"
}));

// req and res now have proper types assigned
app.get("/api", (req: Request, res: Response) => {
    res.json({ "users": ["userOne", "userTwo", "userThree", "userFour", "userFive"] });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/api`);
});
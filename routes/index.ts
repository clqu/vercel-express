import { Request, Response } from "express";

const express = require("express");
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        res.status(200).json({
            status: 200,
            message: "Hello, world!",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

module.exports = router;

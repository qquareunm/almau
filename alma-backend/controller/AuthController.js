import express from "express";
import service from "../service.js";

const router = new express.Router();

router.post("/create", express.json(), async (req, res, next) => {
    try {
        const { name, surname, email, password } = req.body;
        const created_time = Date.now();

        const newUser = await service.addUser(name, surname, email, password, created_time);

        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Failed to create user", error: error.message });
    }
});

router.post("/login", express.json(), async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await service.getUserByEmailAndPassword(email, password);

        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        next(error);
    }
});


export default router;
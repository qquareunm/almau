import express from "express";
import service from "../service.js";

const router = new express.Router();

router.get("/all", async (req, res, next) => {
    try {
        const users = await service.getAllUsers();
        res.json(users);
    } catch (error) {
        next(error);
    }
});

router.get("/:email", async (req, res, next) => {
    try {
        const user = await service.getUserByEmail(req.params.email);
        res.json(user);
    } catch (error) {
        next(error);
    }
});

export default router;
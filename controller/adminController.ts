import express from "express";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const route = express.Router();
const cors = require("cors");

route.post('/',   async (req, res): Promise<any> => {
    try {
        const {name, email} = req.body;
        await prisma.user.create({
            data: {name, email},
        });
        res.json(name + ' has been created');
    } catch (error) {
        res.status(500).json({error: "User creation failed"});
    }
})
route.get('/', async (req, res): Promise<any> => {
    const users = await prisma.user.findMany();
    res.json(users);
})
export default route;
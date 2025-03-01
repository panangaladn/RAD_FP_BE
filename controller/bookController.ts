import express from "express";

const router=express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.post("/",async (req, res) => {
    try {
        const {title, author, publisher, price, category} = req.body;
        await prisma.book.create({
            data: { title, author, publisher, price, category }
        });
        res.json(title + ' has been created');
    } catch (error) {
        res.status(500).json({error: "Book Save failed"});
    }

});


router.get('/', async (req, res) => {
    try {
        const books = await prisma.book.findMany(); // Query all books from the database
        res.json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ error: 'Database query failed' });
    }
});

export default router;



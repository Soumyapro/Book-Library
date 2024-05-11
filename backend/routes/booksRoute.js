import express from 'express'
import { Book } from '../bookModel.js'

const router = express.Router()

router.post("/", async (req, res) => {
    try {

        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send("All fields are required")
        }
    } catch (error) {
        console.log('error message : ' + error)
    }

    const newBook = {
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear
    }

    const book = await Book.create(newBook)
    return res.status(201).send(book)
})

router.get("/", async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.error("Error occurred while fetching books:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});


router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const books = await Book.findById(id)
        return res.status(202).send(books)
    } catch (error) {
        console.log("Error in findind book by id")
    }
})

router.put("/:id", async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);
        if (!result) {
            return res.status(404).json({ message: "Book not found" });
        }
        return res.status(200).json({ message: "Book updated successfully" });
    } catch (error) {
        console.error('Error in updating the book by id:', error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const result = await Book.findByIdAndDelete(id)
        if (!result) {
            return res.status(404).json({ message: "Book not Deleted" })
        }
        return res.status(200).json({ message: "Book Deleted successfully" })
    } catch (error) {
        console.log('Error in deleting book')
        return res.status(500).json({ message: "Internal Server Error" });
    }
})


export default router
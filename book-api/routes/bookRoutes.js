const express = require("express");
const router = express.Router();

let books = [
    { id: 1, title: "Java Basics", author: "James" },
    { id: 2, title: "Node.js Guide", author: "John" }
];

// GET all books
router.get("/", (req, res) => {
    res.status(200).json(books);
});

// GET book by ID
router.get("/:id", (req, res) => {
    const book = books.find(b => b.id === Number(req.params.id));

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
});

// POST - Add a book
router.post("/", (req, res) => {
    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({
            message: "Title and author are required"
        });
    }

    const newBook = {
        id: books.length ? Math.max(...books.map(b => b.id)) + 1 : 1,
        title,
        author
    };

    books.push(newBook);

    res.status(201).json(newBook);
});

// PUT - Update a book
router.put("/:id", (req, res) => {
    const book = books.find(b => b.id === Number(req.params.id));

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({
            message: "Title and author are required"
        });
    }

    book.title = title;
    book.author = author;

    res.status(200).json(book);
});

// DELETE a book
router.delete("/:id", (req, res) => {
    const index = books.findIndex(b => b.id === Number(req.params.id));

    if (index === -1) {
        return res.status(404).json({ message: "Book not found" });
    }

    const deletedBook = books.splice(index, 1)[0];

    res.status(200).json({
        message: "Book deleted successfully",
        book: deletedBook
    });
});

module.exports = router; 
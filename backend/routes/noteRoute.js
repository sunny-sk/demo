const express = require("express");
const {
  getAllNotes,
  deleteNote,
  updateNote,
  getSingleNote,
  createNote,
} = require("../controllers/noteController");

const router = express.Router();

// create note
router.route("/note/").post(createNote);

// get note by id
router.route("/note/:id").get(getSingleNote);

// delete note by id
router.route("/note/:id").delete(deleteNote);

// update note by id
router.route("/note/:id").put(updateNote);

// get all notes
router.route("/note/").get(getAllNotes);

module.exports = router;

const asyncErrorHandler = require("../middlewares/helpers/asyncErrorHandler");
const ErrorHandler = require("../utils/errorHandler");
const { noteManager } = require("../utils/noteHelper");

/**
 * @route   POST /api/notes
 * @desc    Create a new note
 * @access  Public
 * @param   {Object} req.body - Contains `title` and `content`
 */
exports.createNote = asyncErrorHandler(async (req, res, next) => {
  const { title, content } = req.body;

  if (!title) {
    return next(new ErrorHandler("Please add title", 400));
  }
  if (!content) {
    return next(new ErrorHandler("Please add content", 400));
  }

  /* add more validation here for this we can use third party package here to validate the request body.
  */


  const newNote = noteManager.createNote({ title, content });

  return res.status(201).send({
    success: true,
    data: newNote,
    status: 201,
    message: "Note created successfully!",
  });
});

/**
 * @route   GET /api/notes/:id
 * @desc    Get a single note by ID
 * @access  Public
 * @param   {String} req.params.id - Note ID
 */
exports.getSingleNote = asyncErrorHandler(async (req, res, next) => {
  const noteId = req.params.id;

  if (!noteId) {
    return next(new ErrorHandler("Invalid request", 400));
  }

  const data = noteManager.getNoteById(noteId);

  if (!data) {
    return next(new ErrorHandler("Resource not found", 404));
  }

  return res.status(200).send({
    success: true,
    data,
    status: 200,
  });
});

/**
 * @route   DELETE /api/notes/:id
 * @desc    Delete a note by ID
 * @access  Public
 * @param   {String} req.params.id - Note ID
 */
exports.deleteNote = asyncErrorHandler(async (req, res, next) => {
  const noteId = req.params.id;

  if (!noteId) {
    return next(new ErrorHandler("Invalid request", 400));
  }

  const deleted = noteManager.deleteNoteById(noteId);

  if (!deleted) {
    return next(new ErrorHandler("Note not found", 404));
  }

  return res.status(200).json({
    success: true,
    message: "Note deleted successfully",
    status: 200,
  });
});

/**
 * @route   GET /api/notes
 * @desc    Get all notes
 * @access  Public
 */
exports.getAllNotes = asyncErrorHandler(async (req, res, next) => {
  const allNotes = noteManager.getAllNotes();

  return res.status(200).send({
    success: true,
    data: allNotes,
    metaData: {
      count: allNotes.length,
    },
    status: 200,
  });
});

/**
 * @route   PUT /api/notes/:id
 * @desc    Update a note by ID
 * @access  Public
 * @param   {String} req.params.id - Note ID
 * @param   {Object} req.body - Contains `title` and/or `content`
 */
exports.updateNote = asyncErrorHandler(async (req, res, next) => {
  const noteId = req.params.id;

  if (!noteId) {
    return next(new ErrorHandler("Invalid request", 400));
  }

  const { title, content } = req.body;

  const result = noteManager.updateNoteById(noteId, { title, content });

  if (!result) {
    return next(new ErrorHandler("Resource not found", 404));
  }

  return res.status(200).json({
    success: true,
    message: "Note updated successfully",
    status: 200,
  });
});

// Sample structure for a note
// [
//   {
//     _id: "id_abc123",
//     title: "Sample Note",
//     content: "Note content",
//     createdAt: "2025-04-17T10:00:00.000Z",
//     updatedAt: "2025-04-17T10:00:00.000Z"
//   }
// ]

// Generate a random ID
function generateRandomId() {
  return `id_${Math.random().toString(36).substr(2, 9)}`;
}

// Note class to manage CRUD operations (Singleton)
class Note {
  static instance = null;
  notes = [];

  constructor() {
    if (Note.instance) {
      return Note.instance;
    } else {
      Note.instance = this;
    }
  }

  /**
   * Get all notes sorted by createdAt in descending order (latest first)
   * @returns {Array} Sorted array of notes
   */
  getAllNotes() {
    return this.notes.sort(
      (note1, note2) => new Date(note2.createdAt) - new Date(note1.createdAt)
    );
  }

  /**
   * Create a new note
   * @param {Object} param0
   * @param {string} param0.title - Title of the note
   * @param {string} param0.content - Content of the note
   * @returns {Object} The created note
   */
  createNote({ title, content }) {
    const newNote = {
      _id: generateRandomId(),
      title,
      content,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.notes.push(newNote);
    return newNote;
  }

  /**
   * Get a note by its ID
   * @param {string} id - ID of the note
   * @returns {Object|false} Note object if found, otherwise false
   */
  getNoteById(id) {
    const result = this.notes.filter((e) => e._id === id);
    if (result.length === 0) return false;
    return result[0];
  }

  /**
   * Delete a note by its ID
   * @param {string} id - ID of the note
   * @returns {boolean|null} true if deleted, null if not found
   */
  deleteNoteById(id) {
    const indexOf = this.notes.findIndex((e) => e._id === id);
    if (indexOf === -1) {
      return null;
    }
    this.notes.splice(indexOf, 1);
    return true;
  }

  /**
   * Update a note by its ID
   * @param {string} id - ID of the note
   * @param {Object} param1
   * @param {string} param1.title - New title
   * @param {string} param1.content - New content
   * @returns {boolean|null} true if updated, null if note not found
   */
  updateNoteById(id, { title, content }) {
    const indexOf = this.notes.findIndex((e) => e._id === id);
    if (indexOf === -1) {
      return null;
    }
    const oldData = this.notes[indexOf];
    oldData.title = title;
    oldData.content = content;
    oldData.updatedAt = new Date();
    return true;
  }
}

// Export a singleton instance of Note
const noteManager = new Note();
module.exports.noteManager = noteManager;

# NoteWorthy Frontend

This project is the frontend for the NoteWorthy application, built using React and Vite. It provides a user interface for managing notes, including creating, editing, archiving, and deleting notes.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/FelixTeutsch/noteWorthy-frontend.git
   cd noteWorthy-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Components

### `NotesArea`
Displays a list of notes. It fetches notes from the backend and displays them based on the active route (current or archived).

### `NoteDetail`
Displays detailed information about a single note, including options to edit, archive, unarchive, or delete the note.

### `Modal`
A modal component for creating new notes. It includes form fields for the note title and content, and handles the save operation.

### `ModalEdit`
A modal component for editing existing notes. It includes form fields pre-filled with the note's current title and content, and handles the update operation.

### `CustomAlert`
Displays notifications for success, warning, and error messages.

## API Endpoints

The frontend interacts with the following API endpoints:

- `POST /save`: Save a new note.
- `PUT /update`: Update an existing note.
- `GET /listCurrent`: List all current notes.
- `GET /listArchived`: List all archived notes.
- `GET /get`: Get a specific note by ID.
- `GET /archive`: Archive a note.
- `GET /unarchive`: Unarchive a note.
- `DELETE /delete`: Delete a note.

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```
REACT_APP_API_URL=http://localhost:8090/noteWorthy-service
```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Note from './note';
import CustomAlert from './customAlert';
import NoNotes from './noNotes';

const NotesArea = ({ activeRoute, refresh }) => {
    const [notes, setNotes] = useState([]);
    const [error, setError] = useState(null);

    const apiUrl = process.env.REACT_APP_API_URL;

    const fetchNotes = async () => {
        const url = `${apiUrl}/${activeRoute === 'notes' ? 'listCurrent' : 'listArchived'}`;

        try {
            const response = await axios.get(url);
            setNotes(response.data);
            setError(null); // Reset error if fetch is successful
        } catch (error) {
            setError('Error fetching notes. Please try again later.');
            console.error('Error fetching notes:', error);
        }
    };

    useEffect(() => {
        fetchNotes();
    }, [activeRoute, apiUrl, refresh]);

    return (
        <div className="container m-auto w-full flex flex-row flex-wrap justify-center">
            {error && <CustomAlert type="error" title="Error" message={error} floating={false} />}
            {notes.length !== 0 ? (
                notes.map((note) => <Note key={note.id} {...note} />)
            ) : (
                <NoNotes activeRoute={activeRoute} />
            )}
        </div>
    );
};

export default NotesArea;
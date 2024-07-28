import React, {useEffect, useState} from 'react';
import {useParams, useNavigate, useLocation} from 'react-router-dom';
import axios from 'axios';
import NoteNavbar from '../components/noteNavbar';
import NoteDetail from '../components/noteDetail';
import CustomAlert from '../components/customAlert';

const Note = () => {
    const {note_id} = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [note, setNote] = useState(null);
    const [error, setError] = useState(null);
    const [customAlert, setCustomAlert] = useState(null);
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const response = await axios.get(`${apiUrl}/get`, {params: {id: note_id}});
                if (!response.data) {
                    navigate('/404');
                } else {
                    setNote(response.data);
                    setError(null); // Reset error if fetch is successful
                }
            } catch (error) {
                setError('Error fetching note. Please try again later.');
                console.error('Error fetching note:', error);
                navigate('/404');
            }
        };

        fetchNote();
    }, [note_id, apiUrl, navigate]);

    // Handle Buttons
    const handleArchive = async () => {
        try {
            const response = await axios.get(`${apiUrl}/archive`, {params: {id: note.id}});
            setNote(response.data);
            setCustomAlert({type: 'warning', title: 'Archived', message: 'The note has been archived.'});
        } catch (error) {
            console.log('Error archiving note:', error);
            setError('Error archiving note. Please try again later.');
        }
    };

    const handleUnarchive = async () => {
        try {
            const response = await axios.get(`${apiUrl}/unarchive`, {params: {id: note.id}});
            setNote(response.data);
            setCustomAlert({type: 'success', title: 'Unarchived', message: 'The note has been unarchived.'});
        } catch (error) {
            console.log('Error unarchiving note:', error);
            setError('Error unarchiving note. Please try again later.');
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`${apiUrl}/delete`, {params: {id: note.id}});
            setCustomAlert({type: 'success', title: 'Deleted', message: 'The note has been deleted.'});
            navigate(location.state?.prevRoute || '/');
        } catch (error) {
            console.log('Error deleting note:', error);
            setError('Error deleting note. Please try again later.');
        }
    };

    if (error) {
        setCustomAlert({type: 'error', title: 'Error', message: error});
    }

    const updateNote = (updatedNote) => {
        setNote(updatedNote);
    };
    
    return (
        <>
            <NoteNavbar routeArchived={note && note.archived} />
            {!note ?
                <div className="container m-auto w-full p-10 flex flex-col justify-center items-center text-white">Loading...</div>
                :
                <NoteDetail
                    note={note}
                    onArchive={handleArchive}
                    onUnarchive={handleUnarchive}
                    onDelete={handleDelete}
                    updateNote={updateNote}
                />
            }
            {customAlert &&
                <CustomAlert floating={true} {...customAlert} onClose={() => setCustomAlert(null)} />}
        </>
    );
};

export default Note;
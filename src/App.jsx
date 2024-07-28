import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Notes from './pages/notes';
import Search from './pages/search';
import Note from './pages/note';
import PageNotFound from './pages/pageNotFound';

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<Notes activeRoute="notes" />} />,
        <Route path="/archive" element={<Notes activeRoute="archive" />} />,
        <Route path="/search" element={<Search />} />,
        <Route path="/note/:note_id" element={<Note />} />,
        <Route path="*" element={<PageNotFound />} />
    ])
);

const App = () => {
    return <RouterProvider router={router} />;
}

export default App;

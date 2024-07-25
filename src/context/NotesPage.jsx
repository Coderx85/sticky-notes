"use client"
// import { db } from "../appwrite/databases";
import NoteCard from "../components/NoteCard";
import Controls from "../components/Controls";
import { useContext } from "react";
import { NotesContext } from "./NotesContext";

const NotesPage = () => {
    const { notes } = useContext(NotesContext);
    return (
        <div>
            {notes.map((note) => (
                <NoteCard note={note} key={note.$id} />
            ))}
            <Controls />
        </div>
    );
};

export default NotesPage;
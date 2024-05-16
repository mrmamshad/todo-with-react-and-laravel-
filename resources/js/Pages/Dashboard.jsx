import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import Todoitems from "./project/Todoitems";

export default function Dashboard({ auth }) {
    const [notes, setNotes] = useState([]);
    const [counter, setCounter] = useState(5);
    const [text, setText] = useState("");
    const [bool, setBool] = useState(false);

    useEffect(() => {
        fetch("notes.json")
            .then((res) => res.json())
            .then((data) => {
                setNotes(data);
            });
    }, []);

    function addTask() {
        const newNote = {
            id: counter,
            title: text,
        };
        setCounter((currentCounter) => currentCounter + 1);
        setNotes([...notes, newNote]);
        console.log(notes);
    }

    function deleteNote(id) {
        setNotes(notes.filter((note) => note.id !== id));
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Task Manager
                </h2>
            }
        >
            <Head title="Tado-App" />

            <div className="py-8 w-3/5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-3xl">
                        <div className="p-6 text-gray-900 dark:text-gray-100 flex flex-col items-center">
                            <h1 className="font-bold w-3/3 mb-4">Todo-App</h1>
                            <form
                                className="flex gap-4"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    addTask();
                                    setText("");
                                }}
                            >
                                <input
                                    className="rounded-lg px-4 bg-gray-700 py-2 h-9 border-0 border-gray-500 outline-none duration-200"
                                    type="text"
                                    value={text}
                                    placeholder="Write your next task"
                                    onChange={(e) => setText(e.target.value)}
                                />
                                <button className="">
                                    <AddIcon />
                                    Add
                                </button>
                            </form>

                            {notes.map((note) => (
                                <Todoitems
                                    key={note.id}
                                    note={note}
                                    deleteNote={deleteNote}
                                    allnotes = {setNotes}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

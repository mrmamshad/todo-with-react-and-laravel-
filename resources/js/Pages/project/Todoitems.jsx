import React, { useState } from "react";

function Todoitems({ note, deleteNote, allnotes }) {
    const [isedited, setisedited] = useState(false);
    const [notetitle, setnotetitle] = useState(note.title);

    return (
        <div key={note.id} className="flex  gap-3 mt-3 ">
            <div className="flex gap-3 w-[500px] py-2 mt-3 justify-between border-slate-400 border  shadow-md rounded-xl">
                {isedited ? (
                    <input
                        type="text"
                        className="w-24 bg-gray-400 mx-2 py-1 border rounded-2xl  text-black "
                        value={notetitle}
                        onChange={(e) => setnotetitle(e.target.value)}
                    />
                ) : (
                    <p className="ml-3">{note.title}</p>
                )}
                {isedited && (
                    <button
                        onClick={() => {
                            allnotes((currentnotestate) =>
                                currentnotestate.map((currentnote) =>
                                    currentnote.id === note.id
                                        ? { ...currentnote, title: notetitle }
                                        : currentnote
                                )
                            );
                            setisedited(false);
                        }}
                    >
                        save
                    </button>
                )}

                <button
                    onClick={() => setisedited((currentstate) => !currentstate)}
                >
                    Edit
                </button>

                {console.log(isedited)}
                <button className="mr-2" onClick={() => deleteNote(note.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default Todoitems;

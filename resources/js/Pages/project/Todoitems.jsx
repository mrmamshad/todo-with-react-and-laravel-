import React, { useState } from "react";
import "typeface-roboto";

function Todoitems({ note, deleteNote, allnotes }) {
    const [isedited, setisedited] = useState(false);
    const [notetitle, setnotetitle] = useState(note.title);
    const [ischecked, setischecked] = useState(false);

    return (
        <div key={note.id} className="flex  gap-3 mt-3 ">
            <div className="flex gap-3 w-[500px] py-2 mt-3 justify-between border-slate-700 border  shadow-md rounded-xl">
                <div className="flex ">
                    <input
                        type="checkbox"
                        name=""
                        checked={ischecked}
                        className=" mt-1 ml-1  bg-slate-600 rounded-full"
                        onChange={(e) => {
                            setischecked(e.target.checked);
                            console.log(ischecked);
                        }}
                    />
                    {ischecked ? (
                        <del className="ml-1 font-roboto font-semibold">
                            {note.title}
                        </del>
                    ) : (
                        <p className="ml-1 font-roboto font-semibold">
                            {isedited ? (
                                <input
                                    type="text"
                                    className="w-44  bg-gray-900  py-1 border  border-gray-700 rounded-2xl text-white"
                                    value={notetitle}
                                    onChange={(e) =>
                                        setnotetitle(e.target.value)
                                    }
                                />
                            ) : (
                                <p className="text-gray-400"> {note.title}</p>
                            )}
                        </p>
                    )}
                </div>

                <div className=" flex gap-3">
                    {isedited && (
                        <button
                            onClick={() => {
                                allnotes((currentnotestate) =>
                                    currentnotestate.map((currentnote) =>
                                        currentnote.id === note.id
                                            ? {
                                                  ...currentnote,
                                                  title: notetitle,
                                              }
                                            : currentnote
                                    )
                                );
                                setisedited(false);
                            }}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                            >
                                <path
                                    d="M7 3H17V9H7V3Z"
                                    stroke="#000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M7 3H5C4.44772 3 4 3.44772 4 4V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V7L15 3H7Z"
                                    stroke="#000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M17 21V13H7V21"
                                    stroke="#000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    )}

                    <button
                        onClick={() =>
                            setisedited((currentstate) => !currentstate)
                        }
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                        >
                            <path
                                d="M3 21v-3.75L16.81 3.44a1.5 1.5 0 0 1 2.12 0l2.12 2.12a1.5 1.5 0 0 1 0 2.12L7.25 21H3z"
                                stroke="#000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16 5l3 3"
                                stroke="#000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    <button
                        className="mr-2"
                        onClick={() => deleteNote(note.id)}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                        >
                            <path
                                d="M3 6h18M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6h14Z"
                                stroke="#000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10 11v6M14 11v6"
                                stroke="#000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Todoitems;

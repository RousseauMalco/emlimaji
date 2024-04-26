import React from 'react';
import { Link } from 'react-router-dom';

export function CSVTemplateLink({url}) {
    return (
        <>
        <a href={url} target="_blank" rel="noopener noreferrer">
                <button class=" bg-white font-semibold shadow-lg hover:bg-gray-200 border border-gray-400 py-2 h-10 px-5 rounded sm:rounded-xl" id="csvButton">
                Click here to get the Google Form template
                </button>
        </a>
        </>
    );
}
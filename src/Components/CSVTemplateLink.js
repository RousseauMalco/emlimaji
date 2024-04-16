import React from 'react';
import { Link } from 'react-router-dom';

export function CSVTemplateLink({url}) {
    return (
        <>
        <a href={url} target="_blank" rel="noopener noreferrer">
                <button class=" bg-white py-2 px-4 rounded sm:rounded-xl" id="csvButton">
                Click here to get the Google Form template
                </button>
        </a>
        </>
    );
}
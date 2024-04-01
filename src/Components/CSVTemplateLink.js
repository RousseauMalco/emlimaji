import React from 'react';
import { Link } from 'react-router-dom';

export function CSVTemplateLink({url}) {
    return (
        <>
        <a href={url} target="_blank" rel="noopener noreferrer">
                <button class="sm:rounded-lg" id="csvButton">
                Click here to get the Google Form template
                </button>
        </a>
        </>
    );
}
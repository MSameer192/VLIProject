import React from 'react'
import './BookTypes.css'
const BookTypes = () => {
    const OnClick = (e) => {
        const Elements = document.getElementsByClassName('BooksTypes');
        [...Elements].forEach(element => {
            if (element === e.target)
                element.classList.add('BooksTypesSelected')
            else
                element.classList.remove('BooksTypesSelected')
        });
    }
    return (
        <div className='BooksTypesContainer'>
            <button type='button' className='BooksTypes BooksTypesSelected Boldfont' onClick={OnClick}>Best Sellings</button>
            <button type='button' className='BooksTypes Boldfont' onClick={OnClick}>New Arrival</button>
            <button type='button' className='BooksTypes Boldfont' onClick={OnClick}>Science</button>
        </div>
    )
}

export default BookTypes
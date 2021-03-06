import React from 'react';


const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green' 
                type="search" 
                placeholder="Search Player"
                onChange={searchChange} >
            </input>
        </div>
    );
}

export default SearchBox;
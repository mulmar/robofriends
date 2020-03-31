import React from 'react';

const Searchbox = (fromApp) => {
 //   const { searchfield, searchChange } = fromApp;
    return (
            <div className='tc pd2'>
                <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search-robots' 
                onChange={fromApp.searchChange} // when a field is changed, run the function searchchange from the App component
                />
            </div>    
            );
}

export default Searchbox;
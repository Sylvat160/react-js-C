import React from 'react';

const User = () => {
     const marcel = () => {
        console.log('click')
     }
    return (
        <div className='User'>
            User list
            <button onclick={marcel}> user 4 </button>
        </div>
    );
};

export default User;
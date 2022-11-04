import React from 'react';



const Tag = ({ tags }) => {
    return (
        <div className='tags'>
            {tags.map((tag) => {
                return (
                    <span key={`${tag}`}> {tag}</span>
                );
            })}
        </div>
    );


};


export default Tag;
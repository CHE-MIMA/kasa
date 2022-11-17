import React from 'react';

const Tag = ({ tags }) => {
    return (
        <div className="tags">
            {tags.map((element) => {
                return <span className="tag" key={`${element}`}> {element}</span>;
            })}
        </div>
        // </div>
    );
};
export default Tag;
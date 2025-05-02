import React from 'react';

const Section_title = ({heading,subheading}) => {
    return (
        <div>
            <p>{subheading}</p>
            <h3>{heading}</h3>
        </div>
    );
};

export default Section_title;
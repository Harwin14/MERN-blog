import React from "react";
import './link.scss'

const Link = ({ title ,onClick}) => {
    return (
        <div onClick={onClick}>
            <p className="link">{title}</p>
        </div>
    );
};

export default Link;

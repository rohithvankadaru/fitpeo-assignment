import React from "react";

export const DataBox = ({ heading, money, data, imgTag, bgColor}) => {

    return (
        <div className="data-box flex align-center">
            <div className="logo-container flex justify-center align-center" style={{ backgroundColor: bgColor }}>
                {imgTag}
            </div>
            <div className='data-content flex flex-column justify-center align-center'>
                <p>{heading}</p>
                <h2>{money}</h2>
                <p>{data}</p>
                <p>this month</p>
            </div>
        </div>
    )
}
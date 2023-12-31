import React from "react";

export const DataBox = ({ heading, money, data, imgTag, bgColor, sensecsColor, arrow }) => {

    return (
        <div className="data-box flex align-center">
            <div className="logo-container flex justify-center align-center" style={{ backgroundColor: bgColor }}>
                {imgTag}
            </div>
            <div className='data-content flex flex-column justify-center'>
                <p style={{ color: 'darkgray', fontSize: '14px' }}>{heading}</p>
                <h2>{money}</h2>
                <div className="flex" style={{ fontSize: '12.5px', fontWeight: 'bold' }}>
                    <p style={{ color: sensecsColor || 'green' }}>
                        {arrow} {data}
                    </p>
                    <p style={{ color: 'darkgray', marginLeft: '5px' }} className="thisMonth">this month</p>
                </div>
            </div>
        </div>
    )
}
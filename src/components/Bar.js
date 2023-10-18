import React from "react";

export const Bar = ({ height, color, month}) => {

    return (
        <div>
            <div className="chart-bar" style={{ height: height, background: color || '#ede8e8' }}></div>
            <h5 className="text-center">{month}</h5>
        </div>
    )
}
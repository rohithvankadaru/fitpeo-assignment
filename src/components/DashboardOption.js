import React from "react";

export const DashboardOption = ({ optionName, optionLogo, backgroundColor, displayProp }) => {

    return (
        <div className="dashboard-option flex justify-between align-center" style={{ backgroundColor: backgroundColor || 'transparent' }}>
            <p className="flex align-center">
                {optionLogo} {optionName}
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" height="0.8em" viewBox="0 0 320 512" fill="white" display={displayProp} style={{ marginTop: "7px" }}><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
        </div>
    )
}
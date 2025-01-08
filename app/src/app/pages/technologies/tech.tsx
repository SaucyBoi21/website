import React from "react";

export default function Tech(techName: string, techLogo: string) {
    return (
        <>
            <h1>{techName}</h1>
            <img src={techLogo} alt="" />
        </>
    )
}
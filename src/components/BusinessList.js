import React from "react";
import Business from "./Business";

const businesses = [1, 2, 3, 4];

function BusinessList() {
    return (
        <>
            {businesses.map(business => <Business key={businesses.indexOf(business)}/>)}
        </>
    )
};

export default BusinessList;
import React from "react";
import loading from "../assets/loading.svg";

const Loading = ({ className, ...rest }) => (
    <div className={className}>
        <img src={loading} alt="Loading" />
    </div>
);

export default Loading;

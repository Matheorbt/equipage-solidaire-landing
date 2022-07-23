
import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
    return (
        <div className="loader-container">
            <TailSpin
                color="#00a6ff"
                height={75}
                width={75}
            />
        </div>
    )
}

export default Loader;
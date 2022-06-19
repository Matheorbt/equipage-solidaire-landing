
import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
    return (
        <div>
            <TailSpin
                color="#ff0000"
                height={100}
                width={100}
            />
        </div>
    )
}

export default Loader;
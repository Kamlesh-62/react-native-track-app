import React, { useContext, useEffect } from "react";
import { Context } from "../context/AuthContext";

const ResolveAuthScreen = () => {
    const { signinBackAfterRestart } = useContext(Context);

    useEffect ( () => {
        signinBackAfterRestart();
    }, [])
    return null;
}
export default ResolveAuthScreen;
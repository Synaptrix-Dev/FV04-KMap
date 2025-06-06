import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "../../components/Loader";
import { useAuth } from "../../context/data";

function ProtectRoutes(props) {
    const { authURL } = useAuth();
    const { Component } = props;
    return (
        <>
            {<Component />}
        </>
    );
}

export default ProtectRoutes;

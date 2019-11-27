import React, { useEffect, useState } from "react";
import { useAuth0 } from "../react-auth0-spa";

import {
    ComposableMap,
    Geographies,
    Geography,
    Marker
} from "react-simple-maps";

import Loading from "../components/Loading";

import topoJson from '../data/world-110m.json';

function getRandomizedOffset() {
    return `translate(${-12 + (Math.random() * 3)}, ${-24 + (Math.random() * 3)})`;
}

const Heatmap = () => {
    const [apiMessage, setApiMessage] = useState(null);
    const { getTokenSilently } = useAuth0();

    const callApi = async () => {
        try {
            const token = await getTokenSilently();

            const response = await fetch("https://r6ssdb9382.execute-api.us-east-1.amazonaws.com/dev/heatmap", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const responseData = await response.json();

            setApiMessage(responseData);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (apiMessage === null) {
            callApi();
        }
    });

    if (apiMessage === null) {
        return <Loading className="spinner-2" />;
    }

    return (
        <ComposableMap className="margin-auto-block">
            <Geographies geography={topoJson}>
                {({ geographies }) =>
                    geographies
                        .map(geo => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill="#EAEAEC"
                                stroke="#D6D6DA"
                            />
                        ))
                }
            </Geographies>
            {apiMessage.map((coordinates, index) => (
                <Marker key={index} coordinates={[coordinates.lng, coordinates.lat]}>
                    <g
                        fill="none"
                        stroke="#FF5533"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        transform={getRandomizedOffset()}
                    >
                        <circle cx="12" cy="10" r="3" />
                        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                    </g>
                </Marker>
            ))}
        </ComposableMap>
    );
};

export default Heatmap;

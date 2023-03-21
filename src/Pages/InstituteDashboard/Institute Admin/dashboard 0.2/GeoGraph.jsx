import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import "./geoGraph.css";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const markers = [
  { coordinates: [67.1193, 48.4897], color: "#FF7CC3" },
  { coordinates: [88.1193, 32.4897], color: "#FFA177" },
  { coordinates: [128.1193, -18.4897], color: "#FF8474" },
  { coordinates: [-88.1193, 36.4897], color: "#5EE2A0" },
  { coordinates: [18.1193, 6.4897], color: "#FF2" },
];

export default function GeoGraph() {
  return (
    <div className="w-[100%] h-[100%]">
      <ComposableMap style={{ width: "100%", height: "100%", fill: "#8787f9" }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        {markers.map(({ coordinates, color }) => (
          <Marker key={color} coordinates={coordinates}>
            <g
              fill="none"
              stroke={color}
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(-12, -24)"
            >
              <circle cx="12" cy="10" r="3" />
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
            </g>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}

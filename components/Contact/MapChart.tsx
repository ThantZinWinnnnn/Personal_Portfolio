"use client";
import React, { memo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1100,
      }}
      className="!w-full sm:!w-[40%] lg:!w-[50%] !h-full"
      // style={{width:"50%",height:"100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#11122B"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default memo(MapChart);

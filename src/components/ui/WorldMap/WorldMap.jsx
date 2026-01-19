"use client";

import * as React from "react";
import { AnimatePresence } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";
import { MapArcs } from "./MapArcs";
import { MapMarkers } from "./MapMarkers";
import { LocationPopup } from "./LocationPopup";
import { projectToPercent } from "./mapUtils";

export function WorldMap({
  dots = [],
  locations = [],
  lineColor = "#9a01cd",
  dotColor = "#22d3ee",
  backgroundColor = "transparent",
}) {
  const containerRef = React.useRef(null);
  const [hoveredLocation, setHoveredLocation] = React.useState(null);
  const [popupPosition, setPopupPosition] = React.useState({ x: 0, y: 0 });

  const svgMap = React.useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    return map.getSVG({
      radius: 0.22,
      color: dotColor + "60",
      shape: "circle",
      backgroundColor,
    });
  }, [dotColor, backgroundColor]);

  const handleHover = (location) => {
    const pos = projectToPercent(location.lat, location.lng);
    setPopupPosition(pos);
    setHoveredLocation(location);
  };

  return (
    <div
      ref={containerRef}
      className="w-full aspect-[2/1] relative font-sans overflow-hidden"
      style={{ backgroundColor }}
    >
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <MapArcs dots={dots} lineColor={lineColor} />
      <MapMarkers
        locations={locations}
        hoveredLocation={hoveredLocation}
        onHover={handleHover}
        onLeave={() => setHoveredLocation(null)}
        lineColor={lineColor}
      />
      <AnimatePresence>
        {hoveredLocation && (
          <LocationPopup location={hoveredLocation} position={popupPosition} />
        )}
      </AnimatePresence>
    </div>
  );
}

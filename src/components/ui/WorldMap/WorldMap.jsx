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
  activeLocationId,
  onLocationSelect,
}) {
  const containerRef = React.useRef(null);
  const [internalHoveredLocation, setInternalHoveredLocation] =
    React.useState(null);
  const [popupPosition, setPopupPosition] = React.useState({ x: 0, y: 0 });

  // Use controlled state if provided, otherwise internal state
  const hoveredLocation = activeLocationId
    ? locations.find((l) => l.id === activeLocationId) || null
    : internalHoveredLocation;

  const ZOOM = 1.6;
  const ZOOM_ORIGIN = { x: 55, y: 10 };

  // Calculate popup position whenever hoveredLocation changes
  React.useEffect(() => {
    if (hoveredLocation) {
      const pos = projectToPercent(hoveredLocation.lat, hoveredLocation.lng);
      // Adjust position based on zoom
      const zoomedX = (pos.x - ZOOM_ORIGIN.x) * ZOOM + ZOOM_ORIGIN.x;
      const zoomedY = (pos.y - ZOOM_ORIGIN.y) * ZOOM + ZOOM_ORIGIN.y;
      setPopupPosition({ x: zoomedX, y: zoomedY });
    }
  }, [hoveredLocation]);

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
    if (onLocationSelect) {
      onLocationSelect(location.id);
    } else {
      setInternalHoveredLocation(location);
    }
  };

  React.useEffect(() => {
    // Only set initial if no active location is selected and we're in uncontrolled mode
    // OR if we're in controlled mode and no location is selected yet?
    // Actually, simple logic: if we have locations and nothing is selected, select the first one.
    if (locations.length > 0) {
      if (activeLocationId === undefined && !internalHoveredLocation) {
        setInternalHoveredLocation(locations[0]);
      } else if (activeLocationId && !hoveredLocation) {
        // Controlled mode but ID might be invalid or not set?
        // Let parent handle initial selection usually, but we can trigger it.
        onLocationSelect && onLocationSelect(locations[0].id);
      }
    }
  }, [locations, activeLocationId]);

  return (
    <div
      ref={containerRef}
      className="w-full aspect-[2/1] relative font-sans overflow-hidden"
      style={{ backgroundColor }}
    >
      <div
        className="w-full h-full relative"
        style={{
          transform: `scale(${ZOOM})`,
          transformOrigin: `${ZOOM_ORIGIN.x}% ${ZOOM_ORIGIN.y}%`,
          transition: "transform 0.5s ease-out",
        }}
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
          lineColor={lineColor}
        />
      </div>

      <AnimatePresence>
        {hoveredLocation && (
          <div className="hidden sm:block">
            <LocationPopup
              location={hoveredLocation}
              position={popupPosition}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

import React, { useEffect } from "react";
import { useGeolocated } from "react-geolocated";

const Geo = ({ mapCoords, setMapCoords }) => {
  // Destructure the properties returned by the useGeolocated hook
  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false, // Set to false to avoid high-accuracy geolocation (saves battery)
    },
    userDecisionTimeout: 5000, // Timeout for user decision in milliseconds
  });

  // useEffect hook to update map coordinates when geolocation coordinates are available
  useEffect(() => {
    if (coords) {
      setMapCoords({ lat: coords.latitude, lng: coords.longitude });
    }
  }, [coords]); // Dependency array to run the effect when coords change

  // Conditional rendering based on geolocation availability, enablement, and coordinates
  return !isGeolocationAvailable ? (
    <div>🌐 Your browser does not support Geolocation API.</div>
  ) : !isGeolocationEnabled ? (
    <div>🚫 Geolocation is not enabled.</div>
  ) : mapCoords ? (
    <center>
      <table>
        <tbody>
          <tr>
            <td><strong>latitude</strong>:</td>
            <td>{mapCoords.lat}</td>
          </tr>
          <tr>
            <td><strong>longitude</strong>:</td>
            <td>{mapCoords.lng}</td>
          </tr>
        </tbody>
      </table>
    </center>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
};

export default Geo;

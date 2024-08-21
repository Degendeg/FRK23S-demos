import React, { useState, useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
  margin: '20px auto',
};

const Maps = ({ mapCoords, setMapCoords }) => {
  const [mapCenter, setMapCenter] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [isApiLoaded, setIsApiLoaded] = useState(false);

  // Update map center and marker position when mapCoords changes
  useEffect(() => {
    if (mapCoords) {
      setMapCenter(mapCoords);
      setMarkerPosition(mapCoords);
    }
  }, [mapCoords]);

  // Load Google Maps API
  useEffect(() => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_MAPS_API_KEY,
      version: 'weekly',
      libraries: ['places'],
    });

    loader.importLibrary('places').then(() => setIsApiLoaded(true));
  }, []);

  // Show loading message until API is loaded
  if (!isApiLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <MapWithAutocomplete
      mapCenter={mapCenter}
      setMapCoords={setMapCoords}
      setMapCenter={setMapCenter}
      markerPosition={markerPosition}
      setMarkerPosition={setMarkerPosition}
    />
  );
};

const MapWithAutocomplete = ({ mapCenter, setMapCoords, setMapCenter, markerPosition, setMarkerPosition }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
  });

  // Handle input change
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  // Handle place selection from suggestions
  const handleSelect = async (description) => {
    setValue(description, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address: description });
      const { lat, lng } = await getLatLng(results[0]);
      const newCenter = { lat, lng };
      setMapCoords(newCenter);
      setMapCenter(newCenter);
      setMarkerPosition(newCenter);
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  // Render autocomplete suggestions
  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <div
          key={place_id}
          onClick={() => handleSelect(main_text)}
          style={{ cursor: 'pointer' }}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </div>
      );
    });

  return (
    <div>
      <h2>Where are you? 🗺️</h2>
      <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Type an address"
      />
      {status === 'OK' && <div>{renderSuggestions()}</div>}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={10}
      >
        <Marker position={markerPosition} />
      </GoogleMap>
    </div>
  );
};

export default Maps;

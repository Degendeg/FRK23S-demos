import React, { useCallback, useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';

const Cam = () => {
  const webcamRef = useRef(null);
  const [permissionGranted, setPermissionGranted] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const checkPermissions = () => {
    navigator.permissions.query({ name: 'camera' }).then((permission) => {
      if (permission.state === 'granted') {
        setPermissionGranted(true);
      } else if (permission.state === 'denied') {
        setPermissionGranted(false);
      } else {
        // Ask for permission
        navigator.mediaDevices.getUserMedia({ video: true })
          .then(() => setPermissionGranted(true))
          .catch(() => setPermissionGranted(false));
      }
    });
  };

  useEffect(() => {
    checkPermissions();
  }, []);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    // TODO: Add fetch call here to image hosting so we get URL in the end
    setCapturedImage(imageSrc);
  }, [webcamRef]);

  if (permissionGranted === null) {
    return <div>Controlling access...</div>;
  }

  if (!permissionGranted) {
    return <div>🚫 Camera access denied, please allow it by changing your browser privacy settings.</div>;
  }

  return (
    <div>
      <h2>Webcam 📷</h2>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <br />
      <button onClick={capture}>Capture photo</button>
      {capturedImage && (
        <div>
          <h3>Captured Photo:</h3>
          <img style={{ border: '5px solid gray', borderRadius: '10px' }} src={capturedImage} alt="Captured" />
        </div>
      )}
    </div>
  );
};

export default Cam;

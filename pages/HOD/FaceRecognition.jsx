// src/pages/HOD/FaceRecognition.jsx

import React, { useEffect, useRef, useState } from 'react';
import { loadModels, detectFace } from '../../utils/faceUtils';

const FaceRecognition = () => {
  const videoRef = useRef();
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    loadModels();
    startVideo();
  }, []);

  const startVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: {} })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error(err));
  };

  const handleVerify = async () => {
    const result = await detectFace(videoRef);
    if (result) {
      setVerified(true);
    } else {
      alert('Face Not Detected!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <video ref={videoRef} autoPlay muted width="400" height="300" />
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4"
        onClick={handleVerify}
      >
        Verify Face
      </button>

      {verified && <p className="text-green-600 mt-4">Face Verified Successfully!</p>}
    </div>
  );
};

export default FaceRecognition;

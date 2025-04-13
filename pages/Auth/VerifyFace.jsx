import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import { useNavigate } from "react-router-dom";

const VerifyFace = () => {
  const videoRef = useRef();
  const navigate = useNavigate();
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    loadModels();
    startVideo();
  }, []);

  const loadModels = async () => {
    setMessage("Loading Face Recognition Models...");
    await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
    await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
    await faceapi.nets.faceRecognitionNet.loadFromUri("/models");
    setMessage("Show Your Face to Verify...");
  };

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: {} })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.log(err));
  };

  const handleVerify = async () => {
    const detections = await faceapi.detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptor();

    if (detections) {
      setMessage("Face Verified Successfully!");
      setTimeout(() => {
        navigate("/hod/dashboard"); // Redirect HOD to Dashboard
      }, 1000);
    } else {
      setMessage("Face Not Detected! Try Again");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">{message}</h2>
      <video ref={videoRef} autoPlay muted className="rounded shadow-lg" width="400" />
      <button
        onClick={handleVerify}
        className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Verify Face
      </button>
    </div>
  );
};

export default VerifyFace;

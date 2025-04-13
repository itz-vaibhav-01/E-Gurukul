// src/utils/faceUtils.js

import * as faceapi from 'face-api.js';

export const loadModels = async () => {
  const MODEL_URL = '/models';
  await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
  await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
  await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
};

export const detectFace = async (videoRef) => {
  const detections = await faceapi.detectSingleFace(
    videoRef.current,
    new faceapi.TinyFaceDetectorOptions()
  ).withFaceLandmarks().withFaceDescriptor();

  return detections;
};

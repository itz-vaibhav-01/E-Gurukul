// src/pages/HOD/FaceVerification.jsx

import React, { useState } from 'react';
import FaceRecognition from '../../components/FaceRecognition/Facerecognition';

const FaceVerification = () => {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div className="p-4">
      {!isVerified ? (
        <FaceRecognition onFaceVerified={() => setIsVerified(true)} />
      ) : (
        <div>
          <h2 className="text-xl font-bold mb-4">Face Verified Successfully!</h2>
          <p className="text-green-500">You can now access HOD Features.</p>
        </div>
      )}
    </div>
  );
};

export default FaceVerification;

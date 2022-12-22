import React from 'react';
import { Routes, Route } from 'react-router-dom';

import VerifyInsurance from './routes/verify';

function App() {
  return (
    <Routes>
      <Route path="/verify/:encodedData" element={<VerifyInsurance />} />
    </Routes>
  );
}

export default App;

import React from 'react';
import { Canvas } from '@react-three/fiber';

import Box from './components/Three/Box';

const App = () => {
  return (
    <div>
    App
    <br />

    <Canvas>
    <Box />
    </Canvas>

    </div>
  );
}

export default App;

import React from 'react';
import { Canvas } from '@react-three/fiber';

import Box from './components/Three/Box';
import ViewsLayout from './layouts/views';

const App = () => {
  return (
    <ViewsLayout>
    App
    <br />

    <Canvas>
    <Box />
    </Canvas>

    </ViewsLayout>
  );
}

export default App;

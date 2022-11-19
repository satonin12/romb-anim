import React from 'react';
import * as THREE from 'three'

const Box = () => {
  return (
    <>
      <mesh
        position={[-1.2, 0, 0]}
        scale={1}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh>
    </>
  );
};

export default Box;

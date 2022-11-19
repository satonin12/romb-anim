import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Box = () => {
    const currentBoxRef = useRef<THREE.Mesh>(null!);

    useFrame((state, delta) => currentBoxRef.current.rotation.x += 0.01);

    return (
      <>
          <mesh
            position={[0, 5, 0]}
            ref={currentBoxRef}
            scale={5}
          >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color='hotpink' />
          </mesh>
      </>
    );
};

export default Box;

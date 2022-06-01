import 'aframe';
import 'aframe-mirror';
import { Scene, Box, Plane, Camera } from '@belivvr/aframe-react';

export default function App() {
  return (
    <Scene>
      <Box
        position={{ x: -1, y: 0.5, z: -3 }}
        rotation={{ x: 0, y: 45, z: 0 }}
        color="blue"
      />

      <Plane
        position={{ x: -1, y: 0.5, z: -16 }}
        scale={{ x: 10, y: 10, z: 10 }}
        mirror
      />

      <Camera>
        <Box color="red" />
      </Camera>
    </Scene>
  );
}

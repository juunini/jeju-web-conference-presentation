import 'aframe';
import 'aframe-mirror';
import { Scene, Box, Plane, Camera } from '@belivvr/aframe-react';

export default function App() {
  return (
    <Scene>
      <Plane
        position={{ x: 0, y: 0, z: -10 }}
        scale={{ x: 10, y: 10, z: 10 }}
        mirror
      />

      <Camera>
        <Box color="red" />
      </Camera>
    </Scene>
  );
}

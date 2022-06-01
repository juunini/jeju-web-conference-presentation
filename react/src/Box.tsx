import 'aframe';
import { Scene, Box } from '@belivvr/aframe-react';

export default function App() {
  return (
    <Scene>
      <Box
        position={{ x: -1, y: 0.5, z: -3 }}
        rotation={{ x: 0, y: 45, z: 0 }}
        color="blue"
      />
    </Scene>
  );
}

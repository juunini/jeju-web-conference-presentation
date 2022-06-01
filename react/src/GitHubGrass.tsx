import 'aframe';
import 'aframe-orbit-controls';
import 'aframe-environment-component';
import { Scene, Box, Entity, Camera, Light } from '@belivvr/aframe-react';

const COMMITS: number[] = [
  6, 0, 3, 20, 5, 3, 7,
  2, 4, 0, 0, 2, 5, 18,
  8, 3, 1, 1, 9, 21, 3,
  0, 1, 15, 5, 49, 44, 68,
  6, 0, 3, 20, 5, 3, 7,
  2, 4, 0, 0, 2, 5, 18,
  8, 3, 1, 1, 9, 21, 3,
  0, 1, 15, 5, 49, 44, 68,
  6, 0, 3, 20, 5, 3, 7,
  2, 4, 0, 0, 2, 5, 18,
  8, 3, 1, 1, 9, 21, 3,
  0, 1, 15, 5, 49, 44, 68,
  6, 0, 3, 20, 5, 3, 7,
  2, 4, 0, 0, 2, 5, 18,
  8, 3, 1, 1, 9, 21, 3,
  0, 1, 15, 5, 49, 44, 68,
  6, 0, 3, 20, 5, 3, 7,
  2, 4, 0, 0, 2, 5, 18,
  8, 3, 1, 1, 9, 21, 3,
  0, 1, 15, 5, 49, 44, 68,
  6, 0, 3, 20, 5, 3, 7,
  2, 4, 0, 0, 2, 5, 18,
  8, 3, 1, 1, 9, 21, 3,
  0, 1, 15, 5, 49, 44, 68,
  6, 0, 3, 20, 5, 3, 7,
  2, 4, 0, 0, 2, 5, 18,
  8, 3, 1, 1, 9, 21, 3,
  0, 1, 15, 5, 49, 44, 68,
];

function App() {
  return (
    <Scene
      environment="
        flatShading: true;
        skyType: gradient;
        skyColor: #190628;
        horizonColor: #231437;
        ground: hills;
        groundYScale: 5;
        groundTexture: none;
        groundColor: #180625;
        grid: 2x2;
        gridColor: #6B95DA;
      "
    >
      <Camera
        near={1}
        wasdControlsEnabled={false}
        lookControlsEnabled={false}
        orbit-controls="
          autoRotate: true;
          autoRotateSpeed: -0.1;
          rotateSpeed: 0.1;
          target: 0 0 0;
          initialPosition: 0 8 -18;
          minPolarAngle: 0;
          maxPolarAngle: 90;
        "
      />
      
      <Entity
        position={{ x: -(COMMITS.length / 7 / 2), y: 2, z: 7 / 2 }}
        rotation={{ x: 0, y: 90, z: 0 }}
      >
        {
          COMMITS.map((count: number, index: number) => {
            const positionX = 7 - index % 7;
            const positionY = count / 20;
            const positionZ = Math.floor(index / 7);
            const position = { x: positionX, y: positionY, z: positionZ };

            return (
              <Box
                key={`commit${Date.now()}${Math.random()}`}
                width={1}
                height={positionY * 2}
                color={`rgb(0, ${count > 255 ? 255 : count}, 0)`}
                position={position}
              />
            )
          })
        }
      </Entity>

      <Light
        type="directional"
        position={{ x: 0, y: -0.5, z: -20 }}
        intensity={2}
      />

      <Light
        type="directional"
        position={{ x: 0, y: -0.5, z: 20 }}
        intensity={2}
      />
    </Scene>
  );
}

export default App;

import 'aframe';
import 'aframe-orbit-controls';
import 'aframe-environment-component';
import { Scene, Camera, Light, Box, Entity } from '@belivvr/aframe-react';

function generateRandomNumber(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

const WEEK: number = 7;
const NUMBER_OF_WEEKS: number = 34;
const COMMITS: number[] = [...new Array(WEEK * NUMBER_OF_WEEKS)]
  .map(() => generateRandomNumber(0, 30));

export default function Grass(): JSX.Element {
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

      <Light type="ambient" />
      <Light
        type="directional"
        position={{ x: 0, y: -0.5, z: -20 }}
        intensity={3}
      />
      <Light
        type="directional"
        position={{ x: 0, y: -0.5, z: 20 }}
        intensity={3}
      />

      {/* ↓ position, rotation */}
      <Entity
        position={{ x: -COMMITS.length / WEEK / 2, y: 2, z: WEEK / 2 }}
        rotation={{ x: 0, y: 90, z: 0 }}
      >
      {/* ↑ position, rotation */}
        {
          COMMITS.map((count: number, index: number) => {
            const height: number = count / 10;
            const currentWeek: number = Math.floor(index / WEEK);

            return (
              <Box
                height={height}
                position={{ x: index % WEEK, y: height / 2, z: currentWeek }}
                color={`rgb(0, ${count}, 0)`}
              />
            )
          })
        }
      </Entity>
    </Scene>
  );
}

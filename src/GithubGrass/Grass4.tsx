import 'aframe';
import 'aframe-orbit-controls';
import 'aframe-environment-component';
import { Scene, Camera, Light, Box } from '@belivvr/aframe-react';

/** ↓ */
const WEEK: number = 7;
const COMMITS: number[] = [
  6, 1, 3, 20, 5, 3, 7,
];
/** ↑ */

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

      {/* ↓ */}
      {
        COMMITS.map((count: number, index: number) => {
          const height: number = count / 10;

          return (
            <Box
              height={height}
              position={{ x: index % WEEK, y: 0, z: 0 }}
              color={`rgb(0, ${count}, 0)`}
            />
          );
        })
      }
      {/* ↑ */}
    </Scene>
  );
}

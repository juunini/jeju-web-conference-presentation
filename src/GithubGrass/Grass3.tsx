import 'aframe';
import 'aframe-orbit-controls';
import 'aframe-environment-component';
import { Scene, Camera, Light, Box } from '@belivvr/aframe-react';

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
      <Box color={`rgb(0, 255, 0)`} />
      {/* ↑ */}
    </Scene>
  );
}

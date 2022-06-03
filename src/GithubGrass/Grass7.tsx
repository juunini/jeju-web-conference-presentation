import 'aframe';
import 'aframe-orbit-controls';
import 'aframe-environment-component';
import { Scene, Camera, Light, Box, Entity } from '@belivvr/aframe-react';

const WEEK: number = 7;
// 갯수 많아짐
const COMMITS: number[] = [
  6, 1, 3, 20, 5, 3, 7,
  2, 4, 1, 1, 2, 5, 18,
  8, 3, 1, 1, 9, 21, 3,
  1, 1, 15, 5, 49, 44, 68,
];
// 

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

      <Entity
        position={{ x: 0, y: 2, z: 0 }}
      >
        {
          COMMITS.map((count: number, index: number) => {
            const height: number = count / 10;
            // 
            const currentWeek: number = Math.floor(index / WEEK);
            // 

            return (
              <Box
                height={height}
                // z
                position={{ x: index % WEEK, y: height / 2, z: currentWeek }}
                // 
                color={`rgb(0, ${count}, 0)`}
              />
            );
          })
        }
      </Entity>
    </Scene>
  );
}

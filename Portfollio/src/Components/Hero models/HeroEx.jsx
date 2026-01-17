// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { useMediaQuery } from 'react-responsive';
// import { Room }  from '../Hero models/Room.jsx';
// // import { Desk } from '../Hero models/Desk.jsx';
// import HeroLights from '../Hero models/HeroLights.jsx';
// import Particles from '../Hero models/Particles.jsx';

// const HeroEx = () => {
//     const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
//     const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

//     return (
//         <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
             

//             <OrbitControls 
//             enablePan={false}
//             enableZoom={!isTablet}
//             maxDistance={20}
//             minDistance={5}
//             minPolarAngle={Math.PI / 5}
//             maxPolarAngle={Math.PI / 2}
//            />

//            <HeroLights />

//            <Particles count={100} />   

//            <group
//            scale={isMobile? 0.7 : 1}
//            poition={[0, -3.5, 0]}
//            rotation={[0, -Math.PI /4, 0]}
//            >
//                  <Room />
//            </group>

//         </Canvas>
//     )
// }

// export default HeroEx;



//########################--------------------#########################-------------------#######################




// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { useMediaQuery } from 'react-responsive';
// import { Room } from '../Hero models/Room.jsx';
// import HeroLights from '../Hero models/HeroLights.jsx';
// import Particles from '../Hero models/Particles.jsx';
// import { useRef } from 'react';

// const RotatingGroup = ({ children, ...props }) => {
//   const groupRef = useRef();

//   // This runs every frame
//   useFrame(() => {
//     if (groupRef.current) {
//       groupRef.current.rotation.y += 0.003; // adjust speed here
//     }
//   });

//   return (
//     <group ref={groupRef} {...props}>
//       {children}
//     </group>
//   );
// };

// const HeroEx = () => {
//   const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
//   const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

//   return (
//     <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
//       <OrbitControls
//         enablePan={false}
//         enableZoom={!isTablet}
//         maxDistance={20}
//         minDistance={5}
//         minPolarAngle={Math.PI / 5}
//         maxPolarAngle={Math.PI / 2}
//       />

//       <HeroLights />
//       <Particles count={100} />

//       <RotatingGroup
//         scale={isMobile ? 0.7 : 1}
//         position={[0, -3.5, 0]}
//         rotation={[0, -Math.PI / 4, 0]}
//       >
//         <Room />
//       </RotatingGroup>
//     </Canvas>
//   );
// };

// export default HeroEx;




//------------------------------------------------------------------------


import { Canvas, useFrame } from '@react-three/fiber';  
import { OrbitControls, Center } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { Room } from '../Hero models/Room.jsx';
import HeroLights from '../Hero models/HeroLights.jsx';
import Particles from '../Hero models/Particles.jsx';
import { useRef } from 'react';

const RotatingGroup = ({ children, ...props }) => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003; // rotation speed
    }
  });

  return (
    <group ref={groupRef} {...props}>
      {children}
    </group>
  );
};

const HeroEx = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}    
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <HeroLights />
      <Particles count={100} />

      <RotatingGroup
        scale={isMobile ? 0.7 : 1}
        position={[0, 1.5, 0]} // keeps model at correct height
      >
        <Center>
          <Room />
        </Center>
      </RotatingGroup>
    </Canvas>
  );
};

export default HeroEx;

import React from 'react'
import { Suspense } from 'react'
import { Canvas} from '@react-three/fiber'
import {OrbitControls, Preload, useGLTF} from '@react-three/drei'


// A 3d figure for adding some style 

function Stars  ()  {
  const space = useGLTF('./nebula_mapa/scene.gltf')

  return (
   <mesh>
<hemisphereLight intensity={0.5}/>
<pointLight intensity={1} />
<primitive
object={space.scene}
scale = {4}
position={[0,1,0]}
/>
   </mesh>
  );
};

const Molecules = () => {
  return (
       <div className='h-screen w-full    '>

      <Canvas className='h-screen'
      
      frameloop="demand"
     
      gl={{preserveDrawingBuffer:true}}
      camera={{ position: [-10, 10, 50], fov:10 }}>
        <ambientLight intensity={0.5} />
        <Suspense  >
        <OrbitControls 
  enableZoom={false}
  maxPolarAngle={4}
  minPolarAngle={1}
  autoRotate = {true}
  autoRotateSpeed={0.5}
  
  />
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
  </div>
    
  );
};

export default Molecules;
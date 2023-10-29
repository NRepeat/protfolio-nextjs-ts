"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
function Box(props) {

  // useFrame(() => { ref.current.position.x = 0 })



  return (
    props.position.map((pos,i) => (<mesh
      {...props}
      key={i}
      position={pos}
    >
      <boxGeometry args={[1, 1, 1]} />
    </mesh>))
  )
}
export default function DHomePage() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[[0, 0, 0],[1, 0, 0], [-1, 0, 0],[0, 1, 0],[0, -1, 0],[1, -1, 0],[1, 1, 0],[-1, -1, 0],[-1, 1, 0]]} />
  
      <OrbitControls />
    </Canvas>
  )
}

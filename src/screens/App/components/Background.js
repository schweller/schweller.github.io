import React from 'react';
import * as THREE from 'three'
import { vertexShader, fragmentShader } from '../shaders'

const generateParticlesPositionScale = (gap, x, y) => {
  const totalParticles = x * y
  let positions = new Float32Array( totalParticles * 3 )
  let scales = new Float32Array( totalParticles )
  let i = 0, j = 0;
  for ( let ix = 0; ix < x; ix++ ) {
    for ( let iy = 0; iy < y; iy++ ) {
      positions[ i ] = ix * gap - ( ( x * gap ) / 2 ) // x
      positions[ i + 1 ] = 0 // y
      positions[ i + 2 ] = iy * gap - ( ( y * gap ) / 2 ) // z
      scales[ j ] = 1
      i += 3
      j ++
    }
  }

  return { positions, scales }
} 

const Particles = () => {
  let count=0
  const { useRef, useEffect, useState } = React
  const mount = useRef(null)
  const [isAnimating, setAnimating] = useState(true)
  const controls = useRef(null)
  
  useEffect(() => {
    let width = mount.current.clientWidth
    let height = mount.current.clientHeight
    let mouseX = 1
    let frameId

    const scene = new THREE.Scene()
    scene.background = new THREE.Color("rgb(255,255,255")

    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 10000)
    camera.position.y = 1000
    camera.position.z = 100
    
    const SEPARATION = 100, AMOUNTX = 300, AMOUNTY = 200
    const { positions, scales } = generateParticlesPositionScale(SEPARATION, AMOUNTX, AMOUNTY)
    
    const geometry = new THREE.BufferGeometry();
    geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ))
    geometry.addAttribute( 'scale', new THREE.BufferAttribute( scales, 1 ) )
    
    const color = new THREE.Color("rgb(0,0,0)")
    color.lerp(new THREE.Color("rgb(0,0,0)"), 0.5)
    
    const material = new THREE.ShaderMaterial( {
      uniforms: {
        color: { value: color }
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader
    })

    let particles = new THREE.Points(geometry, material)   
    
    const renderer = new THREE.WebGLRenderer({antialias: true})
    renderer.setPixelRatio(window.devicePixelRatio)
    scene.add(particles)
    renderer.setSize(width, height)

    const renderScene = () => {
      camera.position.x += ( mouseX - camera.position.x ) * .05
      camera.position.y += ( - (window.scrollY*10) - camera.position.y ) * .05
      //Clamp camera's y position
      if (camera.position.y<1000) {
        camera.position.y=1000
      }
      camera.position.z += ( - (window.scrollY*10) - camera.position.z ) * .05
      //Clamp camera's z position
      if (camera.position.z<-12000) {
        camera.position.z = -12000        
      }
      camera.lookAt( scene.position )
      var positions = particles.geometry.attributes.position.array
      var scales = particles.geometry.attributes.scale.array
      var i = 0, j = 0;
      for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
        for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
          positions[ i + 1 ] = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) +
            ( Math.sin( ( iy + count ) * 0.5 ) * 50 )
          scales[ j ] = ( Math.sin( ( ix + count ) * 0.1 ) + 1 ) * 3 +
            ( Math.sin( ( iy + count ) * 0.1 ) + 1 ) * 3
          i += 3;
          j ++;
        }
      }
      particles.geometry.attributes.position.needsUpdate = true;
      particles.geometry.attributes.scale.needsUpdate = true;
      renderer.render(scene, camera)
      count+=0.05
    }

    const handleResize = () => {
      width = mount.current.clientWidth 
      height = mount.current.clientHeight
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderScene()
    }
    
    const handleMouseMove = (e) => {
      mouseX = e.clientX - window.innerWidth / 2
    }
    
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        e.preventDefault();
        mouseX = e.touches[0].pageX - window.innerWidth / 2
      }
    }
    
    const handleTouchMove = (e) => {
      if (e.touches.length === 1) {
        e.preventDefault();
        mouseX = e.touches[0].pageX - window.innerWidth / 2
      }
    }   
    
    const animate = () => {
      renderScene()
      frameId = window.requestAnimationFrame(animate)
    }

    const start = () => {
      if (!frameId) {
        frameId = requestAnimationFrame(animate)
      }
    }

    const stop = () => {
      cancelAnimationFrame(frameId)
      frameId = null
    }

    mount.current.appendChild(renderer.domElement)
    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchmove', handleTouchMove)
    start()

    controls.current = { start, stop }
    
    return () => {
      stop()
      window.removeEventListener('resize', handleResize)
      mount.current.removeChild(renderer.domElement)

      scene.remove(particles)
      geometry.dispose()
      material.dispose()
    }
  }, [])

  useEffect(() => {
    if (isAnimating) {
      controls.current.start()
    } else {
      controls.current.stop()
    }
  }, [isAnimating])
  
  return <div className="Particles" ref={mount} onClick={() => setAnimating(!isAnimating)} />
}

export default Particles

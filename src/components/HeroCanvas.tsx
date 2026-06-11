import { useMemo, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// A slowly rotating particle sphere that drifts toward the pointer.
// Lightweight (one Points object), and disabled for reduced-motion / tiny screens.
function useThemeColor() {
  const [color, setColor] = useState('#2f6f5e');
  useEffect(() => {
    const read = () =>
      setColor(document.documentElement.getAttribute('data-theme') === 'dark' ? '#5ed3b0' : '#2f6f5e');
    read();
    const obs = new MutationObserver(read);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => obs.disconnect();
  }, []);
  return color;
}

function ParticleSphere() {
  const ref = useRef<THREE.Points>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const color = useThemeColor();

  // Build the geometry imperatively — more reliable than declarative
  // <bufferAttribute> across three/R3F versions.
  const geometry = useMemo(() => {
    const count = 2600;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Fibonacci sphere for even distribution
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = 2.2 + Math.random() * 0.12;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.06;
    // ease toward pointer for a parallax tilt
    ref.current.rotation.x += (pointer.current.y * 0.35 - ref.current.rotation.x) * 0.04;
    ref.current.rotation.z += (pointer.current.x * 0.15 - ref.current.rotation.z) * 0.04;
  });

  return (
    <points ref={ref} geometry={geometry} position={[2.6, 0.2, -0.5]} scale={0.95}>
      <pointsMaterial
        size={0.055}
        sizeAttenuation
        transparent
        opacity={0.95}
        color={color}
        depthWrite={false}
      />
    </points>
  );
}

export default function HeroCanvas() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tiny = window.innerWidth < 860;
    setEnabled(!reduced && !tiny);
  }, []);

  if (!enabled) return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    >
      <ParticleSphere />
    </Canvas>
  );
}

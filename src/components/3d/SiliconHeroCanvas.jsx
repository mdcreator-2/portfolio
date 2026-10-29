"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function SiliconHeroCanvas() {
  const containerRef = useRef(null);
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof window === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 2. Groups
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    const coreGroup = new THREE.Group();
    worldGroup.add(coreGroup);

    // 3. Silicon Crystal Core (Octahedron + Icosahedron inner cage)
    const outerGeo = new THREE.IcosahedronGeometry(1.6, 0);
    const outerMat = new THREE.MeshPhysicalMaterial({
      color: 0x0f172a,
      metalness: 0.85,
      roughness: 0.15,
      transmission: 0.5,
      thickness: 1.2,
      ior: 1.65,
      wireframe: false,
      transparent: true,
      opacity: 0.85,
      reflectivity: 0.9,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    coreGroup.add(outerMesh);

    // Subtle edge highlight wireframe
    const wireGeo = new THREE.WireframeGeometry(outerGeo);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.45,
      linewidth: 1,
    });
    const wireLines = new THREE.LineSegments(wireGeo, wireMat);
    coreGroup.add(wireLines);

    // Inner glowing core
    const innerGeo = new THREE.OctahedronGeometry(0.85, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x059669,
      emissiveIntensity: 1.2,
      roughness: 0.2,
      metalness: 0.9,
      wireframe: true,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Center illuminated emitter point
    const centerNodeGeo = new THREE.SphereGeometry(0.25, 16, 16);
    const centerNodeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
    });
    const centerNode = new THREE.Mesh(centerNodeGeo, centerNodeMat);
    coreGroup.add(centerNode);

    // 4. Concentric Gyroscope / Orbital Silicon Traces
    const ringGroup = new THREE.Group();
    coreGroup.add(ringGroup);

    const createRing = (radius, tube, color, rotX, rotY) => {
      const ringGeo = new THREE.TorusGeometry(radius, tube, 16, 64);
      const ringMat = new THREE.MeshStandardMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.4,
        roughness: 0.3,
        metalness: 0.8,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = rotX;
      ring.rotation.y = rotY;
      ringGroup.add(ring);
      return ring;
    };

    const ring1 = createRing(2.3, 0.02, 0x38bdf8, Math.PI / 4, 0);
    const ring2 = createRing(2.7, 0.015, 0x10b981, -Math.PI / 3, Math.PI / 6);
    const ring3 = createRing(3.1, 0.012, 0x64748b, Math.PI / 2, Math.PI / 4);

    // 5. Floating Packet Particles
    const particleCount = 280;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x38bdf8);
    const emeraldColor = new THREE.Color(0x10b981);
    const dimColor = new THREE.Color(0x334155);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.5 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const rand = Math.random();
      const chosenColor = rand > 0.6 ? cyanColor : rand > 0.3 ? emeraldColor : dimColor;
      particleColors[i * 3] = chosenColor.r;
      particleColors[i * 3 + 1] = chosenColor.g;
      particleColors[i * 3 + 2] = chosenColor.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    worldGroup.add(particles);

    // 6. Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x38bdf8, 2.5);
    keyLight.position.set(5, 6, 4);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x10b981, 2.0);
    rimLight.position.set(-6, -4, -3);
    scene.add(rimLight);

    const pointGlow = new THREE.PointLight(0x38bdf8, 2, 8);
    pointGlow.position.set(0, 0, 0);
    scene.add(pointGlow);

    // 7. Interactive Mouse & Drag Tracking
    const target = { x: 0, y: 0 };
    const smooth = { x: 0, y: 0 };

    let isDragging = false;
    let previousPointer = { x: 0, y: 0 };
    const dragRotation = { x: 0, y: 0 };

    const handlePointerMove = (e) => {
      if (e.pointerType === "touch") return;
      const rect = container.getBoundingClientRect();
      target.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      target.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      if (isDragging) {
        const deltaX = e.clientX - previousPointer.x;
        const deltaY = e.clientY - previousPointer.y;
        dragRotation.y += deltaX * 0.008;
        dragRotation.x += deltaY * 0.008;
        previousPointer = { x: e.clientX, y: e.clientY };
      }
    };

    const handlePointerDown = (e) => {
      isDragging = true;
      setIsInteractive(true);
      previousPointer = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const handlePointerLeave = () => {
      target.x = 0;
      target.y = 0;
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.style.touchAction = "none";
    domElement.addEventListener("pointermove", handlePointerMove);
    domElement.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    domElement.addEventListener("pointerleave", handlePointerLeave);

    // 8. Performance Guard: IntersectionObserver
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // 9. Resize Handling
    const handleResize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // 10. Animation Loop
    let animationFrameId;
    let lastTime = performance.now();

    const animate = (currentTime) => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const dt = Math.min((currentTime - lastTime) / 1000, 1 / 30);
      lastTime = currentTime;

      if (!reduceMotion) {
        const alpha = 1 - Math.pow(1 - 0.055, dt * 60);
        smooth.x += (target.x - smooth.x) * alpha;
        smooth.y += (target.y - smooth.y) * alpha;

        camera.position.x = smooth.x * 0.8;
        camera.position.y = smooth.y * 0.6;
        camera.lookAt(0, 0, 0);

        coreGroup.rotation.y += dt * 0.25 + dragRotation.y * 0.1;
        coreGroup.rotation.x = Math.sin(currentTime * 0.0006) * 0.15 + dragRotation.x;

        ring1.rotation.z += dt * 0.35;
        ring2.rotation.x -= dt * 0.28;
        ring3.rotation.y += dt * 0.2;

        const pulse = 1 + Math.sin(currentTime * 0.003) * 0.08;
        innerMesh.scale.set(pulse, pulse, pulse);

        particles.rotation.y += dt * 0.04;
        particles.rotation.x -= dt * 0.02;

        dragRotation.x *= 0.92;
        dragRotation.y *= 0.92;
      }

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    // 11. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      resizeObserver.disconnect();
      domElement.removeEventListener("pointermove", handlePointerMove);
      domElement.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      domElement.removeEventListener("pointerleave", handlePointerLeave);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      outerGeo.dispose();
      outerMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      centerNodeGeo.dispose();
      centerNodeMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[480px] lg:min-h-[580px] flex items-center justify-center">
      <div ref={containerRef} className="absolute inset-0 cursor-grab active:cursor-grabbing" />
      
      {/* Interactive Helper Cue */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/70 border border-white/10 backdrop-blur-md text-[11px] font-mono-code text-slate-400">
        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
        {isInteractive ? "SILICON CORE // DRAG TO ROTATE" : "INTERACTIVE 3D // HOVER OR DRAG MESH"}
      </div>
    </div>
  );
}

"use client";
import React, { useEffect, useRef } from "react";
import {
  Engine,
  Render,
  World,
  Bodies,
  // Body,
  Mouse,
  MouseConstraint,
  IRendererOptions,
} from "matter-js";
import { Badge } from "@/components/ui/badge";

const InteractiveIntegrationLayout = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef(Engine.create());
  const renderRef = useRef<Render | null>(null);

  // Define your integration items
  const integrationItems = [
    { text: "Chat Bot", color: "bg-pink-400" },
    { text: "WhatsApp", color: "bg-green-300" },
    { text: "Lead generation", color: "bg-yellow-200" },
    { text: "E-commerce", color: "bg-purple-300" },
    { text: "Schedule Broadcast", color: "bg-fuchsia-400" },
    { text: "Customer support", color: "bg-yellow-200" },
    { text: "Marketing Automation", color: "bg-purple-300" },
    { text: "Send Offers", color: "bg-emerald-800" },
    { text: "Analytics Integration", color: "bg-emerald-400" },
    { text: "CRM Integration", color: "bg-pink-200" },
    { text: "Help Desk Integration", color: "bg-green-400" },
    { text: "Send Promotion", color: "bg-emerald-400" },
    { text: "Customer Engagement", color: "bg-emerald-600" },
  ];

  useEffect(() => {
    if (!sceneRef.current) return;

    // Create engine
    const engine = engineRef.current;
    engine.gravity.y = 0.5;

    // Create renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: 800,
        height: 400,
        wireframes: false,
        background: "transparent",
      } as IRendererOptions,
    });

    renderRef.current = render;

    // Create bounds
    const ground = Bodies.rectangle(400, 410, 810, 60, {
      isStatic: true,
      render: { fillStyle: "transparent" },
    });
    const leftWall = Bodies.rectangle(-10, 200, 60, 400, {
      isStatic: true,
      render: { fillStyle: "transparent" },
    });
    const rightWall = Bodies.rectangle(810, 200, 60, 400, {
      isStatic: true,
      render: { fillStyle: "transparent" },
    });

    // Add badges as physics bodies
    const badges = integrationItems.map((item, index) => {
      const x = 100 + index * 50;
      const y = -50 - index * 50;
      return Bodies.rectangle(x, y, 120, 40, {
        restitution: 0.8,
        friction: 0.005,
        render: {
          fillStyle: "transparent",
        },
        label: item.text,
      });
    });

    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    World.add(engine.world, [
      ground,
      leftWall,
      rightWall,
      ...badges,
      mouseConstraint,
    ]);

    Engine.run(engine);
    Render.run(render);

    // Cleanup function
    return () => {
      if (render) {
        Render.stop(render);
        render.canvas.remove();
      }
      World.clear(engine.world, true);
      Engine.clear(engine);
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <div className="text-center mb-8">
        <p className="text-sm text-gray-500 mb-2">« SEAMLESS INTEGRATION »</p>
        <h2 className="text-3xl font-bold text-emerald-800">
          Effortless Integration with
          <br />
          Your Trusted Tools
        </h2>
      </div>

      {/* Physics canvas container */}
      <div ref={sceneRef} className="w-full h-[400px] relative">
        {/* Overlay the actual badges on top of physics bodies */}
        {integrationItems.map((item, index) => (
          <div
            key={index}
            className="absolute pointer-events-none"
            style={{
              transform: `translate(-50%, -50%)`,
              left: `${100 + index * 50}px`,
              top: `${-50 - index * 50}px`,
            }}
          >
            <Badge
              className={`${item.color} text-black px-4 py-2 rounded-full shadow-sm`}
            >
              {item.text}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveIntegrationLayout;

"use client";
import React, { useEffect, useRef } from "react";
import {
  Engine,
  Render,
  World,
  Bodies,
  Runner,
  Mouse,
  MouseConstraint,
  Events,
  IChamfer,
} from "matter-js";
import MicroHeading from "../common/micro-heading";
import { isMobile } from "react-device-detect";

const colors = [
  "#F9FFC9",
  "#84DCC6",
  "#B1FFCF",
  "#37FF8B",
  "#FF9BE6",
  "#64B6AC",
  "#C3B5FF",
  "#FFE0D5",
  "#8377D1",
  "#D2691E",
  "#FF8552",
  "#F4FF94",
  "#51D6FF",
  "#EF476F",
  "#F1DAC4",
  "#FF686B",
  "#8EF9F3",
];

const generateRandomText = () => {
  const randomWords = [
    "Chat Bot",
    "Lead generation",
    "E-commerce",
    "WhatsApp",
    "Analytic Integration",
    "Lead generation",
    "E-commerce",
    "CRM integration",
    "Schedule Broadcast",
    "Help Desk integration",
    "Lead generation",
    "Customer support",
    "Send Promotion",
    "Marketing Automation",
    "Chat Bot",
    "Customer Engagement",
    "Schedule Broadcast",
  ];
  return randomWords[Math.floor(Math.random() * randomWords.length)];
};

const Integrations: React.FC = () => {
  const sceneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    const engine = Engine.create();

    engine.world.gravity.y = 1;

    const render = Render.create({
      element: sceneRef.current,
      engine,
      options: {
        width: isMobile
          ? window.innerWidth * (90 / 100)
          : window.innerWidth * (60 / 100),
        height: 400,
        wireframes: false,
        background: "#fff",
      },
    });

    // Create 18 boxes with custom colors and random text
    const boxes = Array.from({ length: 18 }).map((_, index) => {
      const randomX = Math.random() * 900 + 50;
      const randomY = Math.random() * 300 + 50;
      const randomText = generateRandomText();
      const boxColor = colors[index % colors.length];

      return Bodies.rectangle(randomX, randomY, 170, 40, {
        restitution: 0.5,
        chamfer: 20 as IChamfer,
        render: {
          fillStyle: boxColor,
          strokeStyle: "transparent",
          lineWidth: 3,
        },
        label: randomText,
      });
    });

    const walls = [
      Bodies.rectangle(
        400,
        0,
        !isMobile ? window.innerWidth * (90 / 100) : 1500,
        10,
        {
          isStatic: true,
          render: { visible: false }, // Invisible top wall
        }
      ),
      Bodies.rectangle(
        400,
        400,
        !isMobile ? window.innerWidth * (90 / 100) : 1500,
        10,
        {
          isStatic: true,
          render: { visible: false }, // Invisible bottom wall
        }
      ),
      Bodies.rectangle(0, 200, 10, 400, {
        isStatic: true,
        render: { visible: false }, // Invisible left wall
      }),
      Bodies.rectangle(!isMobile ? 1150 : 350, 300, 50, 600, {
        isStatic: true,
        render: { visible: false }, // Invisible right wall
      }),
    ];

    World.add(engine.world, [...boxes, ...walls]);

    // Draw text on the canvas using Matter.js render hooks
    Events.on(render, "afterRender", () => {
      const context = render.context;
      context.font = "16px 'Sofia Sans', sans-serif"; // Use Sofia Sans font
      context.fillStyle = "black";
      context.textAlign = "center";
      context.textBaseline = "middle";

      // Draw the text for each box, ensuring the text stays horizontal
      boxes.forEach((box) => {
        const { x, y } = box.position;
        const angle = box.angle;

        // Save the current context to restore it after drawing the text
        context.save();

        // Translate the context to the box's position
        context.translate(x, y);

        // Rotate the context so the text stays horizontal despite the box's angle
        context.rotate(angle);

        // Draw the text (it will be horizontally aligned)
        context.fillText(box.label, 0, 0);

        // Restore the context to prevent further transformations
        context.restore();
      });
    });

    // Add mouse control for interaction
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    World.add(engine.world, mouseConstraint);

    // Run the engine and renderer
    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    // Cleanup on unmount
    const canvas = sceneRef.current.querySelector("canvas");
    const handleWheel = (e: WheelEvent) => {
      e.stopPropagation(); // Prevent blocking scroll
    };

    // Add event listener for wheel events on the canvas
    if (canvas) {
      canvas.addEventListener("wheel", handleWheel, { passive: true });
    }

    // Cleanup on unmount
    return () => {
      if (canvas) {
        canvas.removeEventListener("wheel", handleWheel);
      }
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <MicroHeading text="Seamless integration" />
        <div className="text-center mb-12 mt-6 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1B4332] font-vesper">
            Effortless Integration with Your Trusted Tools
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <div
            ref={sceneRef}
            className="mx-auto"
            style={{ height: "400px" }} // Set the height here
          />
        </div>
      </div>
    </section>
  );
};

export default Integrations;

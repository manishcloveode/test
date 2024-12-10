"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import MicroHeading from "../common/micro-heading";

gsap.registerPlugin(Draggable);

const InteractiveIntegrationLayout = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement[]>([]);

  const integrationItems = [
    { text: "Chat Bot", color: "bg-pink-300" },
    { text: "WhatsApp", color: "bg-green-200" },
    { text: "Lead generation", color: "bg-yellow-200" },
    { text: "E-commerce", color: "bg-purple-200" },
    { text: "Schedule Broadcast", color: "bg-fuchsia-300" },
    { text: "Customer support", color: "bg-yellow-200" },
    { text: "Marketing Automation", color: "bg-purple-200" },
    { text: "Send Offers", color: "bg-emerald-800" },
    { text: "Analytics Integration", color: "bg-pink-300" },
    { text: "CRM Integration", color: "bg-pink-100" },
    { text: "Help Desk Integration", color: "bg-green-300" },
    { text: "Send Promotion", color: "bg-emerald-300" },
    { text: "Customer Engagement", color: "bg-emerald-800" },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerBounds = container.getBoundingClientRect();
    const badges = badgesRef.current;

    badges.forEach((badge, index) => {
      const badgeHeight = badge.offsetHeight;
      const badgeWidth = badge.offsetWidth;
      const initialX = Math.random() * (containerBounds.width - badgeWidth);

      // Set initial position
      gsap.set(badge, {
        x: initialX,
        y: -badgeHeight,
        zIndex: 1, // Start with a base zIndex
      });

      // Animate badges falling to the bottom
      gsap.to(badge, {
        y: containerBounds.height - badgeHeight - 10,
        duration: 2,
        delay: index * 0.1,
        ease: "bounce.out",
        onUpdate: () => enforceBounds(badge, containerBounds),
      });

      // Enable dragging for badges
      Draggable.create(badge, {
        type: "x,y",
        edgeResistance: 0.65,
        bounds: container,
        inertia: true,
        onDrag: () => resolveCollisions(badge, badges),
        onThrowUpdate: () => resolveCollisions(badge, badges),
        onDragEnd: () => {
          // Animate the badge falling to the bottom after release
          gsap.to(badge, {
            y: containerBounds.height - badgeHeight - 10,
            duration: 1,
            ease: "bounce.out",
          });
        },
      });
    });

    // Collision and stacking logic
    const resolveCollisions = (
      currentBadge: HTMLDivElement,
      badges: HTMLDivElement[]
    ) => {
      const currentRect = currentBadge.getBoundingClientRect();

      badges.forEach((otherBadge) => {
        if (currentBadge === otherBadge) return;

        const otherRect = otherBadge.getBoundingClientRect();
        if (isColliding(currentRect, otherRect)) {
          const overlapY = currentRect.bottom - otherRect.top;
          if (overlapY > 0) {
            // Prevent badges from overlapping visually and stack them on top
            gsap.to(currentBadge, {
              y: `-=${overlapY}`, // Move current badge up to avoid overlap
              duration: 0.2,
            });
            // Update zIndex to ensure the badge on top stays in front
            gsap.to(currentBadge, {
              zIndex: Math.max(
                parseInt(currentBadge.style.zIndex || "1", 10) + 1,
                parseInt(otherBadge.style.zIndex || "1", 10) + 1
              ),
              duration: 0.2,
            });
          }
        }
      });
    };

    // Enforce container bounds during animation
    const enforceBounds = (badge: HTMLDivElement, containerBounds: DOMRect) => {
      const badgeRect = badge.getBoundingClientRect();

      if (badgeRect.bottom > containerBounds.bottom) {
        gsap.to(badge, {
          y: containerBounds.height - badge.offsetHeight - 10,
          duration: 0.2,
        });
      }
      if (badgeRect.top < containerBounds.top) {
        gsap.to(badge, { y: 10, duration: 0.2 });
      }
      if (badgeRect.left < containerBounds.left) {
        gsap.to(badge, { x: 10, duration: 0.2 });
      }
      if (badgeRect.right > containerBounds.right) {
        gsap.to(badge, {
          x: containerBounds.width - badge.offsetWidth - 10,
          duration: 0.2,
        });
      }
    };

    // Check if two elements are colliding
    const isColliding = (rect1: DOMRect, rect2: DOMRect) => {
      return !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
      );
    };
  }, []);

  return (
    <div className="w-full container mx-auto p-8">
      <MicroHeading text="Seamless integration" />
      <div className="text-center mb-12 mt-6 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1B4332] font-vesper">
          Effortless Integration with Your Trusted Tools
        </h2>
      </div>

      <div ref={containerRef} className="w-full h-[500px] relative">
        {integrationItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) badgesRef.current[index] = el;
            }}
            className={`absolute ${item.color} text-black px-6 py-2 rounded-full shadow-sm  text-sm cursor-pointer overflow-hidden `}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveIntegrationLayout;

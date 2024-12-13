"use client";

import Image from "next/image";

interface HeaderBannerProps {
  pageName: string;
  backgroundImage: string;
  height?: string;
}

export default function HeaderBanner({
  pageName,
  backgroundImage,
  height = "h-64",
}: HeaderBannerProps) {
  return (
    <header className={`relative w-full ${height} overflow-hidden`}>
      <Image
        src={backgroundImage}
        alt={`${pageName} background`}
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center font-vesper">
          {pageName}
        </h1>
      </div>
    </header>
  );
}

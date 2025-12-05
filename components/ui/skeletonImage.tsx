"use client";

import type { ImageProps } from "next/image";
import { useState } from "react";
import { Safari } from "./safari";

export function SkeletonImage({
  ...props
}: ImageProps & { className?: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className='relative w-full h-64'>
      {!loaded && (
        <div className='absolute inset-0 animate-pulse bg-gray-200 rounded-md' />
      )}

      <Safari
        imageSrc={props?.src as string}
        onLoadingComplete={() => setLoaded(true)}
      />
    </div>
  );
}

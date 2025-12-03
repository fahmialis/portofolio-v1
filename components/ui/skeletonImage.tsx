"use client";

import clsx from "clsx";
import type { ImageProps } from "next/image";
import Image from "next/image";
import { useState } from "react";

export function SkeletonImage({
  className,
  ...props
}: ImageProps & { className?: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className='relative w-full h-64'>
      {!loaded && (
        <div className='absolute inset-0 animate-pulse bg-gray-200 rounded-md' />
      )}

      <Image
        {...props}
        alt={props?.alt ?? "alt"}
        className={clsx(
          "h-64 w-full object-contain object-center transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoadingComplete={() => setLoaded(true)}
      />
    </div>
  );
}

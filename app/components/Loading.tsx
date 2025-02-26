import React from 'react';
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ 
  weight: '400',
  subsets: ["latin"],
  display: 'swap',
});

interface LoadingProps {
  loading: boolean;
}

export default function Loading({ loading }: LoadingProps) {
  return (
    <>
      {loading && (
        <div className="loading">
          <div className="loading-center"></div>
        </div>
      )}
      <div className={`picture ${dancingScript.className}`}>
        Welcome to My World ! Dear
      </div>
    </>
  );
}

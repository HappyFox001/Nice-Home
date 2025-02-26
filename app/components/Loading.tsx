import { useEffect, useState } from 'react';

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
      <div className="picture">
        Welcome to My World ! Dear
      </div>
    </>
  );
}

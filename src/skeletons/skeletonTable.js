import React from 'react';
import { SkeletonElements } from './skeletonElements';
import './skeleton.scss';
export const SkeletonTable = () => {
  return (
    <div className='skeleton-table'>
      <SkeletonElements type='text' />
    </div>
  );
};

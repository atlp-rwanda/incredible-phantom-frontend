import React from 'react';
import { SkeletonElements } from './skeletonElements';
import './skeleton.scss';
export const SkeletonLanding = () => {
  return (
    <div className='skeleton-wrapper'>
      <div className='skeleton-landing'>
        <SkeletonElements type='nav' />
        <SkeletonElements type='title' />
        <SkeletonElements type='text' />
        <SkeletonElements type='body' />
        <SkeletonElements type='button' />
      </div>
    </div>
  );
};

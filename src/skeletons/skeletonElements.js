import React from 'react';
import './skeleton.scss';

export const SkeletonElements = ({ type }) => {
  
  const classes = `skeleton ${type}`;

  return <div className={classes}></div>;
};

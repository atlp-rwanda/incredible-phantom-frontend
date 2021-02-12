import React from 'react';
import renderWithRedux from '../shared/renderWithRedux';
import { SkeletonElements } from '../../skeletons/skeletonElements';
import { SkeletonLanding } from '../../skeletons/skeletonLanding';
import { SkeletonProfile } from '../../skeletons/skeletonProfile';
import { SkeletonTable } from '../../skeletons/skeletonTable';

describe('Pages', () => {
  it('should render the skeleton wrapper', () => {
    renderWithRedux(<SkeletonElements />);
  });
  it('should render the Landing Page skeleton', () => {
    renderWithRedux(<SkeletonLanding />);
  });
  it('should render the Profile skeleton', () => {
    renderWithRedux(<SkeletonProfile />);
  });
  it('should render the Table Skeleton', () => {
    renderWithRedux(<SkeletonTable />);
  });
});

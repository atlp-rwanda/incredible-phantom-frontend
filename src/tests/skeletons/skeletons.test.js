import React from 'react';
import renderWithRedux from '../shared/renderWithRedux';
import { SkeletonElements } from '../../skeletons/skeletonElements';
import { SkeletonLanding } from '../../skeletons/skeletonLanding';
import { SkeletonProfile } from '../../skeletons/skeletonProfile';

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
});

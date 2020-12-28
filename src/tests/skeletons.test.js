import React from 'react';
import { shallow } from 'enzyme';
import { SkeletonElements } from '../skeletons/skeletonElements';
import { SkeletonLanding } from '../skeletons/skeletonLanding';
import { SkeletonProfile } from '../skeletons/skeletonProfile';
import { Skeleton } from '../components/Skeleton/Skeleton';

describe('Skeletons', () => {
  it('should return the main skeleton div', () => {
    const wrapper = shallow(<SkeletonElements />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should return the Landing page skeleton ui', () => {
    const wrapper = shallow(<SkeletonLanding />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should return the main skeleton div', () => {
    const wrapper = shallow(<SkeletonProfile />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should return the skeleton page', () => {
    const wrapper = shallow(<Skeleton />);
    expect(wrapper).toMatchSnapshot();
  });
});

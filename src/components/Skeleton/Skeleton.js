import React, { useEffect, useState } from 'react';
import { SkeletonProfile } from '../../skeletons/skeletonProfile';
import './Skeleton.scss';
export const Skeleton = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/',
      );
      const data = await response.json();
      setProfile(data);
    }, 2000);
  });

  return (
    <div className="profile-wrapper">
      {profile &&
        profile.map((user) => (
          <div className="profile" key={user.id}>
            <h1>{user.username}</h1>
            <p>{user.email}</p>
            <p>{user.address.suite}</p>
          </div>
        ))}
      {!profile &&
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((elem) => (
          <SkeletonProfile key={elem} />
        ))}
    </div>
  );
};

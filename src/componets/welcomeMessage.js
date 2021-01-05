import '../styles/landingPage.scss';
import React from 'react'
export const WelcomeMessage = () => {
  return (
    <div>
      <header className='welcome-message'>
        <span id='app-name'>WELCOME TO PHANTOM</span>
        <span id='phantom-slogan'>
          Track your bus' movements anywhere from your device.
        </span>
      </header>
    </div>
  );
};

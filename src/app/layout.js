'use client';
import React from 'react';

import SoundToggleProvider from '../components/SoundToggleProvider/SoundToggleProvider';
import Header from '../components/Header';

import './styles.css';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SoundToggleProvider>
          <Header />
          {children}
        </SoundToggleProvider>
        <footer>
          <img src="/ie-badge.gif" width={100} />
          <span>Thanks for visiting!</span>
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;

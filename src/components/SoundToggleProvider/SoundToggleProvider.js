import React from 'react';

export const SoundToggleContext = React.createContext();

function SoundToggleProvider({ children }) {
  const [isSoundEnabled, setIsSoundEnabled] = React.useState(false);

  return (
    <SoundToggleContext.Provider value={{ isSoundEnabled, setIsSoundEnabled }}>
      {children}
    </SoundToggleContext.Provider>
  );
}

export default SoundToggleProvider;

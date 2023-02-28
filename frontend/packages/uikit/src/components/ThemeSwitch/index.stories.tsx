import { useState } from 'react';
import ThemeSwitch from './ThemeSwitch';

export default {
  title: 'Components/Switch',
  argTypes: {},
};

export const Default: React.FC = () => {
  const [dark, setDark] = useState(false);
  return (
    <>
      {dark ? 'dark' : 'light'} mode
      <div
        style={{
          width: '100px',
          height: '100px',
          background: '#6D6978',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ThemeSwitch
          darkMode={dark}
          onChange={(dark: boolean) => setDark(dark)}
        />
      </div>
    </>
  );
};

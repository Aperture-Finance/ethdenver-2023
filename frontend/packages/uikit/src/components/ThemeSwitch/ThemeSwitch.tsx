import { useState } from 'react';
import styled from 'styled-components';
import { useMatchBreakpoints } from '../../contexts';

export interface ThemeSwitchProps {
  darkMode: boolean;
  onChange: (dark: boolean) => void;
}

const Switch = styled.div<{ sm: boolean }>`
  width: ${({ sm }) => (sm ? '90px' : '81px')};
  height: ${({ sm }) => (sm ? '32px' : '24px')};
  background: ${({ theme }) => theme.colors.backgroundSwitch};
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
const Switcher = styled.div<{ sm: boolean; isDark: boolean }>`
  width: ${({ sm }) => (sm ? '43px' : '38.5px')};
  height: ${({ sm }) => (sm ? '28px' : '20px')};
  background: ${({ theme }) => theme.colors.buttonOutline};
  border-radius: 6px;
  position: absolute;
  top: 2px;
  ${({ isDark, sm }) =>
    !isDark ? `left:2px;` : `left: ${sm ? '45px' : '40.5px'};`}
  transition: 0.3s;
`;
const Moon = () => (
  <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
    <path
      d="M11.5 9.99784C10.3353 10.2439 9.12238 10.11 8.03926 9.61581C6.95614 9.12158 6.05979 8.29303 5.4817 7.25168C4.90361 6.21034 4.67421 5.01103 4.82714 3.82966C4.98007 2.6483 5.50729 1.54706 6.33146 0.6875C5.30166 0.715954 4.29655 1.0094 3.41302 1.53954C2.52949 2.06969 1.79733 2.81866 1.28712 3.71426C0.776912 4.60986 0.50586 5.62188 0.500094 6.65277C0.494328 7.68366 0.754042 8.69865 1.2542 9.59991C1.75436 10.5012 2.47809 11.2583 3.35564 11.7983C4.23318 12.3383 5.23495 12.643 6.26436 12.683C7.29378 12.723 8.31613 12.4969 9.23287 12.0266C10.1496 11.5563 10.9298 10.8576 11.4983 9.99784H11.5Z"
      stroke="currentColor"
      strokeLinejoin="round"
    />
  </svg>
);

const Sun = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path
      d="M7.7487 1.68717V1.02051M7.7487 14.3538V13.6872M13.7487 7.68717H14.4154M1.08203 7.68717H1.7487M12.082 3.35384L13.082 2.35384M2.41536 13.0205L3.41536 12.0205M2.41536 2.35384L3.41536 3.35384M12.082 12.0205L13.082 13.0205"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M7.7487 10.3538C9.22146 10.3538 10.4154 9.15993 10.4154 7.68717C10.4154 6.21442 9.22146 5.02051 7.7487 5.02051C6.27594 5.02051 5.08203 6.21442 5.08203 7.68717C5.08203 9.15993 6.27594 10.3538 7.7487 10.3538Z"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);

const StyledSun = styled.span<{ sm: boolean; dark: boolean }>`
  color: ${({ theme, dark }) =>
    dark ? theme.colors.unselected : theme.colors.textAlt};
  z-index: 9;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledMoon = styled.span<{ sm: boolean; dark: boolean }>`
  color: ${({ theme, dark }) =>
    !dark ? theme.colors.unselected : theme.colors.textAlt};
  z-index: 9;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({
  darkMode = false,
  onChange,
}) => {
  const { isSm } = useMatchBreakpoints();
  const [dark, setDark] = useState(darkMode);

  return (
    <Switch
      sm={isSm}
      onClick={() => {
        setDark(!dark);
        onChange(!dark);
      }}
    >
      <Switcher sm={isSm} isDark={dark} />
      <StyledSun sm={isSm} dark={dark}>
        <Sun />
      </StyledSun>
      <StyledMoon sm={isSm} dark={dark}>
        <Moon />
      </StyledMoon>
    </Switch>
  );
};

export default ThemeSwitch;

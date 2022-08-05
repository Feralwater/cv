import { useCallback, useState } from 'react';
import { Themes } from 'styles/theme';

export const useGlobalTheme = () => {
  const [globalTheme, setGlobalTheme] = useState(Themes.light);

  const handleChangeTheme = useCallback(() => {
    if (globalTheme === Themes.light) {
      setGlobalTheme(Themes.dark);
    } else {
      setGlobalTheme(Themes.light);
    }
  }, [globalTheme]);

  return { globalTheme, handleChangeTheme };
};

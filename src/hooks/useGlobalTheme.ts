import { useCallback, useState } from 'react';
import { Themes } from 'theme';

export const useGlobalTheme = () => {
  const [globalTheme, setGlobalTheme] = useState(Themes.dark);

  const handleChangeTheme = useCallback(() => {
    if (globalTheme === Themes.light) {
      setGlobalTheme(Themes.dark);
    } else {
      setGlobalTheme(Themes.light);
    }
  }, [globalTheme]);

  return { globalTheme, handleChangeTheme };
};

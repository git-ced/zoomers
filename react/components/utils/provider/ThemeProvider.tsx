// ANCHOR React
import React from 'react';

// ANCHOR Base
import { BaseProvider, createTheme, lightThemePrimitives } from 'baseui';

interface IProps {
  children: React.ReactNode;
}

export const ThemeProvider = (
  { children }: IProps
) => {
  const theme = createTheme(lightThemePrimitives);

  return (
    <BaseProvider theme={theme}>
      { children }
    </BaseProvider>
  );
}

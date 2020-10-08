// ANCHOR React
import React from 'react';

// ANCHOR Styletron
import { Provider as StyletronProvider } from 'styletron-react';

// ANCHOR Utilities
import { debug, styletron } from '@zoomers/utils/styletron';

// ANCHOR Components
import { ThemeProvider } from './ThemeProvider';
import { Compose } from './Compose';

// ANCHOR Providers
import { PROVIDERS } from './Providers';

interface IGlobalProviderProps {
  children?: React.ReactNode;
}

export const GlobalProvider = (
  { children }: IGlobalProviderProps
) => (
  <StyletronProvider
    value={styletron}
    debug={debug}
    debugAfterHydration
  >
    <ThemeProvider>
      <Compose elements={PROVIDERS()}>
        { children }
      </Compose>
    </ThemeProvider>
  </StyletronProvider>
);

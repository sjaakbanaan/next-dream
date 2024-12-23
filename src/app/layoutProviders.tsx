'use client';

import { type ColorMode, DreamProvider } from '@dreamy-ui/react';
import type { PropsWithChildren } from 'react';

interface ProvidersProps extends PropsWithChildren {
  colorMode?: ColorMode;
}

const domMax = () => import('motion/react').then((res) => res.domMax);

export function Providers({ children, colorMode }: ProvidersProps) {
  return (
    <DreamProvider
      motionFeatures={domMax}
      colorMode={colorMode}
      motionStrict
      useUserPreferenceColorMode
    >
      {children}
    </DreamProvider>
  );
}

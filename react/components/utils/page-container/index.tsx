// ANCHOR React
import React from 'react';

// ANCHOR Base 
import { Block } from 'baseui/block';

// ANCHOR Styles
import { BLOCK } from './styles';

interface IProps {
  children: React.ReactNode;
}

export const ZoomerPage = (
  { children }: IProps,
) => (
  <Block overrides={BLOCK}>
    {children}
  </Block>
)

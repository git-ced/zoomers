// ANCHOR React
import React from 'react';

// ANCHOR Block
import { Block } from 'baseui/block';
import { HeadingLarge } from 'baseui/typography';
import { StyledLink } from 'baseui/link';

// ANCHOR Styles
import { BLOCK, LINK, TITLE } from './styles';

// ANCHOR Constants
import { GREETING } from './constants';

export const ZoomerHome = React.memo(
  () => (
    <>
      <Block overrides={BLOCK}>
        <HeadingLarge overrides={TITLE}>
          {GREETING}
          <StyledLink
            $style={LINK}
            href="/meeting"
          >
            Zoomers!
          </StyledLink>
        </HeadingLarge>
      </Block>
    </>
  )
);

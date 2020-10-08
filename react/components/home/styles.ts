import { BlockOverrides } from "baseui/block";
import { StyleObject } from "styletron-react";

export const BLOCK: BlockOverrides = {
  Block: {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '5rem',
      paddingBottom: '5rem',
    }
  }
};

export const TITLE: BlockOverrides = {
  Block: {
    style: {
      textAlign: 'center',
      marginTop: 0,
      marginBottom: 0,
      lineHeight: 1.15,
      fontSize: '4rem',
    }
  }
};

export const LINK: StyleObject = {
  color: "#663399",

  ':hover': {
    cursor: 'link',
    color: '#666999',
  },

  ':visited': {
    cursor: 'link',
    color: '#666999',
  },
};

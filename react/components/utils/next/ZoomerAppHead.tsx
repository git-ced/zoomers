// ANCHOR React
import React from 'react';

// ANCHOR Next
import Head from 'next/head';

export interface IProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const ZoomerAppHead = React.memo(
  ({ title, description }: IProps) => {
    return (
      <Head>
        {/* Viewport for responsive web design */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover"
        />
        {/* Document Title */}
        <title>{title}</title>
        {/* Meta Description */}
        <meta
          name="description"
          content={description}
        />
        {/* IBM Plex */}
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,500,700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="theme-color"
          content="#5B36C9"
        />
      </Head>
    );
  }
);

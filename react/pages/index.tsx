// ANCHOR React
import React from 'react'

// ANCHOR Component
import { ZoomerAppHead } from '../components/utils/head/AppHead';
import { ZoomerHome } from '../components/home';
import { ZoomerPage } from '../components/utils/page-container';

export default React.memo(
  () => (
    <>
      <ZoomerAppHead
        title="Zoomer | Home"
        description="Zoomer home page"
      />
      <ZoomerPage>
        <ZoomerHome />
      </ZoomerPage>
    </>
  )
);

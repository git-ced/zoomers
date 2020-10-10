// ANCHOR React
import React from 'react'

// ANCHOR Component
import { ZoomerAppHead } from '@zoomers/components/utils/app-head'
import { ZoomerHome } from '@zoomers/components/home';
import { ZoomerPage } from '@zoomers/components/utils/page-container';

export default React.memo(
  () => (
    <>
      <ZoomerAppHead
        title="Zoomer | Meeting"
        description="Join a zoom meeting"
      />
      <ZoomerPage>
        <ZoomerHome />
      </ZoomerPage>
    </>
  )
);

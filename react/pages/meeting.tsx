// ANCHOR React
import React from 'react'

// ANCHOR Component
import { ZoomerAppHead } from '../components/utils/head/AppHead';
import { ZoomerPage } from '../components/utils/page-container';
import { ZoomerMeeting } from '../components/meeting/index';

export default React.memo(
  () => (
    <>
      <ZoomerAppHead
        title="Zoomer | Meeting"
        description="Join a zoom meeting"
      />
      <ZoomerPage>
        <ZoomerMeeting />
      </ZoomerPage>
    </>
  )
);

// ANCHOR React
import React, {memo, useEffect} from 'react';

// ANCHOR Constants
import { meetConfig } from './constants';

export const ZoomerMeeting = memo(
  () => {
    useEffect(
      () => {
        global.ZoomMtg.preLoadWasm();
        global.ZoomMtg.prepareJssdk();

          const generatedSignature = global.ZoomMtg.generateSignature({
            meetingNumber: meetConfig.meetingNumber,
            apiKey: meetConfig.apiKey,
            apiSecret: meetConfig.apiSecret,
            role: meetConfig.role,
          });

          global.ZoomMtg.init({
            leaveUrl: meetConfig.leaveUrl,
            isSupportAV: true,
            success: function() {
              ZoomMtg.join({
                signature: generatedSignature,
                apiKey: meetConfig.apiKey,
                meetingNumber: meetConfig.meetingNumber,
                userName: meetConfig.userName,
                passWord: meetConfig.passWord,
                error(res) { 
                  console.log(res) 
                }
              })		
            }
          })
      }, []
    )
    
    return (
      <div id="zoomer">
        <div id="zmmtg-root"></div>
      </div>
    );
  }
);

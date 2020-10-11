// ANCHOR React
import React, {memo, useEffect} from 'react';

// ANCHOR Constants
import { meetConfig } from './constants';

export const ZoomerMeeting = memo(
  () => {
    useEffect(
      () => {
        if (global.ZoomMtg) {
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
            isSupportChat: false,
            audioPanelAlwaysOpen: false,
            isSupportQA: false,
            disableInvite: true,
            meetingInfo: [
              'host',
            ],
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
        }
        
      }, [global]
    )
    
    return (
      <div id="zoomer">
        <div id="zmmtg-root"></div>
      </div>
    );
  }
);

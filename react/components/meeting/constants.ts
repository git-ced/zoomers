import { PERSONAL_ZOOM, ZOOM } from "@zoomers/utils/zoom/config";

export const meetConfig = {
	apiKey: ZOOM.API_KEY,
	apiSecret: ZOOM.API_SECRET,
	meetingNumber: PERSONAL_ZOOM.MEETING_ID,
	passWord: PERSONAL_ZOOM.MEETING_PASSWORD,
	leaveUrl: 'http://localhost:9998',
	userName: 'Prince Neil Cedrick Castro',
	userEmail: 'cedi.castro@gmail.com',
	role: 0 // 1 for host; 0 for attendee
};

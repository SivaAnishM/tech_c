import { sendMeetingDetails } from '../services/emailService.js';
import { createZoomMeeting, refreshToken } from '../services/zoomService.js';
import { validateMeeting } from '../validator/meetingValidator.js';

export const scheduleMeeting = async (req, res) => {
    // Validate the request body
    const { error } = validateMeeting(req.body);
    if (error) {
        return res.status(400).json({ errors: error.details.map(err => err.message) });
    }

    try {
        const token = await refreshToken()
        const dateTime = req.body.dateTime
        const meeting = await createZoomMeeting(dateTime, token?.access_token);
        // List of participants
        const participants = [
            'sivaavis744@gmail.com',
            'sivaavis944@gmail.com',
        ];
        sendMeetingDetails(meeting?.id, meeting?.join_url, participants)
        res.status(200).send({ message: 'Meeting scheduled and emails sent', meeting });
    } catch (err) {
        res.status(500).send({ message: 'An error occurred', error: err });
    }
};

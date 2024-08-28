import axios from 'axios';
import config from '../config/config.js';

const refreshToken = async () => {
    const clientId = config?.zoom?.clientId;
    const clientSecret = config?.zoom?.clientSecret;
    const accountId = config?.zoom?.accountId
    try {
        const response = await axios.post(`https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${accountId}`, '', {
            headers: {
                'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        return response.data;
    } catch (error) {
        console.error('Failed to refresh token:', error.response ? error.response.data : error.message);
        throw error;
    }
};

const createZoomMeeting = async (dateTime, token) => {
    const response = await axios.post('https://api.zoom.us/v2/users/me/meetings', {
        "topic": "Coding With sive new meeting",
        "type": 2,
        "start_time": dateTime,
        "duration": 60,
        "timezone": "UTC",
        "agenda": "Team meeting for future videos",
        "password": "123456",
        "settings": {
            "join_before_host": false,
            "waiting_room": true,
            "approval_type": 1,
            "registration_type": 1,
            "enforce_login": true,
            "host_video": true,
            "participant_video": false,
            "mute_upon_entry": true,
            "auto_recording": "none",
            "audio": "both",
            "meeting_authentication": true
        }
    }, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    return response.data;
};

export { createZoomMeeting, refreshToken }
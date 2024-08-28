import nodemailer from "nodemailer"
import config from '../config/config.js';

const transporter = nodemailer.createTransport({
    host: config?.smtp?.host,
    port: config?.smtp?.port,
    secure: false,
    service: "gmail",
    auth: {
        user: config?.smtp?.user,
        pass: config?.smtp?.pass,
    },
});

// Send meeting details to a list of email addresses
async function sendMeetingDetails(meetingID, meetingLink, emailList) {
    const mailOptions = {
        from: `"Meeting Invitation" ${config?.fromEmail}`,
        to: emailList.join(','),
        subject: 'Meeting Invitation',
        text: `You are invited to a meeting.\n\nMeeting ID: ${meetingID}\nMeeting Link: ${meetingLink}\n\nJoin the meeting at the scheduled time.`,
        html: `
        <h3>You are invited to a meeting.</h3>
        <p><strong>Meeting ID:</strong> ${meetingID}</p>
        <p><strong>Meeting Link:</strong> <a href="${meetingLink}">${meetingLink}</a></p>
        <p>Join the meeting at the scheduled time.</p>
      `
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error occurred:', error.message);
        }
    });
}

export { sendMeetingDetails }
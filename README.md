# Zoom Scheduling API

This project provides an API to schedule Zoom meetings and send invitations to participants.

## Installation

1. **Clone the Repository:**

   git clone <repository-url>
   cd <repository-directory>

2. **Install Dependencies:**

   npm install

## Running the Development Server

To start the development server, use the following command:

npm run dev

## API Endpoint

Use Postman or any other API client to interact with the API.

### Schedule a Zoom Meeting

- **URL:** http://localhost:3000/api/zoom/schedule
- **Method:** POST
- **Request Body:**

  {
    "dateTime": "2024-08-30T07:30:00Z"
  }

  The `dateTime` should be in UTC format.

### Functionality

- **Create Zoom Meeting:** The endpoint creates a Zoom meeting based on the provided `dateTime`.
- **Send Email Invitations:** After creating the Zoom meeting, it sends email invitations to participants.

## Customizing Participants

To modify the list of participants who receive email invitations:

1. Open zoomcontroller.js.
2. Update the email addresses in the relevant section to include the desired participants.

## Environment Configuration

Ensure your `.env` file contains the following configurations:

# Zoom Configuration
ZOOM_ACCOUNT_ID=your_zoom_account_id
ZOOM_CLIENT_ID=your_zoom_client_id
ZOOM_CLIENT_SECRET=your_zoom_client_secret

# SMTP Configuration
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password

# Email From Address
FROM_EMAIL=your_from_email_address

## Notes

- Make sure to replace placeholder values in the `.env` file with your actual credentials.
- Check the console output for any errors or confirmation messages when making API calls.
- The date and time should be provided in UTC format to ensure correct scheduling of Zoom meetings.

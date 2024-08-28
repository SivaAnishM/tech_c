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

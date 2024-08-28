import Joi from 'joi';

// Define the validation schema
const meetingSchema = Joi.object({
    dateTime: Joi.date().iso().required().messages({
        'dateTime.base': 'dateTime must be a valid ISO 8601 date-time string',
        'dateTime.empty': 'dateTime is required',
        'dateTime.isoDate': 'dateTime must be in ISO 8601 format'
    })
});

export const validateMeeting = (data) => {
    return meetingSchema.validate(data, { abortEarly: false });
};

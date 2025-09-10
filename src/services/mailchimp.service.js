import mailchimp from '@mailchimp/mailchimp_marketing';
import dotenv from 'dotenv';

dotenv.config();

// Configure Mailchimp
mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX, // e.g., 'us1', 'us2', etc.
});

export const addUserToMailchimp = async (userData) => {
    try {
        const { firstName, lastName, email, number, occupation, message } = userData;
        
        // Create the subscriber object
        const subscriberData = {
            email_address: email,
            status: 'subscribed',
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName,
                PHONE: number || '',
                OCCUPATION: occupation || '',
                MESSAGE: message || ''
            }
        };

        // Add subscriber to the audience
        const response = await mailchimp.lists.addListMember(
            process.env.MAILCHIMP_AUDIENCE_ID,
            subscriberData
        );

        console.log('User successfully added to Mailchimp:', response.email_address);
        return response;
        
    } catch (error) {
        console.error('Mailchimp API Error:', error.response?.body || error.message);
        
        // Don't throw error to prevent breaking the main user creation flow
        // Just log the error and continue
        return null;
    }
};

export const updateMailchimpSubscriber = async (email, userData) => {
    try {
        const { firstName, lastName, number, occupation, message } = userData;
        
        const updateData = {
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName,
                PHONE: number || '',
                OCCUPATION: occupation || '',
                MESSAGE: message || ''
            }
        };

        const response = await mailchimp.lists.updateListMember(
            process.env.MAILCHIMP_AUDIENCE_ID,
            email,
            updateData
        );

        console.log('Mailchimp subscriber updated:', response.email_address);
        return response;
        
    } catch (error) {
        console.error('Mailchimp Update Error:', error.response?.body || error.message);
        return null;
    }
};

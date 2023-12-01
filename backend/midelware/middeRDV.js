const nodemailer = require('nodemailer');
const twilio = require('twilio');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

const twilioClient = twilio('your-twilio-account-sid', 'your-twilio-auth-token');

const sendNotifications = async (RDVs) => {
  try {
    RDVs.forEach(async (appointment) => {
      await transporter.sendMail({
        from: 'your-email@gmail.com',
        to: 'patient-email@example.com',
        subject: 'Appointment Confirmation',
        text: `Your appointment with ${appointment.doctorName} is confirmed for ${appointment.date}`,
      });

      await twilioClient.messages.create({
        body: `Your appointment with ${appointment.doctorName} is confirmed for ${appointment.date}`,
        to: '+1234567890', // patient's phone number
        from: '+0987654321', // your Twilio phone number
      });
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { sendNotifications };
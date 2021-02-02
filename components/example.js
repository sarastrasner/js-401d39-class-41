import { sendEmail } from './send-email';

sendEmail(
    'test@gmail.com',
    'Greeting!',
    'Hello, hello.'
).then(() => {
    console.log('Our email successful provided to device mail ');
});


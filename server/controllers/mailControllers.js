const nodemailer = require('nodemailer');

exports.sendEmail = (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const transporter = nodemailer.createTransport({
        service: 'Gmail', // Gmail service
        auth: {
            user: 'info.alexmedicare@gmail.com', // Your Gmail address
            pass: 'sjgb lzod ouod cnns', // Your Gmail app password
        },
    });

    const mailOptions = {
        from: `Contact Form <${email}>`, // Sender's email
        to: 'info.alexmedicare@gmail.com', // Your company email
        subject: `New Message from ${name}`,
        text: `You have received a new message:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ message: 'Failed to send email', error });
        }
        res.status(200).json({ message: 'Email sent successfully' });
    });
};

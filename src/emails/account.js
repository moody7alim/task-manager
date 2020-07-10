const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRIP_API_KEY)

const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from: 'moody7alim@gmail.com',
        subject: 'welcome',
        text: `Welcome to the app, ${name}, let me know how you get along with the app`,

    
    })
}

const sendCancelationEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from: 'moody7alim@gmail.com',
        subject: 'We will miss you',
        text: `Goodbye, ${name}, hope to see you soon!`,

    
    })
} 

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

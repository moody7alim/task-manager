const sgMail = require('@sendgrid/mail')
//const sendgridAPIKey = "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"

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

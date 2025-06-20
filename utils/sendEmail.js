const nodemailer=require('nodemailer')

require('dotenv').config()

 const data = {

  SMPT_SERVICE: process.env.SMPT_SERVICE,

  SMPT_MAIL: process.env.SMPT_MAIL,

  SMPT_PASSWORD: process.env.SMPT_PASSWORD,

  SMPT_HOST: process.env.SMPT_HOST,

  SMPT_PORT: process.env.SMPT_PORT,
};


const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: data.SMPT_HOST,
    port: Number(data.SMPT_PORT),
    service: data.SMPT_SERVICE,
    auth: {
      user: data.SMPT_MAIL,
      pass: data.SMPT_PASSWORD,
    },
  });

  const mailOptions = {
    from: data.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.htmlTemplate,
  };

  await transporter.sendMail(mailOptions);
};

module.exports=sendEmail
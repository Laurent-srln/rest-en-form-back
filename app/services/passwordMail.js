const nodemailer = require("nodemailer");
const { getMaxListeners } = require("process");

async function passwordMail(token, email) {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'restenforme.gerant@gmail.com',
          pass: '5Octobre2020',
        }
  });

  // send mail with defined transport object
    await transporter.sendMail({
      from: '"Le gérant de votre salle de sport" <restenforme.gerant@gmail.com>', // sender address
      to: "laurents47@hotmail.com", // list of receivers
      subject: "Finalisez votre inscription à notre application de suivi !", // Subject line
      text: "https://app-osport.herokuapp.com/login", // plain text body
      html: `<a href="https://app-osport.herokuapp.com/register?token=${token}"a>Cliquez ici pour configurer votre mot de passe</a>`, // html body
  });

  console.log(`Mail envoyé à ${email}`);
}


module.exports = passwordMail;
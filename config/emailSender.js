const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  //   port: 465,
  //   secure: true,
  auth: {
    //     // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "mubashirlatif000@gmail.com",
    pass: "fbxjvqydodkjkzyk",
  },
});
async function mailer(email, id) {
  const url = `http://localhost:3000/verify/${id}`;
  console.log(email);
  const info = await transporter.sendMail({
    from: '"Mubashir Malik 👻" <mubashirlatif000@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>please verify your link </b><a href=" + url + ">link text</a>", // html body
  });
}

async function reminderEmail(email, id) {
  const url = `http://localhost:3000/verify/${id}`;
  console.log(email);
  const info = await transporter.sendMail({
    from: '"Mubashir Malik 👻" <mubashirlatif000@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Its a reminder ✔", // Subject line
    text: "its a reminder?", // plain text body
    html: "<b>please verify your link </b><a href=" + url + ">link text</a>", // html body
  });
}

module.exports = { mailer, reminderEmail };

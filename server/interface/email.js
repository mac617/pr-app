const nodemailer = require("nodemailer");

const config = {
  host: "smtp.qq.com",
  port: 25,
  auth: {
    user: "550272221@qq.com",
    pass: "wqndjfrfjgaebcac"
  }
};

let transporter = nodemailer.createTransport(config);

module.exports = function(mail) {
  transporter.sendMail(mail, function(error, info) {
    if (error) {
      return console.log(error);
    }
    console.log("mail sent:", info.response);
  });
};

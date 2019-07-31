const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "zsuryaputra89@gmail.com",
    clientId:
      "484356332230-tlpsq92394l4nrp305mppsrfcp8domii.apps.googleusercontent.com",
    clientSecret: "t8s92SyVGdmCmw4k-1LhAMlq",
    refreshToken: "1/1CCgcuo-hGptExNSrfpEjLchm5FTGbqSa-XSEG3h6_A"
  }
});

const mailVerify = user => {
  var { name, username, email } = user;
  const mail = {
    from: "Tokopedia <zsuryaputra89@gmail.com>",
    to: "ratna.kartika2490@gmail.com",
    subject: "Verification email from Tokopedia",
    html: `<h1>HELLO, ITS ME</h1>
        <a href='http://localhost:2019/verify?uname=bambang' >Klik untuk verifikasi</zsuryaputra89@gmail.com>`
  };

  transporter.sendMail(mail, (err, result) => {
    if (err) return console.log(err.message);

    console.log("Alhamdulillah ya berhasil");
  });
};

module.exports = mailVerify;

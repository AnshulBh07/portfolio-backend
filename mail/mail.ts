// we will create our transporter and send mail function here
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// create reusable transporter with default SMTP transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: false,
  auth: {
    user: "portfoliosite07@gmail.com",
    pass: "ikje mlcj eojx uwxx",
  },
});

// reusable asynchronous send mail function, maildetails is the content of mail which will be defined in server
export const SENDMAIL = async (mailDetails: any) => {
  try {
    transporter.sendMail(mailDetails);
  } catch (err) {
    console.error(err);
  }
};

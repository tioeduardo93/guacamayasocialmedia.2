import nodemailer from 'nodemailer';

async function sendEmail(message, to) {
  try {
    const transporter = nodemailer.createTransport({
      host: "uftcontent.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    let info = await transporter.sendMail({
      from: `"Guacamaya web! - " <${process.env.EMAIL_USER}>`,
      to,
      subject: "New contact from guacamayasocialmedia.com",
      html: message
    });
    if (process.env.NODE_ENV === "development") {
      console.log(info);
    }
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error(error);
    }
    throw {
      status: 500,
      errors: ["Error sending email"]
    }
  }
}
export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const { message, to } = req.body;
      if (!message || !to) {
        throw {
          status: 400,
          errors: ["Missing message or to"]
        }
      }
      await sendEmail(message, process.env.NODE_ENV === "development" ? "danielgomezcreativo@gmail.com" : "guacamayasocialmedia@gmail.com ");
      return res.status(200).json({ success: 'ok' })
    }
  } catch (error) {
    return res.status(404).json({ message: 'Not found' })
  }
  return res.status(404).json({ message: 'Not found' })
}

const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      course,
    } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "info@pinakiithub.com",

      subject: `New Enrollment - ${course}`,

      html: `
        <h2>New Enrollment Request</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Course:</b> ${course}</p>
      `,
    });

    res.json({
      success: true,
      message: "Enrollment submitted",
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Failed",
    });
  }
});

module.exports = router;
import nodemailer from "nodemailer";
import "dotenv/config";

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

export const verifyMailConnection = async () => {
  await transporter.verify();

  console.log("Email service connected successfully");
};

export const sendVerificationEmail = async ({
  name,
  email,
  verificationToken,
}) => {
  await transporter.sendMail({
    from: `"Pinaki IT" <${process.env.MAIL_USER}>`,

    to: email,

    subject: "Verify your Pinaki IT account",

    text: `
Hello ${name},

Welcome to Pinaki IT.

Thanks for creating your Pinaki IT account.

To verify your email address, copy the verification token below and enter it on the Pinaki IT verification page.

Your verification token:

${verificationToken}

This verification token will expire in 24 hours.

If you did not create this account, you can safely ignore this email.

Regards,
Pinaki IT Team
`,

    html: `
      <!DOCTYPE html>

      <html>
        <body
          style="
            margin: 0;
            padding: 0;
            background: #f4f4f5;
            font-family: Arial, sans-serif;
          "
        >

          <div
            style="
              max-width: 600px;
              margin: 40px auto;
              background: #ffffff;
              padding: 40px;
              border-radius: 12px;
              box-sizing: border-box;
            "
          >

            <h1
              style="
                margin: 0 0 20px;
                color: #111827;
                font-size: 28px;
              "
            >
              Welcome to Pinaki IT
            </h1>

            <p
              style="
                color: #374151;
                font-size: 16px;
                margin-bottom: 10px;
              "
            >
              Hello <strong>${name}</strong>,
            </p>

            <p
              style="
                color: #374151;
                font-size: 16px;
                line-height: 1.6;
              "
            >
              Thanks for creating your Pinaki IT account.
              Please verify your email address using the
              verification token below.
            </p>

            <p
              style="
                color: #374151;
                font-size: 15px;
                line-height: 1.6;
                margin-top: 25px;
              "
            >
              Copy the complete token and paste it into
              the verification page on Pinaki IT.
            </p>

            <!-- Verification Token -->

            <div
              style="
                margin: 25px 0;
                padding: 20px;
                background: #f3f4f6;
                border: 1px solid #e5e7eb;
                border-radius: 8px;
                text-align: center;
              "
            >

              <p
                style="
                  margin: 0 0 10px;
                  color: #6b7280;
                  font-size: 13px;
                  font-weight: bold;
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
                "
              >
                Verification Token
              </p>

              <div
                style="
                  color: #111827;
                  font-family: monospace;
                  font-size: 15px;
                  line-height: 1.6;
                  word-break: break-all;
                  user-select: all;
                "
              >
                ${verificationToken}
              </div>

            </div>

            <p
              style="
                color: #6b7280;
                font-size: 14px;
                line-height: 1.6;
              "
            >
              This verification token will expire in
              <strong>24 hours</strong>.
            </p>

            <hr
              style="
                margin: 30px 0;
                border: none;
                border-top: 1px solid #e5e7eb;
              "
            />

            <p
              style="
                color: #6b7280;
                font-size: 13px;
                line-height: 1.6;
              "
            >
              If you did not create this account, you can
              safely ignore this email.
            </p>

            <p
              style="
                color: #374151;
                font-size: 14px;
                line-height: 1.6;
              "
            >
              Regards,<br />
              <strong>Pinaki IT Team</strong>
            </p>

          </div>

        </body>
      </html>
    `,
  });
};
import pool from "../config/db.js";

export const createContactSubmission = async ({
  name,
  email,
  phone,
  subject,
  message,
}) => {
  const [result] = await pool.query(
    `
      INSERT INTO contact_submissions
        (name, email, phone, subject, message)
      VALUES
        (?, ?, ?, ?, ?)
    `,
    [
      name,
      email,
      phone || null,
      subject || null,
      message,
    ]
  );

  return {
    id: result.insertId,
    name,
    email,
    phone: phone || null,
    subject: subject || null,
    message,
    status: "new",
  };
};
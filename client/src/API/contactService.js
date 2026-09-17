import api from "./api.js";

/**
 * Submit a contact form
 */
export const submitContactForm = async ({
  name,
  email,
  phone,
  subject,
  message,
}) => {
  const response = await api.post("/contact", {
    name,
    email,
    phone: phone || null,
    subject: subject || null,
    message,
  });

  return response.data;
};
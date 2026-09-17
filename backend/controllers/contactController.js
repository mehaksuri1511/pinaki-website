import {
  createContactSubmission,
} from "../services/contactService.js";

export const submitContactForm = async (req, res, next) => {
  try {
    const {
      name,
      email,
      phone,
      subject,
      message,
    } = req.body;

    // Required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required",
      });
    }

    const trimmedName = name.trim();
    const normalizedEmail = email.trim().toLowerCase();
    const trimmedPhone = phone?.trim() || null;
    const trimmedSubject = subject?.trim() || null;
    const trimmedMessage = message.trim();

    // Name validation
    if (trimmedName.length < 2) {
      return res.status(400).json({
        success: false,
        message: "Name must be at least 2 characters",
      });
    }

    if (trimmedName.length > 150) {
      return res.status(400).json({
        success: false,
        message: "Name must not exceed 150 characters",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(normalizedEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address",
      });
    }

    if (normalizedEmail.length > 255) {
      return res.status(400).json({
        success: false,
        message: "Email must not exceed 255 characters",
      });
    }

    // Phone validation
    if (trimmedPhone && trimmedPhone.length > 50) {
      return res.status(400).json({
        success: false,
        message: "Phone number must not exceed 50 characters",
      });
    }

    // Subject validation
    if (trimmedSubject && trimmedSubject.length > 255) {
      return res.status(400).json({
        success: false,
        message: "Subject must not exceed 255 characters",
      });
    }

    // Message validation
    if (trimmedMessage.length < 5) {
      return res.status(400).json({
        success: false,
        message: "Message must be at least 5 characters",
      });
    }

    const submission = await createContactSubmission({
      name: trimmedName,
      email: normalizedEmail,
      phone: trimmedPhone,
      subject: trimmedSubject,
      message: trimmedMessage,
    });

    return res.status(201).json({
      success: true,
      message: "Your message has been submitted successfully",
      data: {
        submission,
      },
    });
  } catch (error) {
    next(error);
  }
};
import { useState, useEffect } from "react";
import axios from "axios";
import { X } from "lucide-react";

const EnrollmentModal = ({
  isOpen,
  onClose,
  selectedCourse,
}) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  useEffect(() => {
    if (selectedCourse) {
      setFormData((prev) => ({
        ...prev,
        course: selectedCourse,
      }));
    }
  }, [selectedCourse]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/enrollment",
        formData
      );

      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
      });

      onClose();
    } catch (error) {
      console.log(error);

      alert("Failed to submit enrollment");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-4">

      <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-2xl">

        {/* Header */}

        <div className="mb-8 flex items-center justify-between">

          <div>
            <h2 className="text-3xl font-black text-slate-900">
              Enroll Now
            </h2>

            <p className="mt-2 text-slate-500">
              Fill the details and our team will contact you.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-slate-100"
          >
            <X size={22} />
          </button>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
          />

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
          >
            <option value="">
              Select Course
            </option>

            <option value="Generative AI">
              Generative AI
            </option>

            <option value="Full Stack Development">
              Full Stack Development
            </option>

            <option value="Data Science">
              Data Science
            </option>

            <option value="Cloud Computing">
              Cloud Computing
            </option>

            <option value="Cyber Security">
              Cyber Security
            </option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-emerald-600 px-6 py-4 font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-50"
          >
            {loading
              ? "Submitting..."
              : "Submit Enrollment"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default EnrollmentModal;
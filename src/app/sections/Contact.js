"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    make: "",
    model: "",
    year: "",
    reason: "",
    images: [],
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      images: files,
    }));

    if (errors.images) {
      setErrors((prev) => ({
        ...prev,
        images: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.make.trim()) newErrors.make = "Make is required";
    if (!formData.model.trim()) newErrors.model = "Model is required";
    if (!formData.year.trim()) newErrors.year = "Year is required";
    if (!formData.reason.trim())
      newErrors.reason = "Reason for selling is required";
    if (formData.images.length === 0)
      newErrors.images = "At least one image is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("city", formData.city);
      formDataToSend.append("make", formData.make);
      formDataToSend.append("model", formData.model);
      formDataToSend.append("year", formData.year);
      formDataToSend.append("reason", formData.reason);

      formData.images.forEach((file, index) => {
        formDataToSend.append(`images`, file);
      });

      // Simulate API call - replace with actual API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          city: "",
          make: "",
          model: "",
          year: "",
          reason: "",
          images: [],
        });
        setErrors({});
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ submit: "Failed to submit form. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl border border-white/30 max-w-5xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        Get Your Cash Offer
      </h3>

      {submitSuccess && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
          Thank you! Your submission has been received. We'll contact you
          shortly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 rounded-lg border dark:placeholder:text-gray-400  ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-primary focus:border-transparent`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 rounded-lg border dark:placeholder:text-gray-400  ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-primary focus:border-transparent`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 rounded-lg border dark:placeholder:text-gray-400  ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-primary focus:border-transparent`}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              City *
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 rounded-lg border dark:placeholder:text-gray-400  ${
                errors.city ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-primary focus:border-transparent`}
              placeholder="Enter your city"
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="make"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Make *
            </label>
            <input
              type="text"
              id="make"
              name="make"
              value={formData.make}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 rounded-lg border dark:placeholder:text-gray-400  ${
                errors.make ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-primary focus:border-transparent`}
              placeholder="Car make"
            />
            {errors.make && (
              <p className="text-red-500 text-sm mt-1">{errors.make}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="model"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Model *
            </label>
            <input
              type="text"
              id="model"
              name="model"
              value={formData.model}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 rounded-lg border dark:placeholder:text-gray-400  ${
                errors.model ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-primary focus:border-transparent`}
              placeholder="Car model"
            />
            {errors.model && (
              <p className="text-red-500 text-sm mt-1">{errors.model}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="year"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Year *
          </label>
          <input
            type="number"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleInputChange}
            min="1900"
            max="2024"
            className={`w-full px-4 py-2 rounded-lg border dark:placeholder:text-gray-400  ${
              errors.year ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-primary focus:border-transparent`}
            placeholder="Car year"
          />
          {errors.year && (
            <p className="text-red-500 text-sm mt-1">{errors.year}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="reason"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Reason for selling your car? *
          </label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            rows={3}
            className={`w-full px-4 py-2 rounded-lg border dark:placeholder:text-gray-400  ${
              errors.reason ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-primary focus:border-transparent`}
            placeholder="Tell us why you're selling your car"
          />
          {errors.reason && (
            <p className="text-red-500 text-sm mt-1">{errors.reason}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="images"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Upload Images *
          </label>
          <input
            type="file"
            id="images"
            name="images"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className={`w-full px-4 py-2 rounded-lg border dark:placeholder:text-gray-400  ${
              errors.images ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-primary focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-secondary hover:file:bg-blue-100`}
          />
          {errors.images && (
            <p className="text-red-500 text-sm mt-1">{errors.images}</p>
          )}
          {formData.images.length > 0 && (
            <p className="text-sm text-gray-600 mt-1">
              {formData.images.length} file(s) selected
            </p>
          )}
        </div>

        {errors.submit && (
          <p className="text-red-500 text-sm">{errors.submit}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-6 rounded-full transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Get Cash Offer Now"}
        </button>
      </form>
    </div>
  );
}

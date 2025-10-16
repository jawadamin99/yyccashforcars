"use client";

import { useState } from "react";

export default function ContactForm({ onSide = false }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    carDetail: "",
    reason: "",
    images: [],
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const textColor = onSide ? "text-white" : "text-black";
  const placeHolderColor = onSide ? "placeholder:text-gray-100" : "placeholder:text-gray-400";

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

  // remove single file by index
  const removeFile = (indexToRemove) => {
    setFormData((prev) => {
      const updated = prev.images.filter((_, i) => i !== indexToRemove);
      return { ...prev, images: updated };
    });
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
    if (!formData.carDetail.trim()) newErrors.carDetail = "Car detail is required";
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
      formDataToSend.append("carDetail", formData.carDetail);
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
          carDetail: "",
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
      <h3 className={`text-2xl font-bold ${textColor} mb-6`}>
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
              className={`block text-sm font-medium ${textColor} mb-1 `}
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 ${textColor}  rounded-lg border ${placeHolderColor} dark:placeholder:text-gray-400  ${
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
              className={`block text-sm font-medium ${textColor} mb-1 `}
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 ${textColor}  rounded-lg border ${placeHolderColor} dark:placeholder:text-gray-400  ${
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
              className={`block text-sm font-medium ${textColor} mb-1 `}
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 ${textColor}  rounded-lg border ${placeHolderColor} dark:placeholder:text-gray-400  ${
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
              className={`block text-sm font-medium ${textColor} mb-1 `}
            >
              City *
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 ${textColor}  rounded-lg border ${placeHolderColor} dark:placeholder:text-gray-400  ${
                errors.city ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-primary focus:border-transparent`}
              placeholder="Enter your city"
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city}</p>
            )}
          </div>
        </div>

        {/* Replaced Car Make / Model / Year with Car Detail textarea */}
        <div>
          <label
            htmlFor="carDetail"
            className={`block text-sm font-medium ${textColor} mb-1 `}
          >
            Car Detail *
          </label>
          <textarea
            id="carDetail"
            name="carDetail"
            value={formData.carDetail}
            onChange={handleInputChange}
            rows={2}
            className={`w-full px-4 py-2 ${textColor}  rounded-lg border ${placeHolderColor} dark:placeholder:text-gray-400  ${
              errors.carDetail ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-primary focus:border-transparent`}
            placeholder="Enter car make, model and year"
          />
          {errors.carDetail && (
            <p className="text-red-500 text-sm mt-1">{errors.carDetail}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="reason"
            className={`block text-sm font-medium ${textColor} mb-1 `}
          >
            Reason for selling your car? *
          </label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            rows={3}
            className={`w-full px-4 py-2 ${textColor}  rounded-lg border ${placeHolderColor} dark:placeholder:text-gray-400  ${
              errors.reason ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-primary focus:border-transparent`}
            placeholder="Tell us why you're selling your car"
          />
          {errors.reason && (
            <p className="text-red-500 text-sm mt-1">{errors.reason}</p>
          )}
        </div>

        {/* ====== NEW: Styled File Upload Area (uses existing formData.images & handleFileChange) ====== */}
        <div>
          <label
            className={`block text-sm font-medium ${textColor} mb-1 `}
          >
            Upload Images *
          </label>

          {/* Dropzone-like block — input is full-size and transparent so clicking opens file picker */}
          <div
            className={`relative rounded-xl border-2 border-dashed p-5 cursor-pointer ${
              formData.images.length
                ? "border-primary/40 bg-primary/10"
                : "border-gray-200 hover:border-primary/30 hover:bg-gray-50"
            }`}
          >
            <input
              type="file"
              id="images"
              name="images"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />

            <div className="text-center py-2 pointer-events-none">
              <div className="flex flex-col items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                  {/* simple paperclip SVG */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M21 12v6a5 5 0 0 1-5 5h-6a5 5 0 0 1-5-5v-6a5 5 0 0 1 5-5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
                    <path d="M8 12v4a4 4 0 0 0 4 4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
                  </svg>
                </div>

                <p className="text-gray-600 text-sm pointer-events-none">
                  <span className="font-medium text-primary">Click to upload</span> or drag and drop
                </p>
                <p className="text-gray-400 text-xs mt-1 pointer-events-none">JPG, PNG up to 10MB</p>
              </div>
            </div>
          </div>

          {errors.images && (
            <p className="text-red-500 text-sm mt-1">{errors.images}</p>
          )}

          {/* Selected files list */}
          {formData.images.length > 0 && (
            <div className="mt-4 space-y-2">
              {formData.images.map((f, idx) => (
                <div
                  key={`${f.name}-${f.size}-${idx}`}
                  className="flex items-center justify-between bg-white/5 rounded-md p-3 border border-white/6"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {f.type.startsWith("image/") ? (
                      <img
                        src={URL.createObjectURL(f)}
                        alt={f.name}
                        className="w-12 h-12 object-cover rounded-md"
                      />
                    ) : (
                      <div className="w-12 h-12 flex items-center justify-center rounded-md bg-white/6 text-xs">
                        {f.name.slice(0, 2).toUpperCase()}
                      </div>
                    )}
                    <div className="min-w-0">
                      <div className="text-sm truncate max-w-xs">{f.name}</div>
                      <div className="text-xs text-gray-400">
                        {(f.size / 1024 / 1024).toFixed(2)} MB
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation(); // prevent opening file picker
                        removeFile(idx);
                      }}
                      className="p-1 rounded-full hover:bg-gray-200"
                      aria-label={`Remove ${f.name}`}
                    >
                      {/* X icon (simple) */}
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden className="bg-red-600 rounded-full p-1 text-white">
                        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* ====== END file upload area ====== */}

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

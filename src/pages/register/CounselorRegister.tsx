import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CounselorProfileForm = ({ userId }) => {
  const [form, setForm] = useState({
    phoneNumber: "",
    address: "",
    gender: "",
    specialization: "",
    bio: "",
    languagesSpoken: [],
    preferredPaymentMethod: "",
    bankAccountOrPhone: "",
    profilePicture: null,
    certificates: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "certificates") {
      setForm((prev) => ({ ...prev, [name]: Array.from(files) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleLanguageChange = (e) => {
    const { value, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      languagesSpoken: checked
        ? [...prev.languagesSpoken, value]
        : prev.languagesSpoken.filter((lang) => lang !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("userId", userId);
    data.append("phoneNumber", form.phoneNumber);
    data.append("address", form.address);
    data.append("gender", form.gender);
    data.append("specialization", form.specialization);
    data.append("bio", form.bio);
    data.append("preferredPaymentMethod", form.preferredPaymentMethod);
    data.append("bankAccountOrPhone", form.bankAccountOrPhone);
    data.append("profilePicture", form.profilePicture);

    form.languagesSpoken.forEach((lang) =>
      data.append("languagesSpoken[]", lang)
    );
    form.certificates.forEach((file) =>
      data.append("certificates", file)
    );

    try {
      await axios.post("http://localhost:3001/counselors/complete-profile", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Profile submitted successfully");
    } catch (error) {
      console.error("Submission failed", error);
      alert("Error submitting profile");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-xl font-bold text-center">Complete Your Profile</h2>

      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        onChange={handleInputChange}
        className="p-2 border rounded"
      />

      <input
        type="text"
        name="address"
        placeholder="Address"
        onChange={handleInputChange}
        className="p-2 border rounded"
      />

      <input
        type="text"
        name="gender"
        placeholder="Gender"
        onChange={handleInputChange}
        className="p-2 border rounded"
      />

      <input
        type="text"
        name="specialization"
        placeholder="Specialization"
        onChange={handleInputChange}
        className="p-2 border rounded"
      />

      <textarea
        name="bio"
        placeholder="Short Bio"
        onChange={handleInputChange}
        className="p-2 border rounded"
      />

      <label className="font-semibold">Languages Spoken:</label>
      <div className="flex gap-4">
        <label>
          <input
            type="checkbox"
            value="Amharic"
            onChange={handleLanguageChange}
          />{" "}
          Amharic
        </label>
        <label>
          <input
            type="checkbox"
            value="English"
            onChange={handleLanguageChange}
          />{" "}
          English
        </label>
      </div>

      <label className="font-semibold">Preferred Payment Method:</label>
      <select
        name="preferredPaymentMethod"
        onChange={handleInputChange}
        className="p-2 border rounded"
      >
        <option value="">Select Method</option>
        <option value="Bank Transfer">Bank</option>
        <option value="Telebirr Payment">Mobile Money</option>
      </select>

      {form.preferredPaymentMethod === "Bank Transfer" && (
        <input
          type="text"
          name="bankAccountOrPhone"
          placeholder="Bank Account Number"
          onChange={handleInputChange}
          className="p-2 border rounded"
        />
      )}

      {form.preferredPaymentMethod === "Telebirr Payment" && (
        <input
          type="text"
          name="bankAccountOrPhone"
          placeholder="Mobile Number"
          onChange={handleInputChange}
          className="p-2 border rounded"
        />
      )}

      <label className="font-semibold">Upload Profile Picture:</label>
      <input
        type="file"
        name="profilePicture"
        accept="image/*"
        onChange={handleFileChange}
        className="p-1 border rounded"
      />

      <label className="font-semibold">Upload Certificates:</label>
      <input
        type="file"
        name="certificates"
        multiple
        accept=".pdf,image/*"
        onChange={handleFileChange}
        className="p-1 border rounded"
      />

      <div className="flex justify-between mt-4">
        <Button type="submit">Submit Profile</Button>
        <Link to="/dashboard">
          <Button type="button" variant="outline">
            Not Now
          </Button>
        </Link>
      </div>
    </form>
  );
};

export default CounselorProfileForm;

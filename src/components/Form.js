import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    age: '',
    gender: '',
    country: '',
    rating: '',
    comments: '',
    address: '',
    phone: '',
    occupation: '',
    hobbies: '',
    termsAccepted: false,
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Form submitted successfully!");
      console.log(formData);
    }
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.feedback || !formData.age || !formData.gender || !formData.country || !formData.rating || !formData.address || !formData.phone || !formData.occupation) {
      toast.error("Please fill all required fields.");
      return false;
    }
    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    if (formData.rating < 1 || formData.rating > 5) {
      toast.error("Rating must be between 1 and 5.");
      return false;
    }
    if (!validatePhone(formData.phone)) {
      toast.error("Please enter a valid phone number.");
      return false;
    }
    if (!formData.termsAccepted) {
      toast.error("You must accept the terms and conditions.");
      return false;
    }
    return true;
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^\d{10}$/;
    return re.test(phone);
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h1>Google Form </h1>
        <p>This is a sample form description.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feedback">Feedback</label>
          <textarea
            id="feedback"
            name="feedback"
            rows="4"
            value={formData.feedback}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="comments">Additional Comments</label>
          <textarea
            id="comments"
            name="comments"
            rows="4"
            value={formData.comments}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="occupation">Occupation</label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="hobbies">Hobbies</label>
          <textarea
            id="hobbies"
            name="hobbies"
            rows="4"
            value={formData.hobbies}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="termsAccepted"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            required
          />
          <label htmlFor="termsAccepted">Accept Terms and Conditions</label>
        </div>
        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="subscribe"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
          />
          <label htmlFor="subscribe">Subscribe to Newsletter</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;

import React, { useState } from 'react';
import { Feedback } from '../types';
import EmojiRating from './EmojiRating';

interface FeedbackFormProps {
  addFeedback: (feedback: Feedback) => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ addFeedback }) => {
  const [name, setName] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [rating, setRating] = useState<number>(3);
  const [comments, setComments] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name && contact && email && comments) {
      const feedback: Feedback = {
        name,
        contact,
        email,
        rating,
        comments,
      };
      addFeedback(feedback);
      clearForm();
    } else {
      alert('Please fill out all fields.');
    }
  };

  const clearForm = () => {
    setName('');
    setContact('');
    setEmail('');
    setRating(3);
    setComments('');
  };

  return (
    <form className="p-6 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold mb-4 text-center">Please Provide Your Feedback</h2>
      <input
        type="text"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="tel"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
        placeholder="Contact Number"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        required
      />
      <input
        type="email"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <EmojiRating rating={rating} setRating={setRating} />
      <textarea
        className="w-full mb-4 p-2 border border-gray-300 rounded"
        placeholder="Add your comments..."
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default FeedbackForm;

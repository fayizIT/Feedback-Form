import React from 'react';
import { Feedback } from '../types';

interface SubmittedFeedbacksProps {
  feedbacks: Feedback[];
}

const getEmoji = (rating: number): string => {
  switch (rating) {
    case 1:
      return '😠';
    case 2:
      return '😕';
    case 3:
      return '🙂';
    case 4:
      return '😊';
    case 5:
      return '😍';
    default:
      return '🙂';
  }
};

const SubmittedFeedbacks: React.FC<SubmittedFeedbacksProps> = ({ feedbacks }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Submitted Feedbacks</h2>
      {feedbacks.length === 0 ? (
        <p className="text-gray-500 text-center">No feedbacks submitted yet.</p>
      ) : (
        feedbacks.map((feedback, index) => (
          <div key={index} className="mb-4 p-4 bg-blue-50 rounded-md shadow">
            <p><strong>Comments from the user:</strong> {feedback.comments}</p>
            <p><strong>User:</strong> {feedback.name}</p>
            <p><strong>Contact:</strong> {feedback.contact}</p>
            <p><strong>Email:</strong> {feedback.email}</p>
            <p><strong>Rating:</strong> {feedback.rating}/5 {getEmoji(feedback.rating)}</p>    
          </div>
        ))
      )}
    </div>
  );
};

export default SubmittedFeedbacks;

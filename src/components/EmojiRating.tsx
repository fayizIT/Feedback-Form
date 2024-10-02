import React from 'react';

interface EmojiRatingProps {
  rating: number;
  setRating: (rating: number) => void;
}

const EmojiRating: React.FC<EmojiRatingProps> = ({ rating, setRating }) => {
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

  return (
    <div className="mb-4">
      <label className="block mb-2">Share your experience in scaling</label>
      <input
        type="range"
        min="1"
        max="5"
        value={rating}
        onChange={(e) => setRating(parseInt(e.target.value))}
        className="w-full"
      />
      <div className="flex items-center justify-between mt-2">
        <span className="text-xl">{getEmoji(rating)}</span>
        <span className="text-sm">Rating: {rating}/5</span>
      </div>
    </div>
  );
};

export default EmojiRating;

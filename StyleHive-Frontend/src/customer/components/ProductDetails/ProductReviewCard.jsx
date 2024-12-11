import React, { useState, useEffect } from 'react';
import { api } from '/Users/ananthulasaivyshnav/Documents/S3 F/stylehive/StyleHive-Frontend/src/config/apiConfig.js';
 // Make sure apiConfig is set correctly

const ProductReviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [message, setMessage] = useState('');

  // Fetch reviews when the component is mounted or productId changes
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await api.get(`/api/reviews/product/${productId}`); // Fetch reviews for a specific product
        setReviews(response.data); // Store reviews in state
      } catch (error) {
        // setMessage('Error fetching reviews. Please try again.');
      }
    };

    fetchReviews();
  }, [productId]);

  return (
    <div className="max-w-3xl mx-auto mt-10">
      {/* <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2> */}

      {/* Display message if there are issues fetching reviews */}
      {message && (
        <div className="p-2 bg-red-300 text-center">
          {message}
        </div>
      )}

      {/* Loop through and display each review */}
      {reviews.length === 0 ? (
        <p>No reviews yet for this product.</p>
      ) : (
        reviews.map((review) => (
          <div key={review._id} className="mb-4 p-4 border border-gray-300 rounded-md">
            <div className="flex items-center mb-2">
              <p className="font-semibold text-lg">{review.user.name || 'Anonymous'}</p>
              <span className="ml-2 text-gray-500">{new Date(review.createdAt).toLocaleString()}</span>
            </div>
            <p className="text-gray-700">{review.review}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductReviews;

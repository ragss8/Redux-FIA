import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchImages } from './actions';
import './ImageGallery.css'; // Import the CSS file

const ImageGallery = () => {
  const images = useSelector((state) => state.images);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  if (images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="image-gallery-container">
      {images.slice(0, 8).map((image, index) => (
        <div key={index} className="image-gallery-item">
          <img src={image} alt={`Dog ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;

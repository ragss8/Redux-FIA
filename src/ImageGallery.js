import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchImages } from './actions';
import './ImageGallery.css';

const ImageGallery = () => {
  const images = useSelector((state) => state.images);
  const dispatch = useDispatch();
  const [imageCount, setImageCount] = useState(1); 

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  const handleIncrement = () => {
    setImageCount(imageCount + 1);
  };

  const handleDecrement = () => {
    if (imageCount > 0) {
      setImageCount(imageCount - 1);
    }
  };

  if (images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="image-gallery-container">
      <div className="image-gallery-controls">
        <button onClick={handleDecrement}>-</button>
        <span>{imageCount}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      {images.slice(0, imageCount).map((image, index) => (
        <div key={index} className="image-gallery-item">
          <img src={image} alt={`Dog ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;

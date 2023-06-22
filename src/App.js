import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ImageGallery from './ImageGallery';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Image Gallery</h1>
        <ImageGallery />
      </div>
    </Provider>
  );
};

export default App;


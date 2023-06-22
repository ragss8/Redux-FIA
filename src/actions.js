// actions.js
export const fetchImagesRequest = () => {
    return {
      type: 'FETCH_IMAGES_REQUEST',
    };
  };
  
  export const fetchImagesSuccess = (images) => {
    return {
      type: 'FETCH_IMAGES_SUCCESS',
      payload: images,
    };
  };
  
  export const fetchImagesFailure = (error) => {
    return {
      type: 'FETCH_IMAGES_FAILURE',
      payload: error,
    };
  };
  
  export const fetchImages = () => {
    return (dispatch) => {
      dispatch(fetchImagesRequest());
      fetch('https://dog.ceo/api/breeds/image/random/10')
        .then((response) => response.json())
        .then((data) => dispatch(fetchImagesSuccess(data.message)))
        .catch((error) => dispatch(fetchImagesFailure(error)));
    };
  };
  
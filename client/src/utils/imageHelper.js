const getImagePath = (imageName) => {
    try {
      return require(`../assets/images/${imageName}`);
    } catch (error) {
      console.error('Image not found:', error);
      return null;
    }
  };
  
  export default getImagePath;    
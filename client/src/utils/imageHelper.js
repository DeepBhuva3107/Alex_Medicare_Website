const getImagePath = (imageName) => {
  try {
    return require(`../assets/images/PRODUCT/${imageName}`);
  } catch (error) {
    console.error(`Image not found: ${imageName}`);
    // return require(`../assets/images/PRODUCT/default.jpg`); // Use a default image if not found
  }
};
export default getImagePath;
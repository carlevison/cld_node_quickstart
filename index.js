var cloudinary = require('cloudinary').v2;

// Return https URLs by setting secure: true
cloudinary.config({ 
  secure: true
});

console.log(cloudinary.config());

// Upload an image
uploadImage("assets/shoes.jpg", function(publicId) {

  // Get information about the image
  getAssetInfo(publicId, function(result){

    // If the image contains faces, call createImageTagForFaces
    if (result.faces.length)
    {
      createImageTagForFaces(publicId, result.colors[0][0], result.colors[1][0]);
    }
    // Otherwise, call createImageTagForNoFaces
    else
    {
      createImageTagForNoFaces(publicId);
    }
    
  }); 
});

// Uploads an image file
function uploadImage(file, callback)
{
  // Upload the image
  cloudinary.uploader.upload(file, 
      function(error, result) {
        console.log(result, error);
        callback(result.public_id); 
      }
  )
}

// Gets details of an uploaded image
function getAssetInfo(publicId, callback)
{
  // Get details of the uploaded image
  cloudinary.api.resource(publicId, 
    { faces: true, 
      colors: true },
      function(error, result) {
        console.log(result, error); 
        callback(result);
      }
  );
}

// Creates an HTML image tag applying various transformations
// to the image.
// Use on images that have faces.
function createImageTagForFaces(publicId, color1, color2)
{
  let imageTag = cloudinary.image(publicId, {transformation: [
  {width: 250, height: 250, gravity: "faces", crop: "thumb"},
  {radius: "max"},
  {effect: "outline:10", color: color1},
  {background: color2}
  ]});

  console.log(imageTag);
}

// Creates an HTML image tag applying a simple resize to 
// the image.
// Use on images that do not have faces.
function createImageTagForNoFaces(publicId)
{
  let imageTag = cloudinary.image(publicId, {width: 250, height: 250, gravity: "auto", crop: "fill"});

  console.log(imageTag);
}







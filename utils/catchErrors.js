export default function catchErrors(error, displayError) {
  let errorMsg;
  if (error.response) {
    // The request was made the server responsed with a status code that is not
    //in the range of 2xx
    errorMsg = error.response.data;
    console.log("Error response", errorMsg);

    // For Cloudinary image uploads
    if (error.response.data.error) {
      errorMsg = error.response.data.error.message;
    }
  } else if (error.request) {
    //The request was made, but no response was received
    errorMsg = error.request;
    console.log("Error request", errorMsg);
  } else {
    //Something else happened in making the request that triggered an error
    errorMsg = error.message;
    console.error("Error message", errorMsg);
  }

  displayError(errorMsg);
}

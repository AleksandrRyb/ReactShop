// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV:
      "mongodb+srv://AlexFish:AlexFish@reactshop-9zxxb.mongodb.net/test?retryWrites=true&w=majority",
    JWT_SECRET: "flksjegkjdhrlgjtdljhlkdjigjrwesipg",
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/dxeltznxu/image/upload",
    STRIPE_SECRET_KEY: "sk_test_qJrtRjjcW4PKHx877CWLg1gQ"
  }
};

const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const uploadImage = async (image) => {
    const uploaded = await cloudinary.uploader.upload(image,
        function (error, result) {
            if (error) {
                console.log(error)
            }
        });
        return uploaded.url
}

module.exports = {uploadImage}
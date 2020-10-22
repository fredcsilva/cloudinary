var CLOUDNARY_URL = 'https://api.cloudinary.com/v1_1/diosclkgv'
var CLOUDNARY_UPLOAD_PRESENT = 'tcpkhue8'

/*
const config: CloudinaryConfiguration = {
    cloud_name: 'xxx',
    api_key: 'xxx',
    api_secret: 'xxx-xxx',
    upload_preset: 'xxx'
  }
  */

var imagePreview = document.getElementById('img-preview')
var fileUpload = document.getElementById('file-upload')

fileUpload.addEventListener('change', function(event){    
    var file = event.target.files[0]    
    var formData = new FormData()
    formData.append('file', file)
    formData.append('upload_present', CLOUDNARY_UPLOAD_PRESENT)

    axios({
        url: CLOUDNARY_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
    }).then(function(res){
        console.log(res)
        imagePreview.src = res.data.secure_url;
    }).catch(function(err){
        console.error(err)
    });
})
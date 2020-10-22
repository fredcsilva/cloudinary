var CLOUDNARY_URL = 'https://api.cloudinary.com/v1_1/diosclkgv'
var CLOUDNARY_UPLOAD_PRESENT = 'tcpkhue8'

var imagePreview = document.getElementById('img-preview')
var fileUpload = document.getElementById('file-upload')

fileUpload.addEventListener('change', function(event){    
    var file = event.target.files[0]    
    var formData = new FormData()
    formData.append('file', file)
    formData.append('upload_present', CLOUDNARY_UPLOAD_PRESENT)

    fetch(CLOUDNARY_URL, {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
          if (data.secure_url !== '') {
            console.log(data.secure_url)
          }
      })
      .catch(err => console.error(err));

      /*
    axios({
        url: CLOUDNARY_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
        data: formData
    }).then(function(res){
        console.log(res)
        imagePreview.src = res.data.secure_url;
    }).catch(function(err){
        console.error(err)
    });
    */
});


function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    let count = 0 ; 
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }
      count = count + 1 ; 
      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          var span = document.createElement('span');
          let id = "myimg" + i ; 
          span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '"id=', id,
                            '" title="', escape(theFile.name), '"/>'].join('');
          document.getElementById('list').insertBefore(span, null);
          
          console.log(document.getElementById(id)) ; 
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
    diplayImages(count) ; 

  }
  function diplayImages(count){

    for(i = 0; i < count;i++){
      let id = "myimg" + i ; 
      console.log(document.getElementById(id)) ; 
    }
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);
 

let arr = [] ; 

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    let count = 0 ; 
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }
      // count = count + 1 ; 
      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          var span = document.createElement('span');
          let id = "myimg" + count++ ; 
          span.innerHTML = ['<img class="thumb"  draggable="true" ondragstart="drag(event)" src="', e.target.result,
                            '"id="', id,
                            '" title="', escape(theFile.name), '"/>'].join('');
          document.getElementById('list').insertBefore(span, null);
          diplayImage(id) ; 
          // console.log(id) ;
          moveImg(id) ; 
          // arr.push(id) ; 
          // console.log(document.getElementById(id)) ; 
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
    
    
    // for (let i = 0 ; i< arr.length;i++){
    //   let id = "myimg" + i ; 
    //   console.log(id) ;

    // }
    // console.log(arr) ; 
    
    
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);



  function diplayImage(id){
      // console.log(document.getElementById(id)) ; 
      // let currentDroppable = null;
  }




  function moveImg(id){
    console.log(document.getElementById(id)) ; 
    
    let ball = document.getElementById(id) ; 

    ball.onmousedown = function(event) {
  
      let shiftX = event.clientX - ball.getBoundingClientRect().left;
      let shiftY = event.clientY - ball.getBoundingClientRect().top;
  
      ball.style.position = 'absolute';
      ball.style.zIndex = 1000;
      document.body.append(ball);
  
      moveAt(event.pageX, event.pageY);
  
      function moveAt(pageX, pageY) {
        ball.style.left = pageX - shiftX + 'px';
        ball.style.top = pageY - shiftY + 'px';
      }
  
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }
  
      document.addEventListener('mousemove', onMouseMove);
  
      ball.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        ball.onmouseup = null;
      };
  
    };

    ball.ondragstart = function() {
      return false;
    };
  }




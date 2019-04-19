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
          let id = "myimg" +i ; 
          span.innerHTML = ['<img class="thumb"  draggable="true" ondragstart="drag(event)" src="', e.target.result,
                            '"id="', id,
                            '" title="', escape(theFile.name), '"/>'].join('');
          document.getElementById('list').insertBefore(span, null);
          diplayImage(id) ; 
          // console.log(document.getElementById(id)) ; 
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
    

  }



  function diplayImage(id){
      console.log(document.getElementById(id)) ; 
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);


  function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  // class App {

  //   static init() {
  
  //     App.box = document.getElementsByClassName('box')[0]
  
  //     App.box.addEventListener("dragstart", App.dragstart)
  //     App.box.addEventListener("dragend", App.dragend)
  
  //     const containers = document.getElementsByClassName('holder')
  
  //     for(const container of containers) {
  //       container.addEventListener("dragover", App.dragover)
  //       container.addEventListener("dragenter", App.dragenter)
  //       container.addEventListener("dragleave", App.dragleave)
  //       container.addEventListener("drop", App.drop)
  //     }
  //   }
  
  //   static dragstart() {
  //     this.className += " held"
    
  //     setTimeout(()=>this.className="invisible", 0)
  //   }
  
  //   static dragend() {
  //     this.className = "box"
  //   }
  
  //   static dragover(e) {
  //     e.preventDefault()
  //   }
  
  //   static dragenter(e) {
  //     e.preventDefault()
  //     this.className += " hovered"
  //   }
  
  //   static dragleave() {
  //     this.className = "holder"
  //   }
  
  //   static drop() {
  //     this.className = "holder"
  //     this.append(App.box)
  //   }
  
  // }
  
  // document.addEventListener("DOMContentLoaded", App.init)
  
 
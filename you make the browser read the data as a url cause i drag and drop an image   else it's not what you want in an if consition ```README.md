## A simple Drag and drop App
#### what you need to know first is a simple knowlage of HTML , CSS and JS for you to impliment this App
```
  const file = e.dataTransfer.files[0] // this is on drop you git the first element of the chosen  file 
  const type = file.type // get the file type and compare it with the types of files you want the user to render 
  const fileReader = new fileReader() // create a new file reader 
  
```

```
  (fileReader.onload()) // and on load you get the file result 
  const fileURL = fileReader.result; // and then you put the tag in an img file 
  <img src={fileURL} alt='' /> // then you insert it 
```

```
  fileReader.readAsDataURL(file) // you make the browser read the data as a url cause i drag and drop an image
  else it's not what you want in an if consition
```

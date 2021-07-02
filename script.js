const container = document.querySelector('.drag-container');
const heading = container.querySelector('h2');
const button = container.querySelector('button');
const input = container.querySelector('input')
let file;


button.addEventListener('click',function() {
    input.click();
})


input.addEventListener('change',function(e) {
    let file = this.files[0]; // get the first element of the chosen data files
    getFile(file);    
})

container.addEventListener('dragover',function(e){
    e.preventDefault();
    heading.textContent = 'Release to Drop';
    this.classList.add('active')
})

// add event when draging out of the item
container.addEventListener('dragleave',function(e){
    e.preventDefault();
    heading.textContent = 'Drag Items Here';
    this.classList.remove('active');
});


// add event to the container when droping the item
container.addEventListener('drop',function(e) {
    e.preventDefault();
    let file = e.dataTransfer.files[0]; // get the first element of the chosen data files
    getFile(file) // get the file info function 
})

function getFile(file) {
    let fileType = file.type; // get the file type example image/png, image/jpg
    let fileNames = ['image/jpg','image/png','image/jpeg']; // array of types
    if(fileNames.includes(fileType)){ // if condition for the file type

        const fileReader = new FileReader(); // create a new FileReader 
        fileReader.onload = () => { // run the filr on load 
            const fileURL = fileReader.result; // get the result of the file reader
            const imgTAG = `<img src='${fileURL}' alt='img'>`; // create an img tag to append to the parent
            container.innerHTML = imgTAG; // append the img tag to the parent
        }
        fileReader.readAsDataURL(file) // read the file Data as URL Data
        container.classList.add('active')
    }else {
        alert('it\'s not an image!')
        container.classList.remove('active')
    }
}
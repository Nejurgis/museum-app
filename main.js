let paintings = data.artObjects;
for(let i = 0; i < paintings.length; i++){
    let currentPainting = paintings[i];
    displayPainting(currentPainting);   
}


function displayPainting(painting) {

        // create <a> elements to display data with document.createElement('a')
        const a = document.createElement('a'); 
        a.setAttribute('href', './pages/detail-page.html' ); 
        // create img elements 
        const img = document.createElement('img');
        // make them children of <a> with appendChild
        a.appendChild(img);
        // img class should be artObject 
        img.classList.add('artObject');
        // set src attribute (paintings[i].webImage.url) to img
        img.setAttribute('src', painting.webImage.url );
        // img alt is paintings[i].title
        img.alt = painting.title;
        // create a handler to gallery
        const gallery = document.getElementById('gallery');
        // append a and its children as child of gallery
        gallery.appendChild(a);
}



 






// if (doesNotPassAllValidations(name, msg)) {
//     return null;
// }

// // Create elements to display that data 
// const comment = document.createElement('section');
// const h3 = document.createElement('h3');
// const p = document.createElement('p');
// // use the previously gathered .values and add them to the newly created 
// // elements
// h3.innerHTML = `${name} said:`
// p.innerHTML = msg;

// // adding a class to the section element
// comment.classList.add('comment');
// // appending two kids (h3 and p) to the section element
// comment.appendChild(h3);
// comment.appendChild(p);

// // Display the created elements with the form data
// const commentSection = document.getElementById('comments');
// console.log(commentSection);
// commentSection.appendChild(comment);

// // Empty the input fields so the next user can type new text
// inputField.value = null;
// textArea.value = null;

// // console.log(name);
// // console.log(msg);
// }
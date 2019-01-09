// User Story: 
// A user can leave their name and write a comment, When they click SUBMIT, Their name and comment will b displayed

// Create an INPUT field 
// -For the Name
// -For the Comment
// -Submit Button
// DONE


// Add an event (name and comment) listener/handler to the button
function submitComment() {
    // Gather data from the input fields via .value
    const inputField = document.getElementById('name');
    const name = inputField.value;
    const textArea = document.getElementById('msg');
    const msg = textArea.value;

    // Create elements to display that data 
    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    // use the previously gathered .values and add them to the newly created 
    // elements
    h3.innerHTML = `${name} said:`
    p.innerHTML = msg;

    // adding a class to the section element
    comment.classList.add('comment');
    // appending two kids (h3 and p) to the section element
    comment.appendChild(h3);
    comment.appendChild(p);
    console.log(comment);
}




// Display the created elements with data

// Empty the input fields so the next user can type new text
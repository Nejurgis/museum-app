// User Story: 
// A user can leave their name and write a comment, When they click SUBMIT, Their name and comment will b displayed

// Create an INPUT field 
// -For the Name
// -For the Comment
// -Submit Button
// DONE

function doesNotPassAllValidations(name, msg) {


    if (!name) {
        alert('You forgot to fill in your name!')
        return true;
    } else if (!msg) {
        alert('You forgot to fill in your message!')
        return true;
    } else if (msg.length > 280) {
        alert('Your comment is too long')
        return true
    }

    return false
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1);
}

// let offensive = [' boo ',' noo ',' moo '];


// Add an event (name and comment) listener/handler to the button
function submitComment() {

    // Gather data from the input fields via .value
    const inputField = document.getElementById('name');
    let name = inputField.value;
    
    
    const textArea = document.getElementById('msg');
    const msg = textArea.value;
    

    if (name[0] !== name[0].toUpperCase()) {
        name = capitalize(name);
        // alert(name);
    }

    if(offensive(msg)) {
        alert('Warning: This comment has been flagged as offensive');
        return null;
    }

    

    
    if (msg.includes(' boo ')) {
        alert('ofensive')
    }

    // capitalize(name);
    //     // alert('nonUppercased');
    //     name[0].toUppercase();
    //     alert(name);
    // }
    // const isUpperCase = (name) => /^[A-Z]*$/.test(string);
    // if (!isUppercase) {
    //     name.toUpperCase();
    // }



if (doesNotPassAllValidations(name, msg)) {
        return null;
    }

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

    // Display the created elements with the form data
    const commentSection = document.getElementById('comments');
    console.log(commentSection);
    commentSection.appendChild(comment);

    // Empty the input fields so the next user can type new text
    inputField.value = null;
    textArea.value = null;

    // console.log(name);
    // console.log(msg);
}

function offensive (text) {
    let convertedToUpperCase = text.toUpperCase();
    let offensiveWords = ['bunny', 'bob'];
    for (let i = 0; i <= offensiveWords.length-1; i++) {
        if (convertedToUpperCase.includes(offensiveWords[i])) {
            return true;
        }
    }
    return false;
}
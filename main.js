let paintings = data.artObjects;
let goodWidth = 500;
let thresholdAge = 1800;
let badArtist = "Honthorst";




function isValid(paintingDate, paintingWidth, artistName) {
    if (paintingDate <= thresholdAge && paintingWidth >= goodWidth && !artistName.includes(badArtist)) {
        return true
    }

    return false
}

for(let i = 0; i < paintings.length; i++){
    let currentPainting = paintings[i];
    // access painting width
    let paintingWidth = currentPainting.webImage.width;
    // access painting age (title)
    let paintingTitle = currentPainting.longTitle;
    // find the numbers in title
    let paintingDate = paintingTitle.match(/\d+/g).map(Number);
    // find the artist name
    let artistName = currentPainting.principalOrFirstMaker;
    // if artist name contains bad artist then don't display

    if(isValid(paintingDate, paintingWidth, artistName)){
        displayPainting(currentPainting);  
    }
}



// TODO
// Only display paintings with a width bigger than 500px
// Don't display paintings created by Honthorst
// Display paintings created only before 1800



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

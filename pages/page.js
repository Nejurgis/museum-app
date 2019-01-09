const html = {
    type: '!DOCTYPE html',
    head: {
        title: 'Example Page'
    },
    body: {
        h1: {
            id: 'Title',
            insideText: 'This is an example page'
        },
        img: {
            src: 'http://plackitten.com/500',
            alt: 'beautiful kitten',
        }
    }
}





console.log(html);
html.head.title = 'new';
console.log(html);
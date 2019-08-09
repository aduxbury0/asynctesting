const posts = [
    {title: 'post one', body:'this is post one'},
    {title: 'post two', body:'this is post two'}
]

function getPosts() {
    setTimeout( () => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000 );

};


function createPosts(post) {
    
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            posts.push(post);
            const error = true;
            if(!error) {
                resolve();
            }
            else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

/*createPosts({title: 'post three', body:'this is post three'})
    .then(getPosts)
    .catch(err => {console.log(err)}) */


const promise1 = Promise.resolve('hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'goodbye'));

Promise.all([promise1, promise2, promise3]).then((values) => {console.log(values)});
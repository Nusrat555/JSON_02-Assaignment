function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayUsers(data))
}
loadUsers();

function displayUsers(data){
    const sectionId = document.getElementById('posts');
    for(const posts of data){
        const div = document.createElement('div');
        div.classList.add('posts')
        div.innerHTML = `
        <h1>${posts.id} </h1>
        <h4>${posts.title} </h4>
        <h5>${posts.body} </h5>
        `;


        sectionId.appendChild(div);

        console.log(posts);
    }
}
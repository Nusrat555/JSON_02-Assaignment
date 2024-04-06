function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayUsers(data))
}
loadUsers();

function displayUsers(data){
    const sectionId = document.getElementById('todos');
    for(const todos of data){
        const div = document.createElement('div');
        div.classList.add('todos')
        div.innerHTML = `
        <h1>${todos.id} </h1>
        <h2>${todos.title} </h2>
        `;


        sectionId.appendChild(div);

        console.log(todos);
    }
}
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => displayUsers(data))
}
loadUsers();


function displayUsers(data){
    const sectionId = document.getElementById('albums');
    for(const albums of data){
        const div = document.createElement('div');
        div.classList.add("albums")
        div.innerHTML = `
        <h1>${albums.id} </h1>
        <h5>${albums.title} </h5>
        `;
          
        sectionId.appendChild(div);
        console.log(albums);
    }

}
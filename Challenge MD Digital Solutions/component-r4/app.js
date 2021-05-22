const button = document.querySelector('button');
const tbody = document.querySelector('#t-body');
var idVal = 1;
button.addEventListener("click", () => {
    
    fetch("https://rickandmortyapi.com/api/character/" + this.idVal + "/")
        .then((resp) => resp.json())
        .then((data) => {
            tbody.innerHTML +=`
                <tr>
                    <td>${data.id}</td>
                    <td>${data.name}</td>
                    <td>${data.status}</td>
                    <td>${data.species}</td>
                    <td>${data.gender}</td>
                    <td><img alt="" src="${data.image}"></td>
                </tr>`;
    })
    idVal++;
})

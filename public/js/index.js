// function alerta() {
//     let livro = document.querySelector("#livro");
//     alert(livro.value);
// }

let livros = [];

function exibeLista() {
    document.querySelector("#lista").innerHTML = "";
    for(let i = 0;i < livros.length; i++) {
        let item = document.createElement("li");
        item.appendChild(
            document.createTextNode(
                livros[i]
            )
        );
        let link = document.createElement("a");
        link.setAttribute("href", "#");
        link.setAttribute("onclick", "removeItem(" + i  +")");
        link.innerHTML = "Remover";
        item.appendChild(link);
        document.querySelector("#lista").appendChild(item);
    }
}

function removeItem(pos) {
    livros.splice(pos, 1);
    exibeLista();
}

document.querySelector("button").onclick = function() {
    // let item = document.createElement("li");
    // item.appendChild(
    //     document.createTextNode(
    //         document.querySelector("#livro").value
    //     )
    // );
    // item.innerHTML = document.querySelector("#livro").value;
    // document.querySelector("#livro").value = "";
    // document.querySelector("#lista").appendChild(item);
    livros.push(document.querySelector("#livro").value);
    document.querySelector("#livro").value = "";
    exibeLista();
}

exibeLista();
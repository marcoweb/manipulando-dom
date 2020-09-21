// function alerta() {
//     let livro = document.querySelector("#livro");
//     alert(livro.value);
// }

document.querySelector("button").onclick = function() {
    let item = document.createElement("li");
    // item.appendChild(
    //     document.createTextNode(
    //         document.querySelector("#livro").value
    //     )
    // );
    item.innerHTML = document.querySelector("#livro").value;
    document.querySelector("#livro").value = "";
    document.querySelector("#lista").appendChild(item);
}
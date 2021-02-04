var btnOk = document.querySelector("#ok");
console.log(btnOk);
btnOk.addEventListener("click", (event) => {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://localhost:9000/gerenciador/empresas");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:9000/gerenciador/empresas");
    xhr.setRequestHeader("Access-Control-Request-Method", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");
    xhr.setRequestHeader("Access-Control-Max-Age", "86400");
    xhr.setRequestHeader("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token, Accept, Origin");
    xhr.setRequestHeader("Accept", "application/json");

    /*header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
*/
    /*xhr.setRequestHeader("Access-Control-Request-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");*/

    xhr.addEventListener("load", httpGetResponse);
    xhr.send();

    console.log("das");
});

let httpGetResponse = (event) => {
    if (event.currentTarget.status == 200) {
        let resposta = event.currentTarget.responseText;
        console.log(JSON.parse(resposta));
    } else {
        console.log("erro");
    }
};

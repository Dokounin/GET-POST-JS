// URL JSON
const requestUrl = "https://jsonplaceholder.typicode.com/users";

function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    // enquête GET pour recevoir donnés
    xhr.open(method, url);

    // convertir type string en json object
    xhr.responseType = "json";
    xhr.setRequestHeader('Content-Type', 'application/json')
    // recevoir donner dans la console
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    // function pour voir de error
    xhr.onerror = () => {
      console.log(xhr.response);
    };

    // method pour envoyer donner
    xhr.send(JSON.stringify(body));
  });
}
// ! request GET
// sendRequest("GET", requestUrl)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const body = {
    name : 'Vladyslav',
    age : 25
}
//! request POST
sendRequest("POST", requestUrl, body)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

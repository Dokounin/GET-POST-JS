// URL JSON
const requestUrl = "https://jsonplaceholder.typicode.com/users";

function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type' : 'application/json'
    }
  return fetch(url, {
    method : method,
    body: JSON.stringify(body),
    headers : headers
  } ).then((response) => {
    return response.json();
  });
}
// ! request GET
// sendRequest("GET", requestUrl)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const body = {
  name: "Vladyslav",
  age: 25,
};
//! request POST
sendRequest("POST", requestUrl, body)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

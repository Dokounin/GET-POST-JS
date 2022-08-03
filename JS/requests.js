// URL JSON
const requestUrl = "https://127.0.0.1:8000/api/articles";

//! request GET
fetch(requestUrl, {
  method: "GET",
})
  .then(function (response) {
    return response.json();
  })
  .then((responseJSON) => {
    console.log(responseJSON);
  })
  .catch((err) => console.log(err));

//! request POST

const createButton = document.querySelector("#btnCreate");
const articleName = document.querySelector("#articleName");

const createArticle = function (event) {
  const headers = {
    "Content-Type": "application/json",
  };
  const requestBody = {
    "title": articleName.value,
    "body": "avec un contenu très intéressant",
    "tags": [
      "api/tags/1",
      "api/tags/3"
    ],
    "category": "api/categories/1",
    "writer": "api/writers/1",
    "publishedAt": "2022-08-02T11:49:30.481Z",
  };
  fetch(requestUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(requestBody),
  })
    .then(function (response) {
      return response.json();
    })
    .then((responseJSON) => {
      console.log(responseJSON);
    })
    .catch((err) => console.log(err));
};

createButton.addEventListener("click", createArticle);

//! request PUT

const updateButton = document.querySelector("#btnUpdate");

let requestUpdate = "https://127.0.0.1:8000/api/articles/2";

const updateArticle = function (event) {
  const headers = {
    "Content-Type": "application/json",
  };
  const requestBody = {
    "title": articleName.value,
  };
  fetch(requestUpdate, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(requestBody),
  })
    .then(function (response) {
      return response.json();
    })
    .then((responseJSON) => {
      console.log(responseJSON);
    })
    .catch((err) => console.log(err));
};

updateButton.addEventListener("click", updateArticle);

//! request DELETE

const deleteButton = document.querySelector("#btnDelete");

let requestDelete = "https://127.0.0.1:8000/api/articles/205";

// request DELETE
const deleteArticle = function (event) {
  fetch(requestDelete, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      // Indicates the content
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then((responseJSON) => {
      console.log(responseJSON);
    })
    .catch((err) => console.log(err));
};

deleteButton.addEventListener("click", deleteArticle);

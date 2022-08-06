// URL JSON
var APIURL = "https://127.0.0.1:8000/api";
var articleAPIURL = APIURL + "/articles";

const selectArticle = document.querySelector("#select");

//! request GET
// function to get all categories and filling <select>z
var readArticles = function () {
  // first we empty the select
  while (selectArticle.firstChild) {
    selectArticle.removeChild(selectArticle.firstChild);
  }
  // then we fetch data and fill the select
  fetch(articleAPIURL, { method: "GET" })
    .then(function (response) {
      return response.json();
    })
    .then((responseJSON) => {
      responseJSON["hydra:member"].forEach((article) => {
        let articleOption = document.createElement("option");
        articleOption.innerHTML = article["title"];
        articleOption.value = article["id"];
        articleOption.id = "option-" + article["id"];
        selectArticle.appendChild(articleOption);
      });
    });
};

document.addEventListener("DOMContentLoaded", readArticles);

//! request POST

const createButton = document.querySelector("#btnCreate");
const createName = document.querySelector("#createName");

const createArticle = function (event) {
  const headers = {
    "Content-Type": "application/json",
  };
  const requestBody = {
    title: articleName.value,
    body: "avec un contenu très intéressant",
    tags: ["api/tags/1", "api/tags/3"],
    category: "api/categories/1",
    writer: "api/writers/1",
    publishedAt: "2022-08-02T11:49:30.481Z",
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
const articleName = document.querySelector("#articleName");

let requestUpdate = "https://127.0.0.1:8000/api/articles/";

const updateArticle = function (event) {
  const headers = {
    "Content-Type": "application/json",
  };
  const requestBody = {
    title: articleName.value,
  };
  fetch(requestUpdate + selectArticle.value, {
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
// select.addEventListener("change", updateArticle);
updateButton.addEventListener("click", updateArticle);

//! request DELETE
const articleId = document.querySelector("#articleId");
const deleteButton = document.querySelector("#btnDelete");

// request DELETE
const deleteArticle = function (event) {
  let requestDelete = `https://127.0.0.1:8000/api/articles/`;
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

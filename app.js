document.getElementById('get-text').addEventListener('click', getText);
document.getElementById('get-json').addEventListener('click', getJSON);
document.getElementById('get-data').addEventListener('click', getExternal);

function getText() {
  fetch('text.txt')
    .then(res => res.text())
    .then(data => document.querySelector('.output').innerHTML = `<p>${data}</p>`)
    .catch(err => console.log(err));
}

function getJSON() {
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        document.querySelector('.output').innerHTML += `<li>${item.title}</li>`
      })
    })
    .catch(error => console.log(`Something went wrong. ${error}`));
}

function getExternal() {
  fetch('https://api.github.com/users?since=135')
    .then(response => response.json())
    .then(data => {
      data.forEach(user => {
        document.querySelector('.output').innerHTML += `<li>${user.login}</li>`
      })
    })
    .catch(error => console.log(`Something went wrong. ${error}`));
}
document.addEventListener('DOMContentLoaded', function() {
    const elementoNome = document.getElementById('name');
    const elementoUsername = document.getElementById('username');
    const elementoFoto = document.getElementById('avatar');
    const elementoRepos = document.getElementById('repos');
    const elementoSeguidores = document.getElementById('seguidores');
    const elementoSeguindo = document.getElementById('seguindo');
    const elementoLink = document.getElementById('link');

    fetch('https://api.github.com/users/EduardoRDSR')
    .then(function(res) {
        return res.json();
    })
    .then(function(json) {
        elementoNome.innerHTML = json.name;
        elementoUsername.innerHTML = json.login;
        elementoFoto.innerHTML = json.avatar_url;
        elementoSeguindo.innerHTML = json.following;
        elementoSeguidores.innerHTML = json.followers;
        elementoRepos.innerHTML = json.public_repos;
        elementoLink.href = json.html_url;
    })
})
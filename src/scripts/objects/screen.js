const screen = {
    userProfile: document.querySelector('.profile-data'),
    
    renderUser(userData){
        this.userProfile.innerHTML = `<div class="info">
                            <img src="${userData.avatarUrl}" alt="Foto do perfil do usuário"/>
                            <div class="data">
                                <h1>${userData.name ?? 'Não possui nome cadastrado 😭'}</h1>
                                <p>${userData.bio ?? 'Não possui biografia cadastrada ):'}</p>
                            </div>
                        </div>`;
       
        let repositoriesItens = "";
        userData.repositories.forEach(repo => {repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>
            `});
        
        if(userData.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repoitórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                          </div>`
        }     
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado!</h3>"
    }
};

export {screen};
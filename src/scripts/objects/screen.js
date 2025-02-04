const screen = {
    userProfile: document.querySelector('.profile-data'),
    
    renderUser(userData){
        this.userProfile.innerHTML = `<div class="info">
                            <img src="${userData.avatarUrl}" alt="Foto do perfil do usuário"/>
                            <div class="data">
                                <h1>${userData.name ?? 'Não possui nome cadastrado 🤔'}</h1>
                                <p>${userData.bio ?? 'Não possui biografia cadastrada 🥹):'}</p>
                            </div>
                            <div class="counters">
                                <div class="followers">
                                    <h4>👥 Seguidores</h4>
                                    <span>${userData.followers}</span>
                                </div>
                                <div class="following">
                                    <h4>👥 Seguindo</h4>
                                    <span>${userData.following}</span>
                                </div>
                            </div>
                        </div>`;
       
        let repositoriesItens = "";
        userData.repositories.forEach(repo => {repositoriesItens += 
            `<li><a href="${repo.html_url}" target="_blank">
            <h4>${repo.name}</h4>
                <i class="forks">🍴 ${repo.forks_count}</i>
                <i class="stars">⭐ ${repo.stargazers_count ?? 0}</i>
                <i class="watchers">🫣 ${repo.watchers_count}</i>
                <i class="language">👩🏼‍💻 ${repo.language ?? "Sem linguagem"}</i>
            </a></li>`
        });
        
        if(userData.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repoitórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                          </div>`
        } 
        
        let eventsItens = "";
        userData.events.forEach(event => {
            if(event.type === "PushEvent"){
                eventsItens += `<li>📌 ${event.repo.name} - ${event.payload.commits[0]?.message ?? "Sem mensagem de Commit"}</li>`;

            } else if(event.type === "CreateEvent"){
                eventsItens += `<li>✨ ${event.repo.name} - Criando um novo repositório</li>`;
            }
        });

        if (userData.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events section">
                                               <h2>Últimos Eventos</h2>
                                               <ul>${eventsItens}</ul>
                                           </div>`;
        }
    },
    
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Desculpe, usuário não encontrado!</h3>"
    }
};

export {screen};
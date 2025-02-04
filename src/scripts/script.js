import { user } from './services/user.js';
import { repositories } from './services/repositories.js';
import { getEvents } from './services/events.js';

import { userObject } from './objects/userObject.js';
import { screen } from './objects/screen.js';

document.getElementById('btn-search').addEventListener('click', ()=>{
    const userName = document.getElementById('input-search').value;
   
    if(validadeEmptyInput(userName)) return;
    getUserDataProfile(userName); 
});

function validadeEmptyInput(userName){
    if(userName.length === 0){
        alert("Preencha o campo com o nome do usuário do GitHub.");
        return true;
    };
};

document.getElementById('input-search').addEventListener('keyup', (e)=>{
    const userName = e.target.value;
    const key = e.which || e.keyCode;
    const isEnterKeyPressed = key === 13;
    
    if(isEnterKeyPressed){

        if(validadeEmptyInput(userName)) return;
        getUserDataProfile(userName);
    };
});

async function getUserDataProfile(userName){
    const userResponse = await user(userName);
  
    if(userResponse.message === "Not Found"){
       screen.renderNotFound();
       return;
    }

    const repositoriesResponse = await repositories(userName);
    const eventsResponse = await getEvents(userName);

    userObject.setInfo(userResponse);
    userObject.setRepositories(repositoriesResponse);
    userObject.setEvents(eventsResponse);
   
    screen.renderUser(userObject);
};



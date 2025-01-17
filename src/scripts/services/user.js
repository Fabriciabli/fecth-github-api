import { baseUrls } from '../variables.js';
async function user(userName){
    const response = await fetch(`${baseUrls}/${userName}`);
    return await response.json();
}

export { user };
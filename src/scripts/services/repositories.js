import { baseUrls, repositoriesQuantity } from "../variables.js";

async function repositories(userName){
    const response = await fetch(`${baseUrls}/${userName}/repos?per_page=${repositoriesQuantity}`); 
    return await response.json();
};

export { repositories };
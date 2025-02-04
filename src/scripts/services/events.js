import { baseUrls, repositoriesQuantity } from "../variables.js"

async function getEvents(userName){
    const response = await fetch(`${baseUrls}/${userName}/events?per_page=${repositoriesQuantity}`);
    const events = await response.json();

    return events.filter(event=> event.type === "PushEvent" || event.type === "CreateEvent");
}

export { getEvents };
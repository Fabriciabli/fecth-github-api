const userObject = {
    avatarUrl: "",
    name:"",
    bio: "",
    userName: "",
    followers: "",
    following: "",
    repositories: [],
    events: [],

   
    setInfo(GithubUser){ 
        this.avatarUrl = GithubUser.avatar_url;
        this.nome = GithubUser.name;
        this.bio = GithubUser.bio;
        this.userName = GithubUser.login;
        this.followers = GithubUser.followers;
        this.following = GithubUser.following;
    },
   
    setRepositories(repositories){
        this.repositories = repositories
    },

    setEvents(events) {
        this.events = events;
    } 
};

export {userObject};
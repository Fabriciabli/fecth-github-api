const userObject = {
    avatarUrl: "",
    name:"",
    bio: "",
    userName: "",
    repositories: [],

   
    setInfo(GithubUser){ 
        this.avatarUrl = GithubUser.avatar_url;
        this.nome = GithubUser.name;
        this.bio = GithubUser.bio;
        this.userName = GithubUser.login;
    },
   
    setRepositories(repositories){
        this.repositories = repositories
    }
};

export {userObject};
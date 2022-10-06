class UI{
    constructor(){
        this.profile = document.getElementById("profile");
    }

    showProfile(user){
    this.profile.innerHTML = 
    `
        <div class="card-body">
        <div class= ""row>
            <div class="col-md-3">
                <img class"img-fluid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}">view profile</a>
            </div>
            <div class="col-md-9">
                <span class="badge"${user.public_repos}</span>
                <span class="badge"${user.public_gists}</span>
                <span class="badge"${user.public_followers}</span>
                <span class="badge"${user.following}</span>
                <br><br>
                <ul class="list-group">
                    <li class="list grou">${user.company}</li>
                    <li class="list grou">${user.blog}</li>
                    <li class="list grou">${user.location}</li>
                    <li class="list grou">${user.created_at}</li>
                </ul>
            </div>
        </div>            
        </div>
    `
}

// show alert msg
showAler(message){

}
// clear profile
clearProfile(){
    this.profile.innerHTML = "";
}

}

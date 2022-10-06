// search input
const searchUser = document.getElementById("searchUser");
// init UI
const ui = new UI;
// init Github
const github = new Github;
searchUser.addEventListener("keyup", runSearch);

function runSearch(e){
    const inputSearch = e.target.value;
    if(inputSearch.length > 0){
      // make http call
      github.getUser(inputSearch)
        .then(function(data){
            if(data.profile.message === "Not Found"){
                // show alert
                ui.showAlert("User not found")
            }else{
                // show profile
                ui.showProfile(data.profile)

            }
        })
    }else{
        //clear profile
        ui.clearProfile()

    }


    e.preventDefault()
}
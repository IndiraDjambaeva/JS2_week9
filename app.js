//https://github.com/settings/applications/new
//https://github.com/settings/applications/1860984
//https://github.com/settings/applications/1864548


const github = new Github();
const ui = new UI();

const searchInput = document.getElementById("search-user");

searchInput.addEventListener('keyup', (e) => {
  const userText = e.target.value;

  if(userText !== "") {
    github.getUser(userText).then((data) => {
      if(data.profile.message === "Not Found") {

      }else {
        ui.showProfile(data.profile)
      }
    });
  } else {

  }
});


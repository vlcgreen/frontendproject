var themeList = [
  "blackTie",
  "carnival",
  "cowboy",
  "disney",
  "nautical",
  "international",
  "jungle",
  "luau",
  "mardiGras",
  "renaissance",
];
// add event listener to each theme, saves to local storage, and goes to display page
function addEventListener() {
  themeList.forEach((theme) => {
    theme = document.getElementById(theme);
    theme.addEventListener("click", (e) => {
      localStorage.setItem("themeDisplay", e.target.innerText);
      localStorage.setItem("themeID", e.target.id);
      window.location.replace("displayTheme2.html");
    });
  });
}
addEventListener();

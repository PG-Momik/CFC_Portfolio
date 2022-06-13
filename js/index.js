let img = document.getElementById("image_illu");
let button_main = document.getElementById("btn-hello");
let click_count = 0;
var i = 0,
  j = 0,
  index = 0;
class Card {
  constructor(_title, _desc, _github, _screenshot) {
    this.title = _title;
    this.desc = _desc;
    this.github = _github;
    this.screenshot = _screenshot;
  }
}

let projects = [
  new Card(
    "KunGadi Web App",
    "A real time public transportation assistance android application that lets users search public bus travel path using the Google Maps Roads API. Made with ♥ in Android Studios(Java).",
    "https://github.com/PG-Momik/Kun-Gadi-DesktopApp",
    "./images/thumbnails/thumbnail1.png "
  ),
  new Card(
    "KunGadi Mobile App",
    "A web application for Admin side controls for Kun Gadi App. Acts primarily as a admin dashboard to access and manipulate data through a custom API. Made with ♥ in PHP",
    "https://github.com/PG-Momik/Kun-Gadi-MobileApp",
    "./images/thumbnails/thumbnail2.jpg "
  ),
  new Card(
    "News Scraping and...",
    "A web scraping scrpit written in vanilla JS to scrape news articles and store them into a database. The scraped data can then be accessed from a web application. Made with ♥ in JS.",
    "https://github.com/PG-Momik/WebScraping-Archiving",
    "./images/thumbnails/thumbnail3.png"
  ),
  new Card(
    "noCommerce",
    "A small eCommerce Website that sells plain Black or White T-Shirts on different price plans and packages. Made with ♥ in PHP.",
    "https://github.com/PG-Momik/noCommerce-The-eCommerce",
    "./images/thumbnails/thumbnail4.png"
  ),
  new Card(
    "MovieTicketing",
    "Simple UI for a Movie Booking Website. Made with ♥ with HTML, CSS, JS. ",
    "https://github.com/PG-Momik/MovieTicketingUI",
    "./images/thumbnails/thumbnail5.png"
  ),
  new Card(
    "Horoscope Readings",
    "A simple C program that tells users random readings of the day based on their birthday. Made with ♥ with C.",
    "https://github.com/PG-Momik/HoroscopeReadings",
    "./images/thumbnails/thumbnail6.jpeg"
  ),
  new Card(
    "GreenerGit",
    "A simple bash script to make commits in the past. Made with ♥ in Bash.",
    "https://github.com/PG-Momik/Greener-Git",
    "./images/thumbnails/thumbnail7.jpg"
  ),
];

button_main.addEventListener("click", () => {
  if (click_count % 2 == 0) {
    button_main.textContent = "Mask Off";
    img.setAttribute("src", "./images/headshot2.png");
    click_count++;
  } else {
    button_main.textContent = "Mask On";
    img.setAttribute("src", "./images/headshot1.png");
    click_count++;
  }
});

for (i = 0; i < Math.ceil(projects.length / 3); i++) {
  var row = document.createElement("div");
  row.classList.add("row", "text-center", "cardish-row");
  for (j = 0; j < 3; j++) {
    if (index < projects.length) {
      let card = document.createElement("div");
      let head = document.createElement("h2");
      let para = document.createElement("p");
      let bgroup = document.createElement("div");
      let codebase = document.createElement("a");
      let readmore = document.createElement("a");

      card.classList.add("col-lg-3", "cardish");
      head.classList.add("project-head");
      para.classList.add("project-desc");
      bgroup.classList.add("btn-group");
      codebase.classList.add("btn", "btn-md", "btn-info");
      readmore.classList.add("btn", "btn-md", "btn-outline-light", "readme");

      head.textContent = projects[index].title;
      para.textContent = "";
      codebase.textContent = "Codebase";
      codebase.setAttribute("href", projects[index].github);
      readmore.textContent = "Read ";

      bgroup.appendChild(codebase);
      bgroup.appendChild(readmore);
      card.appendChild(head);
      card.appendChild(para);
      card.appendChild(bgroup);
      para.style.backgroundImage = `url(${projects[index].screenshot})`;
      para.style.backgroundSize = "cover";
      index++;
      row.appendChild(card);
    }
  }
  document.getElementById("projects").appendChild(row);
}

let readmeBtn = document.getElementsByClassName("readme");
for (let i = 0; i < readmeBtn.length; i++) {
  readmeBtn[i].addEventListener("click", function () {
    let para = document.getElementsByClassName("project-desc")[i];
    para.style.background = "#272727";
    para.textContent = projects[i].desc;
    readmeBtn[i].classList.remove("btn-outline-light");
    readmeBtn[i].classList.add("btn-light");
  });
}

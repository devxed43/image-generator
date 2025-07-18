const result = document.querySelector(".result");
const h1 = document.querySelector("h1");
const header = document.querySelector("header");
const auth = document.querySelector(".login-component");
const signInBtn = document.querySelector(".sign-in");
const form = document.querySelector("form");
const userSpan = document.querySelector(".users-name");

const db = [
  { username: "ed", password: "123" },
  { username: "teb", password: "321" },
];

let isSignedIn = false; // default to false

function isUserValid(username, password) {
  for (let i = 0; i < db.length; i++) {
    if (db[i].username === username && db[i].password === password) {
      return true;
    }
  }
  return false;
}

function signIn() {
  const username = form.elements["username"].value.trim();
  const password = form.elements["password"].value.trim();

  if (isUserValid(username, password)) {
    isSignedIn = true;

    auth.classList.add("hide-component");
    header.classList.remove("hide-component");
    result.classList.remove("hide-component");

    h1.textContent = `Welcome ${username}!`;
    userSpan.textContent = username;

    fetchData(); // only fetch after successful sign-in
  } else {
    isSignedIn = false;
    alert("Invalid username or password");
  }
}

const apiUrl = "https://api.waifu.pics/sfw/waifu";

function displayData(data) {
  result.textContent = "";
  const img = document.createElement("img");
  img.src = data.url;
  img.alt = "waifu";
  img.title = "waifu";

  result.appendChild(img);
}

async function fetchData() {
  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    displayData(data);
  } catch (error) {
    console.log("error getting resources", error);
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  signIn();
});

signInBtn.addEventListener("click", function (e) {
  e.preventDefault(); // in case it's a button in a form
  signIn();
});

window.addEventListener("load", () => {
  // On initial load, show only login if not signed in
  if (!isSignedIn) {
    result.classList.add("hide-component");
    header.classList.add("hide-component");
    auth.classList.remove("hide-component");
  }
});
result.addEventListener("click", fetchData);

// HTML Selectors, elems
const result = document.querySelector(".result");

const waifuBtn = document.querySelector(".loadWaifu");
const nekoBtn = document.querySelector(".loadNeko");
const blowJobBtn = document.querySelector(".loadBlowjob");
const trapBtn = document.querySelector(".loadTrap");

const placeholderImg = document.querySelector(".placeholderImg");

// api url - feed to fetch functions
const waifuUrl = "https://api.waifu.pics/nsfw/waifu";
const nekoUrl = "https://api.waifu.pics/nsfw/neko";
const blowUrl = "https://api.waifu.pics/nsfw/blowjob";
const trapUrl = "https://api.waifu.pics/nsfw/trap";

// display functions - ingest api, display content structure
function displayWaifu(data) {
  result.innerHTML = "";

  const img = document.createElement("img");
  img.src = data.url;
  img.alt = "waifu";
  img.style.width = "100%";
  img.style.height = "100%";
  img.setAttribute("class", "apiImg");
  result.appendChild(img);
}

function displayNeko(data) {
  result.innerHTML = "";

  const img = document.createElement("img");
  img.src = data.url;
  img.alt = "neko";
  img.style.width = "100%";
  img.style.height = "100%";
  img.setAttribute("class", "apiImg");
  result.appendChild(img);
}

function displayBlowjob(data) {
  result.innerHTML = "";

  const img = document.createElement("img");
  img.src = data.url;
  img.alt = "blowjob";
  img.style.width = "100%";
  img.style.height = "100%";
  img.setAttribute("class", "apiImg");
  result.appendChild(img);
}

function displayTrap(data) {
  result.innerHTML = "";

  const img = document.createElement("img");
  img.src = data.url;
  img.alt = "trap";
  img.style.width = "100%";
  img.style.height = "100%";
  img.setAttribute("class", "apiImg");
  result.appendChild(img);
}

// fetch functions - retrieve api data, feed to display functions
async function fetchWaifu() {
  try {
    const res = await fetch(waifuUrl);
    const data = await res.json();
    displayWaifu(data);
  } catch (error) {
    console.log(error, "trouble loading resource");
  }
}
async function fetchNeko() {
  try {
    const res = await fetch(nekoUrl);
    const data = await res.json();
    displayNeko(data);
  } catch (error) {
    console.log(error, "trouble loading neko");
  }
}
async function fetchBlowjob() {
  try {
    const res = await fetch(blowUrl);
    const data = await res.json();
    displayBlowjob(data);
  } catch (error) {
    console.log(error, "trouble loading blowjob");
  }
}
async function fetchTrap() {
  try {
    const res = await fetch(trapUrl);
    const data = await res.json();
    displayTrap(data);
  } catch (error) {
    console.log(error, "trouble loading trap");
  }
}

window.addEventListener("load", () => {
  placeholderImg.classList.toggle("show");
  placeholderImg.style.width = "200px"
  placeholderImg.style.height = "200px"
});

// event listeners - btns, on loads, etc
waifuBtn.addEventListener("click", fetchWaifu);
nekoBtn.addEventListener("click", fetchNeko);
blowJobBtn.addEventListener("click", fetchBlowjob);
trapBtn.addEventListener("click", fetchTrap);

document.body.insertAdjacentHTML(
    "afterbegin",
    `
          <label class="color-scheme">
              Theme:
              <select id='theme'>
                <option value="light dark">Automatic</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
          </label>`
  );
  
  let select = document.querySelector("#theme");
  select.addEventListener("input", function (event) {
    document.documentElement.style.setProperty("color-scheme", event.target.value);
    localStorage.colorScheme = event.target.value;
  });

if ("colorScheme" in localStorage) {
  document.documentElement.style.setProperty("color-scheme", localStorage.colorScheme);
  select.value = localStorage.colorScheme;
}

function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}``

let pages = [
  { url: "", title: "Home" },
  { url: "projects/", title: "Projects" },
  { url: "resume/", title: "Resume" },
  { url: "contact/", title: "Contact" },
  { url: "https://github.com/athervvidhate", title: "Github" },
  { url: "https://www.linkedin.com/in/athervvidhate/", title: "LinkedIn" },
];

const ARE_WE_HOME = document.documentElement.classList.contains("home");
const IS_LOCAL =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";
const BASE_PATH = IS_LOCAL ? "" : "/portfolio";

let nav = document.createElement("nav");
document.body.prepend(nav);

for (let p of pages) {
  let url = p.url;

  url = !ARE_WE_HOME && !url.startsWith("http") ? `${BASE_PATH}/${url}` : url;

  let title = p.title;
  let a = document.createElement("a");
  a.href = url;
  a.textContent = title;
  nav.append(a);

  a.classList.toggle(
    "curr",
    a.host === location.host && a.pathname === location.pathname
  );

  if (a.host !== location.host) {
    a.target = "_blank";
  }
}

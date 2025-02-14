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
  document.documentElement.style.setProperty(
    "color-scheme",
    event.target.value
  );
  localStorage.colorScheme = event.target.value;
});

if ("colorScheme" in localStorage) {
  document.documentElement.style.setProperty(
    "color-scheme",
    localStorage.colorScheme
  );
  select.value = localStorage.colorScheme;
}

function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}
``;

let pages = [
  { url: "", title: "Home" },
  { url: "projects/", title: "Projects" },
  { url: "resume/", title: "Resume" },
  { url: "contact/", title: "Contact" },
  { url: "meta/", title: "Meta" },
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

export async function fetchJSON(url) {
  try {
    // Fetch the JSON file from the given URL
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch projects: ${response.statusText}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error fetching or parsing JSON data:", error);
  }
}

export function renderProjects(project, containerElement, headingLevel = 'h2') {
  const article = document.createElement('article');

  article.innerHTML = `
  <h3>${project.title}</h3>
  <img src="${project.image}" alt="${project.title}">
  <p>${project.description}</p>
  <b>C. ${project.year}</b>
  `;
  containerElement.appendChild(article);
}

export async function fetchGithubData(username) {
  return fetchJSON(`https://api.github.com/users/${username}`);

}


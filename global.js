function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

let pages = [
  { url: "", title: "Home" },
  { url: "projects/", title: "Projects" },
  { url: "resume/", title: "Resume" },
  { url: "contact/", title: "Contact" },
  { url: "https://github.com/athervvidhate", title: "Github" },
  { url: "https://www.linkedin.com/in/athervvidhate/", title: "LinkedIn" },
];

const ARE_WE_HOME = document.documentElement.classList.contains("home");

let nav = document.createElement("nav");
document.body.prepend(nav);

for (let p of pages) {
  let url = p.url;

  url = !ARE_WE_HOME && !url.startsWith("http") ? "../" + url : url;

  let title = p.title;
  let a = document.createElement("a");
  a.href = url;
  a.textContent = title;
  nav.append(a);

  a.classList.toggle(
    'curr',
    a.host === location.host && ("/portfolio" + a.pathname) === location.pathname
  );

  if (a.host !== location.host) {
    a.target = "_blank"
  }

  
}

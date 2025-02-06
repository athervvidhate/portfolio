import {fetchJSON, renderProjects } from '../global.js';
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7.9.0/+esm";


const projects = await fetchJSON('../lib/projects.json');
const projectsContainer = document.querySelector('.projects');

projects.forEach(project => {
    renderProjects(project, projectsContainer, 'h2');
  });

let project_title = document.querySelector('.project-title'); 
project_title.innerHTML = `${projects.length} Projects`
renderPieChart(projects);

// pie chart
function renderPieChart(projectsGiven) {
  // Clear existing chart and legend
  d3.select('svg').selectAll('path').remove();
  d3.select('.legend').selectAll('*').remove();

  let arcGenerator = d3.arc().innerRadius(0).outerRadius(50);

  let rolledData = d3.rollups(
    projectsGiven,
    (v) => v.length,
    (d) => d.year,
  );

  let data = rolledData.map(([year, count]) => {
    return { value: count, label: year };
  });


  let sliceGenerator = d3.pie().value((d) => d.value);
  let arcData = sliceGenerator(data);
  let arcs = arcData.map((d) => arcGenerator(d));
  let colors = d3.scaleOrdinal(d3.schemeTableau10);

  arcs.forEach((arc, index) => {
    d3.select('svg').append('path').attr('d', arc).attr('fill', colors(index));
  });

  let legend = d3.select('.legend');
  data.forEach((d, idx) => {
      legend.append('li')
            .attr('class', 'legend-item')
            .attr('style', `--color:${colors(idx)}`) // set the style attribute while passing in parameters
            .html(`<span class="swatch"></span> ${d.label} <em>(${d.value})</em>`); // set the inner html of <li>

  // pie chart wedge highlighting
let selectedIndex = -1;
let svg = d3.select('svg');
  svg.selectAll('path').remove();
  arcs.forEach((arc, i) => {
    svg
      .append('path')
      .attr('d', arc)
      .attr('fill', colors(i))
      .on('click', () => {
        selectedIndex = selectedIndex === i ? -1 : i;
        
        svg
          .selectAll('path')
          .attr('class', (_, idx) => (
            idx === selectedIndex ? 'selected' : ''
          ));

        legend
        .selectAll('li')
        .attr('class', (_, idx) => (
          idx === selectedIndex ? 'selected legend-item' : 'legend-item'
        ));

        if (selectedIndex === -1) {
          projectsContainer.innerHTML = '';
          projects.forEach(project => {
            renderProjects(project, projectsContainer, 'h2');
          });
          project_title.innerHTML = `${projects.length} Projects`;
        } else {
          const selectedYear = data[selectedIndex].label;
          const filteredProjects = projects.filter(project => project.year === selectedYear);
          
          projectsContainer.innerHTML = '';
          filteredProjects.forEach(project => {
            renderProjects(project, projectsContainer, 'h2');
          });
          project_title.innerHTML = `${filteredProjects.length} ${filteredProjects.length === 1 ? 'Project' : 'Projects'} from ${selectedYear}`;
        }
      
      }); 
  });
  });
}


// search bar
let query = '';
let searchInput = document.querySelector('.searchBar');
searchInput.addEventListener('input', (event) => {
  query = event.target.value;

  // Clear container first
  projectsContainer.innerHTML = '';
  
  let filteredProjects = projects.filter(project => {
    let values = Object.values(project).join(' ').toLowerCase();
    return values.includes(query.toLowerCase());
  });

  // re-render legends and pie chart when event triggers
  filteredProjects.forEach(project => {
    renderProjects(project, projectsContainer, 'h2');
  });

  renderPieChart(filteredProjects);

  // Update project count
  if (project_title) {
    project_title.innerHTML = filteredProjects.length > 1 ? `${filteredProjects.length} Projects`: `${filteredProjects.length} Project`;
  }
});


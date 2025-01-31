import {fetchJSON, renderProjects } from '../global.js';

const projects = await fetchJSON('../lib/projects.json');
const projectsContainer = document.querySelector('.projects');

projects.forEach(project => {
    renderProjects(project, projectsContainer, 'h2');
  });

let project_title = document.querySelector('.project-title'); 
project_title.innerHTML = `${projects.length} Projects`

// (async function loadProjects() {
//   try {
    
    
//     // if (!projects) {
//     //   throw new Error('No projects data received');
//     // }

//     // if (!projectsContainer) {
//     //   throw new Error('Projects container not found');
//     // }

//     projectsContainer.innerHTML = '<p>Loading projects...</p>';

//     projects.forEach(project => {
//       renderProjects(project, projectsContainer, 'h2');
//     });

//   } catch (error) {
//     console.error('Error loading projects:', error);
//     if (projectsContainer) {
//       projectsContainer.innerHTML = '<p>Failed to load projects. Please try again later.</p>';
//     }
//   }
// })();
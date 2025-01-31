import { fetchJSON, renderProjects, fetchGithubData } from './global.js';

const projects = await fetchJSON('./lib/projects.json');
const latestProjects = projects.slice(0, 3);

const projectsContainer = document.querySelector('.projects');
const githubData = await fetchGithubData('athervvidhate');
const profileStats = document.querySelector('#profile-stats');

latestProjects.forEach(project => {
    renderProjects(project, projectsContainer, 'h2');
  });

if (profileStats) {
    profileStats.innerHTML = `
          <h2 style="margin-top: 1rem;">My Github Stats</h2>
          <dl class="stats-grid">
            <div class="stat-item">
              <dt>Followers</dt>
              <dd>${githubData.followers}</dd>
            </div>
            <div class="stat-item">
              <dt>Following</dt>
              <dd>${githubData.following}</dd>
            </div>
            <div class="stat-item">
              <dt>Public Repos</dt>
              <dd>${githubData.public_repos}</dd>
            </div>
            <div class="stat-item">
              <dt>Public Gists</dt>
              <dd>${githubData.public_gists}</dd>
            </div>
          </dl>
      `;
  }
  
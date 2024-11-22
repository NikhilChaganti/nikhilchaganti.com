// Fetch JSON data and display it
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    displayProjects(data.projects);
  })
  .catch(error => console.error('Error loading JSON:', error));

// Function to display projects in HTML
function displayProjects(projects) {
  const container = document.querySelector('#projects'); // Assuming a div with id="projects"
  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}">Learn More</a>
    `;
    container.appendChild(projectCard);
  });
}

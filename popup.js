document.addEventListener('DOMContentLoaded', () => {
  const projectsData = [
    {
      imageSrc: 'image/bg/Snapshoot Portfolio-1.png',
      projectTitle: 'Tonic',
      projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      stack: 'CANOPY',
      role: 'Back End Dev',
      year: '2015',
      technologies: ['html', 'CSS', 'JavaScript'],
    },
    {
      imageSrc: 'image/bg/Snapshoot Portfolio-2.png',
      projectTitle: 'Multi-Post Stories',
      projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      stack: 'CANOPY',
      role: 'Back End Dev',
      year: '2015',
      technologies: ['html', 'CSS', 'JavaScript'],
    },
    {
      imageSrc: 'image/bg/Snapshoot Portfolio-3.png',
      projectTitle: 'Tonic',
      projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      stack: 'CANOPY',
      role: 'Back End Dev',
      year: '2015',
      technologies: ['html', 'CSS', 'JavaScript'],
    },
    {
      imageSrc: 'image/bg/Snapshoot Portfolio-4.png',
      projectTitle: 'Multi-Post Stories',
      projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      stack: 'CANOPY',
      role: 'Back End Dev',
      year: '2015',
      technologies: ['html', 'CSS', 'JavaScript'],
    },
  ];

  function renderProjectCard(project) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('projects');

    const image = document.createElement('img');
    image.src = project.imageSrc;
    image.alt = project.projectTitle;
    image.classList.add('project-image');
    cardDiv.appendChild(image);

    const detailsDiv = document.createElement('div');
    detailsDiv.innerHTML = `
      <div class="project-details">
        <h2 class="project-title">${project.projectTitle}</h2>
        <div class="stack-year">
          <h3 class="title">${project.stack}</h3>
          <img src="image/icons/Counter.png" alt="counter">
          <h4 class="lang-year">${project.role}</h4>
          <img src="image/icons/Counter.png" alt="counter">
          <h4 class="lang-year">${project.year}</h4>
        </div>
      </div>
      <p class="detail-text">${project.projectDescription}</p>
      <ul class="btns">
        ${project.technologies.map((tech) => `<li class="btn">${tech}</li>`).join('')}
      </ul>
      <button class="data">See project</button>
    `;

    cardDiv.appendChild(detailsDiv);

    const cardsContainer = document.getElementById('cards');
    cardsContainer.appendChild(cardDiv);
  }

  // Loop through projectsData and render each project card
  projectsData.forEach(renderProjectCard);

  const popupObject = {
    container: document.getElementById('popupContainer'),
    showPopup(index) {
      const project = projectsData[index];

      this.container.innerHTML = `
        <div class="popupContent">
          <section class="project">
            <div id="popup">
              <div class="project-details">
                <button id="closePopupButton">X</button>
                <h2 id="popup-title">${project.projectTitle}</h2>
                <div class="stack-year">
                  <h3 class="title">${project.stack}</h3>
                  <img src="image/icons/Counter.png" alt="counter">
                  <h4 class="lang-year">${project.role}</h4>
                  <img src="image/icons/Counter.png" alt="counter">
                  <h4 class="lang-year">${project.year}</h4>
                </div>
              </div>
              <img src="${project.imageSrc}" alt="${project.projectTitle}" class="popup-img">
              <div id="last">
                <p class="detailed-text">${project.projectDescription}</p>
                <div id="lest">
                <ul class="bts">
                  ${project.technologies.map((tech) => `<li class="btn">${tech}</li>`).join('')}
                </ul>
                <div id="dota">
                <button class="btn-about">see live <span><img id=ico src="image/bg/Icon - Export.svg" alt="Icon-Export"></span></button>
                <button class="btn-about">see source <span><img src="image/arrows/Vector.jpg" alt="Vector"></span></button>
                </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      `;

      this.container.classList.add('show');

      const closePopupButton = this.container.querySelector('#closePopupButton');
      closePopupButton.addEventListener('click', this.closePopup.bind(this));
    },
    closePopup() {
      this.container.innerHTML = '';
      this.container.classList.remove('show');
    },
  };

  const projectCards = document.querySelectorAll('.projects');
  projectCards.forEach((projectCard, index) => {
    projectCard.querySelector('.data').addEventListener('click', () => {
      popupObject.showPopup(index);
    });
  });
});

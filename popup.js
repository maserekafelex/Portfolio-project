const popupObject = {
  container: document.getElementById('popupContainer'),
  content: `
      <div class="popupContent">
          <section class="project">
              <div id="popup">
                  <div class="project-details">
                      <button id="closePopupButton">X</button>
                      <h2 id="popup-tile">Tonic</h2>
                      <div class="stack-ya">
                          <h3 class="title">CANOPY</h3>
                          <img src="image/icons/Counter.png" alt="counter">
                          <h4 class="lang-ya">Back End Dev</h4>
                          <img src="image/icons/Counter.png" alt="counter">
                          <h4 class="lang-ya">2015</h4>
                      </div>
                  </div>
                  <img src="image/bg/Snapshoot Portfolio-1.png" alt="Snapshoot Portfolio-1.png" class="popup-img">
                  <div id="last">
                      <p class="detailed-text">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
                      <div>
                          <ul class="bts">
                              <li class="bt">HTML</li>
                              <li class="bt">CSS</li>
                              <li class="bt">JavaScript</li>
                              <li class="both">Ruby</li>
                              <li class="both">Bootstrap</li>
                          </ul>
                          <div id="dota">
                              <button class="data">See live<img src="image/bg/Icon - Export.svg" alt="Icon - Export" class="botom"></button>
                              <button class="data">See source <img src="image/arrows/Vector.jpg" alt="vector" class="boton"></button>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>
    `,
  showPopup() {
    this.container.innerHTML = this.content;
    this.container.classList.add('show');

    const closePopupButton = this.container.querySelector('#closePopupButton');
    closePopupButton.addEventListener('click', this.closePopup.bind(this));
  },
  closePopup() {
    this.container.innerHTML = '';
    this.container.classList.remove('show');
  },
};

const openPopupButton = document.getElementById('openPopupButton');
openPopupButton.addEventListener('click', () => {
  popupObject.showPopup();
});

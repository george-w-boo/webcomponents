class InfoBox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .hide {
          display: none;
        }

        .hide.show {
          display: block;
        }
      </style>
      <button>Show</button>
      <p id="info-box" class="hide">
        <slot>More info</slot>
      </p>
    `;
  }

  connectedCallback() {
    const infoBoxBtn = this.shadowRoot.querySelector('button');
    const peshka = this.shadowRoot.getElementById('info-box');

    if (this.hasAttribute('is-visible')) {
      peshka.classList.add('show');
    }

    infoBoxBtn.addEventListener('click', event => {
      peshka.classList.toggle('show');
      console.log(peshka.classList);
    })
  }
}

customElements.define('info-box', InfoBox);

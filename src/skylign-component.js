import hmmLogo from './skylign.js';
import css from './logo.css';

class Skylign extends HTMLElement {
  static get observedAttributes() { return ['logo']; }

  constructor(...args) {
    super();
    this.attachShadow({mode: 'open'});
    //attach css styles to shadowroot
    let style = document.createElement('style');
    style.textContent = css;
    this.shadowRoot.appendChild(style);
  }

  showLogo() {
    this.logoElement = document.createElement('div');
    const element = document.createElement('div');

    this.shadowRoot.appendChild(element);

    const logo = this.getAttribute("logo");
    if (logo) {
      this.logo = new hmmLogo(element, {
        data: JSON.parse(logo),
        height_toggle: true,
        column_info: true,
      });
    }
  }

  connectedCallback() {
    this.showLogo();
  }

  disconnectedCallback() {
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("attribute changed");
    if (name === "logo" && oldValue !== newValue) {
      this.logElement.remove();
      this.showLogo();
    }
  }
}

export default Skylign;

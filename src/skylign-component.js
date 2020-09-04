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

    this.shadowRoot.appendChild(this.logoElement);

    const logo = this.getAttribute("logo");
    if (logo) {
      this.logo = new hmmLogo(this.logoElement, {
        data: JSON.parse(logo),
        height_toggle: true,
        column_info: true,
      });
    }
  }

  connectedCallback() {}

  disconnectedCallback() {}

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`attributeChangedCallback: '${name}'`);
    if (name === "logo" && oldValue !== newValue) {
      this.logoElement?.remove();
      this.showLogo();
    }
  }
}

export default Skylign;

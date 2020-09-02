import hmmLogo from './skylign.js';
import css from './logo.css';

class Skylign extends HTMLElement {
  constructor(...args) {
    super();
    this.attachShadow({mode: 'open'});
    //attach css styles to shadowroot
    let style = document.createElement('style');
    style.textContent = css;
    this.shadowRoot.appendChild(style);
  }

  connectedCallback() {
    this.logoElement = document.createElement('div');
    const element = document.createElement('div');

    this.shadowRoot.appendChild(element);

    this.logo = new hmmLogo(element, {
      data: this.data,
      height_toggle: true,
      column_info: true,
    });

  }

  disconnectedCallback() {
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("attribute changed");
  }
}

export default Skylign;

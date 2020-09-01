import hmmLogo from './skylign.js';

class Skylign extends HTMLElement {
  constructor(...args) {
    super();
    console.log(`constructor`);
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    console.log(`added`);

    this.logoElement = document.createElement('div');
    const element = document.createElement('div');

    this.shadowRoot.append(element);
    this.logo = new hmmLogo(element, {
      data: this.data,
      height_toggle: true,
      column_info: true,
    });
    console.log("created logo");

  }

  disconnectedCallback() {
    console.log("removed");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("attribute changed");
  }
}

export default Skylign;

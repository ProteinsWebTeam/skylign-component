import hmmLogo from './skylign.js';

class Skylign extends HTMLElement {
  constructor(...args) {
    super();
    console.log(`constructor`);
    this.attachShadow({mode: 'open'});

    this.logoElement = document.createElement('span');
    this.shadowRoot.append(this.logoElement);
  }

  connectedCallback() {
    console.log(`added`);
    // this.logo = new hmmLogo(this.logoElement, {
    //   column_info: true,
    //   data: this.data,
    //   height_toggle: true
    // });
    // console.log("created logo");

  }

  disconnectedCallback() {
    console.log("removed");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("attribute changed");
  }
}

export default Skylign;

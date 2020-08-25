//import hmmLogo from './skylign.js';

class Skylign extends HTMLElement {
  constructor(...args) {
    super(...args);
    console.log(`constructor`);
    this.attachShadow({mode: 'open'});
    const data = this.getAttribute('logo');
    const test = document.createElement('span');
    const text = document.createElement('p');
    text.innerHTML = data;
    test.appendChild(text);
    this.shadowRoot.append(test);
  }

  connectedCallback() {
    console.log(`added ${self.isConnected}`);
  }

  disconnectedCallback() {
    console.log("removed");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("attribute changed");
  }


}

export default Skylign;

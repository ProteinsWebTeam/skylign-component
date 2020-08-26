import hmmLogo from './skylign-test.js';

class Skylign extends HTMLElement {
  constructor(...args) {
    super();
    console.log(`constructor`);
    this.attachShadow({mode: 'open'});

    const temp = new hmmLogo();
    const test = document.createElement('span');
    const text = document.createElement('p');
    text.innerHTML = "Test";
    test.appendChild(text);
    this.shadowRoot.append(test);
  }

  connectedCallback() {
    console.log(`added`);
  }

  disconnectedCallback() {
    console.log("removed");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("attribute changed");
  }
}

export default Skylign;

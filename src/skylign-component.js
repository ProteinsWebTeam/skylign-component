class Skylign extends HTMLElement {
  constructor(...args) {
    super(...args);
    this.attachShadow({mode: 'open'});
    //test
    const test = document.createElement('span');
    test.innerHTML = "Testing span";
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

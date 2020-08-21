class Skylign extends HTMLElement {
  constructor(...args) {
    const self = super(...args);
    const shadow = this.attachShadow({mode: 'open'});

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

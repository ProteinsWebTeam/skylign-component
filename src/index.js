import Skylign from "./skylign-component.js";

//customElements.define("skylign-component", Skylign);
const loadComponent = () => {
  customElements.define("skylign-component", Skylign);
};

// Conditional loading of polyfill
if (window.customElements) {
  loadComponent();
} else {
  document.addEventListener("WebComponentsReady", () => {
    loadComponent();
  });
}

//BEGIN TODO: remove this development code
import Data from './_tests_/PF00001_logo.json';
const skylign = document.createElement('skylign-component');
skylign.setAttribute('logo', JSON.stringify(Data));
document.body.appendChild(skylign);
//END TODO

export default Skylign;

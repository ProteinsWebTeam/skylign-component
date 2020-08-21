import Skylign from "./skylign-component.js";

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

export default Skylign;

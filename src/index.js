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
async function changeLogo(element, attribute) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(attribute);
    }, 10000);
  });
  const data = await promise;
  element.setAttribute("logo", data);
};

import PF00001 from './_tests_/PF00001_logo.json';
//import PF00002 from './_tests_/PF00002_logo.json';
const skylign = document.createElement('skylign-component');
skylign.setAttribute('logo', JSON.stringify(PF00001));
document.body.appendChild(skylign);
//const data = changeLogo(skylign, JSON.stringify(PF00002));

//END TODO
export default Skylign;

import Skylign from "../index.js";
import pf1 from './PF00001_logo.json';
import pf2 from './PF00002_logo.json';

test("Instantiate skylign", () => {
  const skylign = new Skylign();
  expect(skylign).toBeInstanceOf(Skylign);
});

// test("Set logo attribute", () => {
//   const skylign = document.createElement('skylign-component');
//
// });

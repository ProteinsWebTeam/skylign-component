import Skylign from "../index.js";
//import data from './PF00001_logo.json';

test("Instantiate skylign", () => {
  const skylign = new Skylign();
  expect(skylign).toBeInstanceOf(Skylign);
  const data = require('./PF00001_logo.json');
  console.log(`DATA: ${data}`);
});

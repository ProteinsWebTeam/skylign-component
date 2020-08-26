fetch('./src/_tests_/PF00001_logo.json')
  .then(response => response.json())
  .then((data) => {
    const skylign = document.createElement('skylign-component');
    skylign.data = data;
    const div = document.getElementById('skylign');
    div.append(skylign);
});

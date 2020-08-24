fetch('./PF00001_logo.json')
  .then(response => response.json())
  .then((data) => {
    const skylign = document.createElement('skylign-component', {logo: data});
    const div = document.getElementById('skylign');
    div.append(skylign);
  });

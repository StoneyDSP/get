fetch("https://stoneydsp.com/ubento.html")
  .then((response) => response.text())
  .then((json) => console.log(json));

fetch("https://stoneydsp.com/*")
  .then((response) => response.text())
  .then((json) => console.log(json));

fetch("https://stoneydsp.com/wp-login.php")
  .then((response) => response.text())
  .then((json) => console.log(json));

let button = document.getElementById("b1");
button.addEventListener("click", myfunction = () => {
  let url = "https://v2.jokeapi.dev/joke/Any?type=single";
  h2 = document.getElementById("filled");
  let promise = fetch(url);
  promise.then((val) => {
    return val.json();
  }).then((val1) => {
    h2.innerText=val1.joke;
  });
});
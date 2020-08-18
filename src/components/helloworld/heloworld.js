import "./hello-world-button.scss";

class Helloworld {
  buttonCssClass = "hello-world-text";
  render() {
    const button = document.createElement("button");
    button.innerHTML = "hello world";
    button.classList.add("hello-world-button");
    button.onclick = function () {
      const p = document.createElement("p");
      p.innerHTML = "Hello world";
      p.classList.add(this.buttonCssClass);
      body.appendChild(p);
    };
    const body = document.querySelector("body");
    body.appendChild(button);
  }
}
export default Helloworld;

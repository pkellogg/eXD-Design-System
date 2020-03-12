class MyWebComponent extends HTMLElement {
  
  constructor() {
    super();
    this.attachShadow({
      mode: "open"
    });
  }
}
window.customElements.define("my-web-component", MyWebComponent);
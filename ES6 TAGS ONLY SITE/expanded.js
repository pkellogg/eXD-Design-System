class MyWebComponent extends HTMLElement {
  
  constructor() {
    super();
    body.attachShadow({
      mode: "open"
    });
  }
  
  connectedCallback() {
    var div = document.createElement('div');
    div.textContent = "Inside Shadow DOM";
    div.className = "x";
    this.shadowRoot.appendChild(div);
  }
}
window.customElements.define("my-web-component", MyWebComponent);
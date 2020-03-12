//citation: https://itnext.io/building-a-practical-web-component-9e84f5e4d63a
//https://itnext.io/@andreas.remdt
//https://itnext.io/handling-data-with-web-components-9e7e4a452e6e

(function() {
   

  /* Constants */
  const TRIGGER_KEYS = ["Enter", "Tab", ","];

  /* Template */
  var template = document.createElement("template");
  template.innerHTML = `
    <style>
      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }
 
      input {
        width: 100%;
        height: 45px;
        padding: 0 1rem;
        margin-top: 1rem;
        box-sizing: border-box;
         
        border-radius: 0.2rem;
        border: 2px solid #d4d5d6;
        color: #565656;
        -webkit-appearance: none;
      }

      input:focus {
        border-color: cornflowerblue;
        outline: none;
      }

      input.has-error {
        border-color: tomato;
      }

      p {
        margin: 0;
        font-size: 90%;
        color: tomato;
      }

      li {
        background-color: #d4d5d6;
        display: inline-block;
        font-size: 14px;
        border-radius: 30px;
        height: 30px;
        padding: 0 4px 0 1rem;
        display: inline-flex;
        align-items: center;
        margin: 0 0.3rem 0.3rem 0;
		position:absolute;
		left:0px;
		top:20px;
      }

      li > button {
        background-color: white;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        font: inherit;
        margin-left: 10px;
        font-weight: bold;
        padding: 0;
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: center;
		position:absolute;
		left:150px;
		top:20px;
      }
    </style>
    
    <ul></ul>
    <input style="position:relative;" class = "pat" type="text" placeholder="Type or paste email addresses and press 'Enter'...">
    <p hidden></p>
  `;

  /* Component */
  //order is important with attributes..keep the order consistent throughout
  class BadgeInput extends HTMLElement {
	  static get observedAttributes() {return ['width', 'height', 'c', 'layer', 'trans', 'left', 'top', 'orientation', 'textcolor', 'size' ];}
    constructor() {
      super();

      this._items = [];

      this._shadow = this.attachShadow({ mode: "open" });
      this._shadow.appendChild(template.content.cloneNode(true));
	  let style = document.createElement('style'); 
	  this._shadow.appendChild(style);

      this._input = this._shadow.querySelector("input");
      this._error = this._shadow.querySelector("p");
      this._list = this._shadow.querySelector("ul");
    }

	 
	attributeChangedCallback(name, oldValue, newValue) {
		updateStyleDrop(this);
	}
	
	connectedCallback() {
      this._input.addEventListener("keydown", this.handleKeyDown);
      this._input.addEventListener("paste", this.handlePaste);
      this._list.addEventListener("click", this.handleDelete);
	  updateStyleDrop(this);
    }

    disconnectedCallback() {
      this._input.removeEventListener("keydown", this.handleKeyDown);
      this._input.removeEventListener("paste", this.handlePaste);
      this._list.removeEventListener("click", this.handleDelete);
    }

    handleKeyDown = evt => {
      this._error.setAttribute("hidden", true);
      this._input.classList.remove("has-error");

      if (TRIGGER_KEYS.includes(evt.key)) {
        evt.preventDefault();

        var value = evt.target.value.trim();

        if (value && this.validate(value)) {
          evt.target.value = "";

          this._items.push(value);
          this.update();
        }
      }
    };

    handlePaste = evt => {
      evt.preventDefault();

      var paste = evt.clipboardData.getData("text");
      var emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);

      if (emails) {
        var toBeAdded = emails.filter(email => !this.isInList(email));

        this._items = [...this._items, ...toBeAdded];
        this.update();
      }
    };

    handleDelete = evt => {
      if (evt.target.tagName === "BUTTON") {
        this._items = this._items.filter(i => i !== evt.target.dataset.value);

        this.update();
      }
    };

    update() {
		
      this._list.innerHTML = this._items
	   
        .map(function(item) {
          return `
          <li>
            ${item}
            <button type="button" data-value="${item}">&times;</button>
          </li>
        `;
        })
        .join("");
    }

    validate(email) {
      var error = null;

      if (this.isInList(email)) {
        error = `${email} has already been added.`;
      }

      if (!this.isEmail(email)) {
        error = `${email} is not a valid email address.`;
      }

      if (error) {
        this._error.textContent = error;
        this._error.removeAttribute("hidden");
        this._input.classList.add("has-error");

        return false;
      }

      return true;
    }

    isInList(email) {
      return this._items.includes(email);
    }

    isEmail(email) {
      return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
    }
} //extends
	
	function updateStyleDrop(elem) {  

	let shadow = elem.shadowRoot;
	let childNodes = shadow.childNodes;
  
	loop1: 
	for(var i = 0; i < childNodes.length; i++) {
    if(childNodes[i].nodeName === 'STYLE') {   //building the inline element style
      childNodes[i].textContent =  

	  '.pat   {' +
						  ' width: ' + elem.getAttribute('width') + 'px;' +     
                          ' height: ' + elem.getAttribute('height') + 'px;' +
                          ' background-color: ' + elem.getAttribute('c') + ';' +  
						  ' z-index: ' + elem.getAttribute('layer') + ';' +  
						  ' opacity: ' + elem.getAttribute('trans') + ';' + 
						  ' left: ' + elem.getAttribute('posx') + ';' +
						  ' top: ' + elem.getAttribute('posy') + ';' + '}'  		  
	}
  }
}
  /* Registration */
  customElements.define("badge-input", BadgeInput);
})();

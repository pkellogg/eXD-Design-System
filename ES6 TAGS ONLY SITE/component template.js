(function () {

    let template = `
     
    <button class="container" style="position:relative;width:200px;height:100px;background-color:slateblue;color:white;font-size:22px;">fx-template
        </button>
    `;

     

    class DateWidget3 extends HTMLElement {

        // Fires when an instance of the element is created.
        createdCallback() {
            this.createShadowRoot().innerHTML = template;

            //Grab the elements from the shadow root
            this.$container = this.shadowRoot.querySelector('.container');
            
            this.updateTheme(this.getAttribute('theme'));
            

            //Call the draw function initially
            this.draw();
            //Call the draw function every section to update the time
            setInterval(() => {
                this.draw();
            }, 1000);
        }
        // Fires when an instance was inserted into the document.
        attachedCallback() {}
        // Fires when an attribute was added, removed, or updated.
        attributeChangedCallback(attrName, oldVal, newVal) {
            switch (attrName) {
                case "theme":
                    this.updateTheme(newVal);
                    break;
                    
                     
            }
        }
        draw() {
            this.date = new Date();
            this.$month.innerHTML = months[this.date.getMonth()];
            this.$day.innerHTML = this.date.getDate();
            this.$dayLong.innerHTML = days[this.date.getDay()].toUpperCase();
            this.$time.innerHTML = this.date.toLocaleTimeString();
        }
        updateTheme(theme) {
            var val = "green";
            if (["green", "red", "blue", "gold"].indexOf(theme) > -1) {
                val = theme;
            }
            
            
            
            this.$container.className = "container " + val;
            
        }
    }
    document.registerElement('fx-template', DateWidget3);
})();
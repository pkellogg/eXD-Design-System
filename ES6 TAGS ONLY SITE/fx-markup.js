(function () {

let template = `
<div  style="position:relative;left:50px;top:100px;width:100px;height:75px;background-color:red;"><slot name="pat" style= "color:green;"> </slot>
</div>
 `;
 
class DateWidget4 extends HTMLElement {

        // Fires when an instance of the element is created.
        createdCallback() {
            this.createShadowRoot().innerHTML = template;
			 
		}
        
		// Fires when an instance was inserted into the document.
        attachedCallback() {}
		
         
         
		
         
         
 }
document.registerElement('fx-markup', DateWidget4);
})();
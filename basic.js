customElements.define('fx-basic', class extends HTMLElement {
		 
    constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
	 <button class="accordion" id="butone" style="style="border-bottom:solid 2px silver;">
<span><slot name="section-text1"></slot></span>  
</button>
<div  class="panel" id="panelone"> 
<p style="margin-left:10px;margin-right:10px;"><slot name="accordion-text1"></slot></p>
</div>

<button class="accordion" id="buttwo" style="border-bottom:solid 2px silver;">
<span><slot name="section-text2"></slot></span> 
</button>
<div class="panel" id="paneltwo">
   <p style="margin-left:10px;margin-right:10px;"><slot name="accordion-text2"></slot></p> 
</div>

<button class="accordion" id="butthree" style="border-bottom:solid 2px silver;">
<span><slot name="section-text3"></slot></span> 
</button>
<div class="panel" id="panelthree" >
  <p style="margin-left:10px;margin-right:10px;"><slot name="accordion-text3"></slot></p>
</div> 
</template>

<!--accordian with four panels-->
<template id="accordtmp4">
<button class="accordion" id="butone" style="style="border-bottom:solid 2px silver;">
<span><slot name="section-text14"></slot></span>  
</button>
<div  class="panel" id="panelone"> 
<p style="margin-left:10px;margin-right:10px;"><slot name="accordion-text14"></slot></p>
</div>

<button class="accordion" id="buttwo" style="border-bottom:solid 2px silver;">
<span><slot name="section-text24"></slot></span> 
</button>
<div class="panel" id="paneltwo">
   <p style="margin-left:10px;margin-right:10px;"><slot name="accordion-text24"></slot></p> 
</div>

<button class="accordion" id="butthree" style="border-bottom:solid 2px silver;">
<span><slot name="section-text34"></slot></span> 
</button>
<div class="panel" id="panelthree" >
  <p style="margin-left:10px;margin-right:10px;"><slot name="accordion-text34"></slot></p>
</div>

<button class="accordion" id="butfour" style="border-bottom:solid 2px silver;">
<span><slot name="section-text44"></slot></span> 
</button>
<div class="panel" id="panelfour" >
  <p style="margin-left:10px;margin-right:10px;"><slot name="accordion-text44"></slot></p>
</div>  `; 
  }
});
 
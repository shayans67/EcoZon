//defineNewElement({tagname:"your original tag name",init:function(self){~~actions~~}})
let defineNewElement = (o)=>{
    if(customElements){
        //some browser does not support customElements yet
      customElements.define(o.tagname,
        class extends HTMLElement {
          constructor() {
            super();
          }
          connectedCallback(){
            o.init(this);
          }
          
        })
  
    }else{
      let n_tag = document.registerElement(o.tagname,      
        class extends HTMLElement {
          constructor() {
            super();
          }
          connectedCallback(){
            o.init(this);
          }
        }
      );
      
    }
  }
  //it makes able to use <env-star data-value="50"></env-star> to make star-rate-element
  //value of data-value option would be percent of stars.
  //example: <env-star data-value="100"></env-star> will be 5 stars.
  defineNewElement({
    tagname:"env-star",
    init: (ele)=>{
      let ce = document.createElement("img");
      ce.src="img/stars.png";
      if(ele.dataset.value){
      ce.style.backgroundImage = "url(img/bar.png)";
      ce.style.backgroundPositionX = `${100-ele.dataset.value}%`;
      }else{
        ce.style.backgroundColor = "red";
      }
      ele.appendChild(ce);
    }
  })
  
var stars = document.createElement("env-star");
stars.id="env-stars";
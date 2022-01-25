// Code Obtained from https://josefzacek.com/blog/how-to-create-scroll-down-animated-mouse-effect-using-html-and-css.html
// Thank you so much, without your code example, I wouldn't have figured how to do it with css and html.


class movingMouse extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
  <div class="moving-mouse-holder">
    <div class="mouse">
      <div class="mouse-button">&nbsp;</div>
    </div>
  </div>` 
  }}

customElements.define("scroll-mouse", movingMouse);



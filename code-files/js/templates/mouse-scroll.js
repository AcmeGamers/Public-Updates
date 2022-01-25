// Code Obtained from https://josefzacek.com/blog/how-to-create-scroll-down-animated-mouse-effect-using-html-and-css.html
// Thank you so much, without your code example, I wouldn't have figured how to do it with css and html.

class movingMouse extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    var color = this.getAttribute("color");
    console.log(data);

    this.innerHTML = `

    <style>
        .moving-mouse-holder {
            margin: auto;
            margin-top: 60px;
            width: 170px;
        }

        .moving-mouse-holder .mouse {
            width: 26px;
            height: 40px;
            position: relative;
            right: 0;
            border-radius: 18px;
            border: 2px solid ${color || "#000"};
        }

        .moving-mouse-holder .mouse-button {
            background-color: ${color || "#000"};
            width: 4px;
            height: 10px;
            border-radius: 2px;
            position: absolute;
            top: 10px;
            left: 50%;
            margin: 0 0 0 -2px;
            animation: mouse-scroll 1s infinite alternate;
        }

        .moving-mouse-holder .text {
            margin-top: -30px;
            margin-left: 40px;
            color: #33cc66;
            font-size: 12px;
            line-height: 1em;
        }

        @keyframes mouse-scroll {
            to {
            transform: translate(0, 6px) scale(1, 0.8);
            }
        }
    </style>

    <div class="moving-mouse-holder">
        <div class="mouse">
            <div class="mouse-button">&nbsp;</div>
        </div>
    </div>`;
  }
}

customElements.define("scroll-mouse", movingMouse);

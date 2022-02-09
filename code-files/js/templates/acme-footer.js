// Footer most of my web applications
class gitRepo extends HTMLElement {
        constructor() {
          super();
        }
        connectedCallback() {
          this.innerHTML = `
          <style>
            footer {
              position: fixed;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 60px;
              background: #5c5c5c;
              display: grid;
              align-items: center;
              justify-content: center;
            }

            footer > div > p > a {
              color: #fff;
            }

          </style>
          <footer>
            <div>
              <p>
                A github repository created by
                <a href="https://github.com/AcmeGamers">Acme Gamers</a>
              </p>
            </div>
          </footer>
          
          `;
        }
      }

      customElements.define("define-acme", gitRepo);

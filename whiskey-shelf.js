class WhiskeyShelf extends HTMLElement {
  constructor() {
    super;
    this.root = this.attachShaow({ mode: 'open' });
  }
  set shelf(shelf) {
    this.root.innerHTML = `
      <styles>
        main {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content:center;
          font-size: calc(10px + 2vmin);
          color: white;
        }

        section {
          display: flex;
        }

        figure {
          height: 200px;
          display: block;
          margin-left: 30px;
          margin-right: 30px;
          margin-top: 30px;
        }
      </style>
    `
  }
}

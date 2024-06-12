import { LitElement, html, css } from "lit";

export class SetTimerComponent extends LitElement {
  static properties = {
    inputValue: { type: Number, state: true },
  };

  constructor() {
    super();
    this.inputValue = 0;
  }

  _handleChange(e) {
    this.inputValue = Number(e.target.value);
  }

  _handleSubmit(e) {
    e.preventDefault();
    if (!isNaN(this.inputValue) && this.inputValue > 0) {
      this.dispatchEvent(
        new CustomEvent("submit-timer", {
          detail: { value: this.inputValue },
          bubbles: true,
          composed: true,
        })
      );
    } else {
      alert("Invalid input value");
    }
  }

  render() {
    return html`
      <form class="form" @submit="${this._handleSubmit}" @reset="${() => this.inputValue = 0}">
        <div class="form__input">
          <label for="seconds">Configurar</label>
          <div class="input-wrapper">
            <input
              type="number"
              id="seconds"
              name="seconds"
              min="0"
              @input="${this._handleChange}"
              required
            />
            ${this.inputValue > 0 ? html`<button type="reset" class="form__button-reset">✖</button>` : ""}
          </div>
          <span>segundos</span>
        </div>
        <button class="form__button-submit" type="submit">Guardar</button>
      </form>
    `;
  }

  static styles = css`
    :host {
      margin-top: 1.5rem;
    }

    button {
      border: none;
      background: none;
      color: inherit;
    }

    .form {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      font-size: 1.1rem;
      color: var(--neutral-light-color, gray);
    }

    .form__input {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }

    .input-wrapper {
      position: relative;
    }

    #seconds {
      display: inline-block;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      text-align: center;
      border: none;
      border-bottom: 1px solid var(--neutral-dark-color, black);
      color: var(--neutral-light-color, gray);
      font-family: var(--timer-component-font-family);
      padding: 3px 0 0 0;
      font-weight: 600;
      font-size: 1rem;
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type="number"] {
      -moz-appearance: textfield;
    }

    @media (max-width: 455px) {
      .form {
        font-size: 0.9rem;
      }

      #seconds {
        width: 7rem;
      }
    }

    .form__button-reset {
      cursor: pointer;
      position: absolute;
      right: 0;
      bottom: 0.1px;
      transition: all 100ms ease-in-out;

    }

    .form__button-reset:hover {
      color: #cd0707;
    }

    .form__button-submit {
      cursor: pointer;
      padding: 5px 30px;
      margin: 1.2rem;
      border-radius: 5px;
      background-color: var(--neutral-light-color, gray);
      color: var(--primary-lightest-color, white);
      transition: all 150ms ease-in;
    }

    .form__button:hover {
      background-color: var(--neutral-lightest-color, rgb(165, 165, 165));
    }
  `;
}

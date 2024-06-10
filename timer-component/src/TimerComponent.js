import { LitElement, css, html } from "lit";
import { TimerPartComponent } from "./TimerPartComponent"

export class TimerComponent extends LitElement {
  static properties = {
    _days: { type: Number, state: true },
    _hours: { type: Number, state: true },
    _minutes: { type: Number, state: true },
    _seconds: { type: Number, state: true },
    _count: { type: Number, state: true },
    start: { type: Number, attribute: true },
    limit: { type: Number, attribute: true },
    reverse: { type: Boolean, attribute: true },
    autostart: { type: Boolean, attribute: true },
    autoreset: { type: Boolean, attribute: true },
  };

  constructor() {
    super();
    this.start = 0;
    this.reverse = false;
    this.limit = false;
    this.autoreset = false;
    this.interval = null;
    this.isFinished = new CustomEvent("isFinished", { bubbles: true, composed: true });
    window.customElements.define("timer-part-component", TimerPartComponent);

  }

  static styles = css`
    :host {
      display: flex;
      justify-content: center;
    }

    .timer-component-join {
      color: var(--timer-component-part-color);
      padding: var(--timer-component-join-padding);
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.resetTimer();
    if(this.autostart) return this.startTimer();
  }

  disconnectedCallback() {
    this.resetTimer();
    super.disconnectedCallback();
    
  }

  _setTimer() {
    this._seconds = this._count % 60;
    this._minutes = Math.floor(this._count / 60) % 60;
    this._hours = Math.floor(this._count / 3600) % 24;
    this._days = Math.floor(this._count / 86400);
  }

  startTimer() {
    // this._setTimer();
    if(!this.interval) {
      this.interval = setInterval(() => {
        if (this.reverse && this.reverse === true) {
          if (this._count > 0) {
            this._count--;
            this._setTimer();
          } else {
            this._endTimer();
          }
        } else {
          const checkLimit = this._checkLimitAttribute();
          if (checkLimit && this._count < this.limit) {
            this._count++;
            this._setTimer();
          } else {
            this._endTimer();
          }
        }
      }, 1000);
    }
  }

  resetTimer() {
    this._days = 0;
    this._hours = 0;
    this._minutes = 0;
    this._seconds = 0;
    this._count = this.start;
    this._setTimer();
    this._clearInterval(this.interval);
    if(this.autostart) return this.startTimer();
  }

  pauseTimer() {
    this._clearInterval();
  }

  _clearInterval() {
    clearInterval(this.interval);
    this.interval = null;
  }

  _endTimer() {
    this._clearInterval();
    this.dispatchEvent(this.isFinished);
    if(this.autoreset ) return this.resetTimer();
  }

  _checkLimitAttribute() {
    if (!this.reverse && !this.limit) {
      alert("You must set a limit!");
      return false
    }
    return true;
  }

  render() {
    return html`
      ${this._days > 0 ? html`<timer-part-component
      value="${this._days}"
      format="DD"></timer-part-component>
      <span class="timer-component-join">:</span>` : "" }
      <timer-part-component
        value="${this._hours}"
        format="HH"
      ></timer-part-component>
      <span class="timer-component-join">:</span>
      <timer-part-component
        value="${this._minutes}"
        format="MM"
      ></timer-part-component>
      <span class="timer-component-join">:</span>
      <timer-part-component
        value="${this._seconds}"
        format="SS"
      ></timer-part-component>
     
    `;
  }
}


import { LitElement, html, css } from "lit";

export class TimerPlayerComponent extends LitElement {
  static properties = {
    playBtn: { type: Boolean, attribute: "play-btn" },
    pauseBtn: { type: Boolean, attribute: "pause-btn" },
    resetBtn: { type: Boolean, attribute: "reset-btn" },
    isFinishedMessage: { type: String, attribute: "finish-message" },
  };

  constructor() {
    super();
    this.playBtn = false;
    this.pauseBtn = false;
    this.resetBtn = false;
    this.isFinishedMessage = "¡Finish!";
    this.isFinished = false;
    this.timerPlayer = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this.timerPlayer = this.querySelector("timer-component");
    this.soundPlayer = this.querySelector("sound-component");
    this.addEventListener("isFinished", this._handleIsFinished);
  }

  disconnectedCallback() {
    this.removeEventListener("isFinished", this._handleIsFinished);
    super.disconnectedCallback();
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: var(--timer-component-font-family);
    }

    .timer-player-component__action {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1em;
      margin: var(--timer-player-component-action-margin);
    }

    .timer-player-component__status {
      margin: var(--timer-player-component-status-margin);
      color: var(--timer-player-component-status-color);
      font-size: var(--timer-player-component-status-font-size);
    }

    button {
      cursor: pointer;
      padding: var(--timer-player-component-button-padding);
      margin: var(--timer-player-component-button-margin);
      border-radius: var(--timer-player-component-button-border-radius);
      border: var(--timer-player-component-button-border);
      font-size: var(--timer-player-component-button-font-size);
      font-weight: var(--timer-player-component-button-font-weight);
    }

    button.timer-player-component {
      color: var(--timer-player-component-color);
      background-color: var(--timer-player-component-part-color);
      transition: all 100ms ease-in;
    }

    button.timer-player-component:hover {
      color: #59335c;
    }

    button.timer-player-component__play {
      color: var(--timer-player-component-play-color);
      background-color: var(--timer-player-component-play-background-color);
      transition: all 100ms ease-in;
    }

     button.timer-player-component__play:hover {
      background-color: #7c5e35;
    }

    @media (max-width: 455px) {
      .timer-player-component__action {
        gap: 0.1em;
      }
      
      button { 
        padding: 5px 25px;
      }
    }
  `;

  _handleIsFinished(e) {
    // e.stopPropagation();
    this.isFinished = true;
    this.soundPlayer.play();
    this.requestUpdate();
  }

  _buttonElement(action, message, className) {
    return html`<button @click="${action}" class=${className}>
      ${message}
    </button>`;
  }

  _startTimer() {
    if (this.timerPlayer) {
      this.timerPlayer.startTimer();
      this.isFinished = false;
      this.requestUpdate();
    }
  }

  _pauseTimer() {
    if (this.timerPlayer) {
      this.timerPlayer.pauseTimer();
    }
  }

  _resetTimer() {
    if (this.timerPlayer) {
      this.timerPlayer.resetTimer();
      this.isFinished = false;
      this.requestUpdate();
    }
  }

  render() {
    return html`
      <div class="timer-player-component__status">
        <span>${this.isFinished ? this.isFinishedMessage : ""}</span>
      </div>
      <slot></slot>
      <div class="timer-player-component__action">
        ${this.pauseBtn
          ? this._buttonElement(
              this._pauseTimer,
              "Pause",
              "timer-player-component"
            )
          : ""}
        ${this.playBtn
          ? this._buttonElement(
              this._startTimer,
              "Play",
              "timer-player-component__play"
            )
          : ""}
        ${this.resetBtn
          ? this._buttonElement(
              this._resetTimer,
              "Reset",
              "timer-player-component"
            )
          : ""}
      </div>
    `;
  }
}

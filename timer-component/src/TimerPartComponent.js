import {LitElement, css, html} from 'lit';


export class TimerPartComponent extends LitElement {
    static properties = {
        value: { attribute: true, type: Number},
        format: {attribut: true, type: String},
    }

    constructor() {
        super();
    }

    static styles = css `
    :host {
        display: block;
        color: var(--timer-component-part-color);
        padding: var(--timer-component-part-padding);
        box-shadow: var(--timer-component-part-box-shadow);
        border-radius: var(--timer-component-part-border-radius);
    }
`;
    
    _timeFormat(time) {
        return time < 10 ? `0${time}` : time;
    }

    render() {
        return html`<div>${this._timeFormat(this.value)}</div>`;
    }


}

customElements.define("timer-part-component", TimerPartComponent);
import { LitElement, html } from "lit";

export class SoundComponent extends LitElement {
    static properties = {
        src: {type: String, attibute: true},
    }


    constructor(){
        super();
    }

    play() {
        this.shadowRoot.querySelector("audio").play()
    }

    render() {
        return html`
        
            <audio src="${this.src}"></audio>
        `
    }
}

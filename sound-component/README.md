# SoundComponent

SoundComponent is a web component based on LitElement that provides a simple interface for playing audio files in a web application.

## Installation

To install SoundComponent in your project, use npm:

```bash
install @jnguero-utils/sound-component
```

## Usage

After installing the package, you can use SoundComponent in your project as follows:

### Import and Definition

First, make sure to import and define the component:

```js
    { SoundComponent } from '@yourusername/sound-component';

    window.customElements.define('sound-component', SoundComponent);
```

### Using in HTML

Then, you can use the component in your HTML:

```js
<sound-component src="path/to/your/audio/file.mp3"></sound-component>
```

### Playing Audio

To play the audio, you can call the play method of the component:

```js
const soundComponent = document.querySelector("sound-component");

soundComponent.play();
```

## Full Example

Here is a complete example of how to use SoundComponent:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SoundComponent Example</title>
    <script type="module">
      import { SoundComponent } from "@tuusuario/sound-component";

      window.customElements.define("sound-component", SoundComponent);

      window.addEventListener("DOMContentLoaded", () => {
        const playButton = document.getElementById("play-button");
        const soundComponent = document.querySelector("sound-component");

        playButton.addEventListener("click", () => {
          soundComponent.play();
        });
      });
    </script>
  </head>
  <body>
    <h1>SoundComponent Example</h1>
    <sound-component src="path/to/your/audio/file.mp3"></sound-component>
    <button id="play-button">Play Sound</button>
  </body>
</html>
```

## Properties

### src

- **Type**: String
- **Description**: The URL of the audio file to be played.
- htmlCopy code

## Methods

### play()

Plays the audio file.

- javascriptCopy codeconst soundComponent = document.querySelector('sound-component');soundComponent.play();

## Contributions

Contributions are welcome. If you have improvements, bug fixes, or new features, please open an issue or a pull request on the GitHub repository.

## License

SoundComponent is licensed under the [MIT License](LICENSE).

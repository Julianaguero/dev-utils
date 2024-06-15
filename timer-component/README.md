# TimerComponent Documentation

## Overview

TimerComponent is a customizable web component package that provides a countdown timer with play, pause, and reset functionalities. This package includes four main web components: TimerComponent, TimerPlayerComponent, TimerPartComponent, and the newly added SetTimerComponent.

## Installation

Install the package via NPM:

`  npm install @jnguero-utils/timer-component  `

## Usage

### Importing Components

To use the components in your project, import them as follows as create customElements with them:

```js
    import { TimerComponent } from "@jnguero-utils/timer-component";
    import { TimerPlayerComponent } from "@jnguero-utils/timer-component";
    import { SetTimerComponent } from "@jnguero-utils/timer-component";

    window.customElements.define("timer-component", TimerComponent);
    window.customElements.define("timer-player-component", TimerPlayerComponent);
    window.customElements.define("set-timer-component", SetTimerComponent);
```

### TimerComponent

TimerComponent is the core component that handles the countdown timer functionality.

#### Properties

- **start** (Number): Initial countdown value in seconds. Default is 0.
- **limit** (Number): Countdown limit value in seconds. Required when reverse is false.
- **reverse** (Boolean): If true, the timer counts down. Default is false.
- **autostart** (Boolean): If true, the timer starts automatically. Default is false.
- **autoreset** (Boolean): If true, the timer resets automatically when finished. Default is false.

#### Example

```html
<timer-component
  start="3600"
  limit="7200"
  reverse
  autostart
  autoreset
></timer-component>
```

### TimerPlayerComponent

TimerPlayerComponent provides controls to play, pause, and reset the TimerComponent.

#### Properties

- **playBtn** (Boolean): Displays the play button. Default is false.
- **pauseBtn** (Boolean): Displays the pause button. Default is false.
- **resetBtn** (Boolean): Displays the reset button. Default is false.
- **isFinishedMessage** (String): Message displayed when the timer finishes. Default is "¡Finish!".

#### Example

```html
<timer-player-component
  play-btn
  pause-btn
  reset-btn
  finish-message="Time's Up!"
>
  <timer-component start="3600" limit="7200" reverse></timer-component>
</timer-player-component>
```

### TimerPartComponent

TimerPartComponent displays individual parts of the timer (days, hours, minutes, seconds).

#### Properties

- **value** (Number): The numeric value of the time part.
- **format** (String): The format of the time part (DD, HH, MM, SS).

#### Example

```html
<timer-part-component value="12" format="HH"></timer-part-component>
```

### SetTimerComponent

SetTimerComponent provides an input for updating the TimerComponent dynamically.

#### Properties

- **inputValue** (Number): The input value in seconds. Default is 0.

#### Events

- **submit-timer**: Dispatched when the timer value is submitted. Includes the new timer value in the detail.

#### Example

```html
    <set-timer-component></set-timer-component>
    <timer-component id="timer"></timer-component>

    <script>
        const setTimerComponent = document.querySelector('set-timer-component');
        const timerComponent = document.getElementById('timer');

        setTimerComponent.addEventListener('submit-timer', (event) => {
            timerComponent.start = event.detail.value;
        });
    </script>
```

## Styling

Each component can be customized using CSS variables for better integration with your design system.

### TimerComponent Styles

- **\--timer-component-part-color**: Color of the timer parts.
- **\--timer-component-join-padding**: Padding between the timer parts.
- **\--timer-component-join-font-size**: Font size between the timer parts.

### TimerPlayerComponent Styles

- **\--timer-player-component-action-margin**: Margin for action buttons.
- **\--timer-player-component-status-margin**: Margin for the status display.
- **\--timer-player-component-status-color**: Color for the status display.
- **\--timer-player-component-status-font-size**: Font size for the status display.
- **\--timer-player-component-button-padding**: Padding for action buttons.
- **\--timer-player-component-button-margin**: Margin for action buttons.
- **\--timer-player-component-button-border-radius**: Border radius for action buttons.
- **\--timer-player-component-button-border**: Border style for action buttons.
- **\--timer-player-component-button-font-size**: Font size style for action buttons.
- **\--timer-player-component-font-weight**: Font weight for action buttons.
- **\--timer-player-component-color**: Text color for action buttons.
- **\--timer-player-component-part-color**: Background color for action buttons.
- **\--timer-player-component-play-color**: Text color for the play button.
- **\--timer-player-component-play-background-color**: Background color for the play button.

### TimerPartComponent Styles

- **\--timer-component-part-color**: Text color for timer parts.
- **\--timer-component-part-padding**: Padding for timer parts.
- **\--timer-component-part-height**: Height for timer parts.
- **\--timer-component-part-witdh**: Width for timer parts.
- **\--timer-component-part-box-shadow**: Box shadow for timer parts.
- **\--timer-component-part-border-radius**: Border radius for timer parts.
- **\--timer-component-part-font-size**: Font size for timer parts.

## Events

- **isFinished**: Dispatched by TimerComponent when the timer finishes.

## Example Project

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Timer Component Example</title>
    <script type="module">
      import {
        TimerComponent,
        TimerPlayerComponent,
        TimerPartComponent,
      } from "timer-component";
    </script>
    <style>
      timer-component,
      timer-player-component,
      timer-part-component {
        --timer-component-part-color: #000;
        --timer-player-component-action-margin: 10px;
        --timer-player-component-status-color: #f00;
      }
    </style>
  </head>
  <body>
    <timer-player-component
      play-btn
      pause-btn
      reset-btn
      finish-message="Time's Up!"
    >
      <timer-component start="3600" limit="7200" reverse></timer-component>
    </timer-player-component>
  </body>
</html>
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

# js-timer-module
Javascript webpack module, that implements countdown timer. **THE MODULE REQUIRES WEBPACK TO WORK**.  
If you have webpack installed in your project, then proceed to the "Quick start" stage.

**Download** the ZIP archive (top right green button 'Code' -> 'download ZIP')

## Webpack installing
Open the terminal (in VS Code, the Terminal panel at the bottom).

In the terminal, we make sure that we are in the folder with the current project, i.e. in this folder there is index.html.  
(`cd ..` OR `cd .\[DIR_NAME]` to move, approximate path `C:/project/src/`).

Installing webpack with the command `npx webpack webpack-cli --save-dev`, if necessary, click `y`/`yes` in the terminal.
Transfer `webpack.config.js` from the downloaded archive into your project (same nesting folder with `index.html`)

In the terminal, we write `npx webpack`.  
If we **GET AN ERROR**, then in the file `webpack.config.js` you need to change the value of `entry: "..."` to
your main js file (the result should look something like this - `entry: "./js/script.js"`)
**OR** you can rename the main js file to `script.js`. 

**Save all the changes**.
A message about successful compilation should appear in the terminal.  
At the moment, your project **should look** something like this:
```
project/  
├─ dist/  
├─ src/  
│  ├─ css/  
│  ├─ js/  
│  ├─ node_modules/  
│  ├─ index.html  
│  ├─ package.json  
│  ├─ webpack.config.js  
```

If you encounter a problem, check https://webpack.js.org/guides/getting-started/

## Quick start
At this stage, you should have Webpack installed and running.

**1)** Insert the layout into your `.html` file
```html
<div class="timer">
    <div class="timer__block">
        <span id="days">00</span>
        days
    </div>
    <div class="timer__block">
        <span id="hours">00</span>
        hours
    </div>
    <div class="timer__block">
        <span id="minutes">00</span>
        minutes
    </div>
    <div class="timer__block">
        <span id="seconds">00</span>
        seconds
    </div>
</div>
```

**2)** Download both `cyx-timer.min.css` and `cyx-timer.min.css.map` files from the `css/` archive folder directly into your `css/` folder
**OR** compile them optionally using the `cyx-timer.scss` preprocessor file.
After just link the `cyx-timer.min.css` file in your `<head>` tag:
```html
<link rel="stylesheet" href="css/cyx-timer.min.css">
```

**3)** Download `cyx-timer.min.js` file from the `js/` archive folder directly into your `js/` folder.

**4)** To your main `.js` file (the file with imports marked in `webpack.config.js` as `entry: "..."`) simply add:

**4.1)** At the beginning of the main `.js` file:
```jsx
import timer from './cyx-timer.min';
```

**4.2)** After `import` line put `timer()` call. Replace the value of the `endDate` property with your date in the format `YYYY, MM, DD, HH` and so on.
For more information, see about the `Date` data type: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date
```jsx
timer({
    endDate: new Date(1900, 1, 1),  // Put your end date here
    parentSelector: ".timer",
    daySelector: "#days",
    hourSelector: "#hours",
    minuteSelector: "#minutes",
    secondSelector: "#seconds",
});
// *YOUR CODE GOES HERE*
```

**5)** **Save all project files**. Webpack should form a single javascript `bundle.js` file.  
This file name is specified in `webpack.config.js` as `filename: "..."`  
Example (inside webpack.config.js):
```jsx
output: {
    filename: 'bundle.js'
}
```
This `bundle.js` file must be included in the `.html` file before the `</body>` closing tag.
```html
<script src="js/bundle.js"></script>
```

At the moment, your project should look something like this:
```
project/  
├─ dist/  
├─ src/  
│  ├─ css/  
│  │  ├─ cyx-timer.min.css  
│  │  ├─ cyx-timer.min.css.map  
│  ├─ js/  
│  │  ├─ bundle.js  
│  │  ├─ bundle.js.map  
│  │  ├─ cyx-timer.min.js  
│  │  ├─ script.js  
│  ├─ node_modules/  
│  ├─ index.html  
│  ├─ package.json  
│  ├─ webpack.config.js  
```

**Save all changes** again. If you did everything correctly, then you should see the result :)  
If you have **ANY PROBLEMS**, it is recommended to check all the names and paths to the added files.
You can also **unzip the project** completely and see how it works.

## Parameters
You can independently change the properties of the object passed to the timer (`timer()` by default).  
**ATTENTION!** To correctly pass the selector as a property value, use:
- `".myClass"` for the class (use a dot);
- `"#myId"` for id;
- `"myTag"` for tag selection;
- `"[data-myAttribute]"` for attribute.

Option | Type | Default | Description
------ | ---- | ------- | -----------
endDate | date | `Date(1900, 1, 1)` | The end date to which the timer will count down the time.
parentSelector | string | `".timer"` | The parent selector of the timer. (Represents document.querySelector, recommends to use selection by `class` OR selection by `id`)
daySelector | string | `"#days"` | Represents the days countdown block of the timer. (document.querySelector, recommends to use selection by `class` OR selection by `id`)
hourSelector | string | `"#hours"` | Represents the hours countdown block of the timer. (document.querySelector, recommends to use selection by `class` OR selection by `id`)
minuteSelector | string | `"#minutes"` | Represents the minutes countdown block of the timer. (document.querySelector, recommends to use selection by `class` OR selection by `id`)
secondSelector | string | `"#seconds"` | Represents the seconds countdown block of the timer. (document.querySelector, recommends to use selection by `class` OR selection by `id`)











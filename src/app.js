console.log('App.js is running');

//JSX- JavaScript XML - JavaScript Syntax Extension

var template = (
    <div>
        <h1>This is title</h1>
        <p>This is some info</p>

        <ol>
            <li>
                Item one
            </li>
            <li>
                Item two
            </li>
        </ol>
    </div>
);

var templateTwo = (
    <div>
    <h1>Arkadiusz Milewski</h1>
    <p>Age: 27</p>
    <p>Location: Barcelona</p>
    </div>
)
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
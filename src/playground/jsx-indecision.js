console.log('App.js is running');

//JSX- JavaScript XML - JavaScript Syntax Extension

const app = {
    title: 'IndecisionApp',
    subtitle: 'This is my very nice app',
    options: []

};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
    }
    render();
};
const removeAll = () => {
   app.options = [];
   render();
}
const onMakeDecision= () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    console.log(randomNum)
}
var appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0}onClick={onMakeDecision}>What Should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
            {app.options.map((option) => <p key={option}>Option: {option}</p>           )}
            </ol>


            <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
            </form>
            
        </div>

    )
    ReactDOM.render(template, appRoot);
}

render();

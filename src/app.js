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

var appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
            <p>{app.options.length}</p>
            
            <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
            </form>
            <button onClick={removeAll}>Remove All</button>
        </div>

    )
    ReactDOM.render(template, appRoot);
}

render();

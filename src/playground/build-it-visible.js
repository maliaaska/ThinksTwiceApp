

let someText =[];
let visibility = false;

const toggleVisibility = () => {
    visibility= !visibility;
    render();

} 


var appRoot = document.getElementById('app');

const render = () => {
    const visibilityToogle = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>
            {visibility && (
                <div>
                <p>This is some Visible text</p>
                </div>
            )}
                    
        </div>
    )
    ReactDOM.render(visibilityToogle, appRoot);
}

render();


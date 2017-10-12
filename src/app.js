
class IndecisionApp extends React.Component {
    render () {
       
       const title = "Indecision"; 
       const subtitle = 'Put your life in the hands of computer';
       const options = ['Thing One', 'Thing Two', 'Thing three'];
        return  (
            <div>
            <Header title={title} subtitle={subtitle} />
            <Action />
            <Options options ={options}/>
            <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render () {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}
 class Action extends React.Component {
     handlePick() {
        alert("handlePick")
     }
     render() {
         return (
            <div>
            <button onClick={this.handlePick}>What Should I do</button>
            </div>
         )
     }
 }
 class Options extends React.Component {
    constructor(props) {
      super(props);
      this.removeAll = this.removeAll.bind(this);  
    }

     removeAll () {
        //  alert('All element have been removed');
        console.log(this.props.options);
     }

     render() {
         return(
             <div>
             <button onClick={this.removeAll}>Remove All</button>
             {
                this.props.options.map((option) => <Option key={option} optionText={option} /> )
             }
            
             </div>
         )
     }
 }

 class Option extends React.Component {
     render () {
         return (
            <div>
            {this.props.optionText}
            </div>
         )
     }
 }

 class AddOption extends React.Component {
     handleAddOption (e) {
         e.preventDefault();
        
         const option = e.target.elements.option.value.trim();

         if(option) {
             alert(option);
         }
        }
     render() {
         return (
             <div>
                Add option component here
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>add an option!</button>
                    <h1>Now ITS FIXED sdasdasdadasd</h1>
                </form>
             </div>
         )
     }
 }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
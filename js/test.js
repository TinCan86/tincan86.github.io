class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstValue: 0,
            operator: '+',
            secondValue: 0          
        };

        this.handleFirstValueChange = this.handleFirstValueChange.bind(this);
        this.handleSecondValueChange = this.handleSecondValueChange.bind(this);
        this.handleOperatorChange = this.handleOperatorChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFirstValueChange(event) {
        //2. Den här tar emot ändringarna. Namnet ligger i event.target.value
        //3. Du uppdaterar statet så att value nu är det namnet du har skrivit
        this.setState({ firstValue: event.target.value });
    }

    handleOperatorChange(event) {
        this.setState({ operator: event.target.value });
    } 
    
    handleSecondValueChange(event) {
        this.setState({ secondValue: event.target.value });
    }
        
    handleSubmit(event) {
        event.preventDefault();
        //4. Uppdatera till databasen eller vad du vill
        const calc = {
            firstValue: this.state.firstValue,
            operator: this.state.operator,
            secondValue: this.state.secondValue
        }
        
        let result = eval(
            this.state.firstValue + //ex. 3
            this.state.operator + //ex. '+'
            this.state.secondValue //ex. 7
        );

        this.setState({
            output: result
        })
        //var result = (person.age + person.name);
        //console.log(person);
        console.log(result);
        return result;
    }

    render() {
        //1. Så fort du skriver något i formen så anropas handleNameChange eller handleAgeChange
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="number" value={this.state.firstValue} onChange={this.handleFirstValueChange} />
                    <input type="number" value={this.state.secondValue} onChange={this.handleSecondValueChange} />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <div className="well">
                    <h3>Namn: {this.state.firstValue}</h3>
                    <h4>Ålder: {this.state.secondValue}</h4>
                    <h2>{this.state.output}</h2>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);

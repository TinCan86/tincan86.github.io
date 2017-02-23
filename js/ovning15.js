class Calculator extends React.Component {
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

        const calc = {
            firstValue: this.state.firstValue,
            operator: this.state.operator,
            secondValue: this.state.secondValue
        }
        
        let result = eval(
            this.state.firstValue + 
            this.state.operator +
            this.state.secondValue
        );

        this.setState({
            output: result
        })
        return result;
    }

    render() {
        return (
            <div className="well mathBox text-center">
                <form onSubmit={this.handleSubmit}>
                <div>
                    <p>En addition miniräknare, tjoho!</p>
                    <input className='inputValue' type="number" value={this.state.firstValue} onChange={this.handleFirstValueChange} />
                    <input className='inputValue' type="number" value={this.state.secondValue} onChange={this.handleSecondValueChange} />
                    <h2 className='panel'>= {this.state.output}</h2>
                    <input className='btn btn-success' type="submit" value="Submit" />
                </div>
                </form>
                
            </div>
        );
    }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);

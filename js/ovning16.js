const urlForWorldApi = countryListInformation => 'http://forverkliga.se/JavaScript/api/simple.php?world'

class App extends React.Component {
constructor(props) {
        super(props)
        this.state = {
            requestFailed: false,
            list: []
        } 
        
}
    
componentDidMount() {    
    fetch(urlForWorldApi(this.props.countryListInformation))
    .then(response => {
        if(!response.ok) {
            throw Error("Network request failed")
        }     
        return response
    })
      .then(data => data.json())
      .then(data => {          
        this.setState({
            list: data
        })
    }, () => {       
        this.setState({
            requestFailed: true
        })
    })    
}    

handleDeleteItem(index) {

 let countries = this.state.list;
 countries.splice(index, 1);

 this.setState({ list: countries })  
}  
    
  render() {
        if (this.state.requestFailed) return <h2>Failed!</h2>
        //Denna säger om listan är 0 så loadar det. 
        if (this.state.list.length === 0) return <h2 className='fa fa-2x fa-spinner fa-spin'>Loading...</h2>
        
        else {
            return (
                <div>
                    <h3 className='well countryHeader'>Information on {this.state.list.length} countries</h3>
                    <CountryList countries={this.state.list} onDelete={this.handleDeleteItem.bind(this)}/>
                    
                </div>
            )}
    }
}


class CountryList extends React.Component {
    constructor(props) {
            super(props)
            this.state = {
                    selectedCountryIndex: null, 
                    showDeleteButton: false
            } 
        
    }
    
        handleClick(index, event) {
        //När man trycker på deleteknappen så trycker man också på li-elementet så båda eventen triggas, därav stop propagation
        event.stopPropagation();

        if (event.target.id === 'delete') {
            this.props.onDelete(index);
            this.setState({
                selectedCountryIndex: null
            });
        } else {
            this.setState({
                selectedCountryIndex: this.state.selectedCountryIndex !== index ? index : null
            });
        }
    }

    render() {
        const showDeleteButton = this.state.showDeleteButton;

        const countryListSorted = this.props.countries.map((country, index) =>
            <li
                onClick={this.handleClick.bind(this, index)}
                key={index}
                value={index}
                className={'list-group-item ' + (this.state.selectedCountryIndex === index ? 'selected' : '')}>

                {country.name}, {country.continent} 
                {this.state.selectedCountryIndex === index &&
                    <button
                        id="delete"
                        onClick={this.handleClick.bind(this, index)}
                        className={'pull-right deleteButtonDeluxe'}>
                        X
                    </button>
                }
                <div>Population: {country.population}</div>
            </li>
        );

        return (
            <div>
                <ul className='list-group customListGroup'>
                    {countryListSorted}
                </ul>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
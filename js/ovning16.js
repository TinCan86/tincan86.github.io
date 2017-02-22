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
           
        console.log(data);
    }, () => {       
        this.setState({
            requestFailed: true
        })
    })    
}    
  

 handleDeleteItem(index) {
     
     //Gör listan till countries.
     let countries = this.state.list;
     //countries tar bort 1 ifrån index som är markerat.
     countries.splice(index, 1);
     
     this.setState({ list: countries })
 }  
    
  render() {
        if (this.state.requestFailed) return <p>Failed!</p>
        //Denna säger om listan är 0 så loadar det. 
        if (this.state.list.length === 0) return <p>Loading...</p>
        else {
            return (
                <div>
                    <h2>Country Name List</h2>
                    <CountryList countries={this.state.list} onDelete={this.handleDeleteItem.bind(this)}/>
                    <h3 className='well'>Total: {this.state.list.length}</h3>
                <div className="well">                    
                </div>
                
                </div>
            )}
    }
}

class CountryList extends React.Component {
    constructor(props) {
            super(props)
            this.state = {
                    selectedCountryIndex: null
            } 
    }
    
    handleClickOnList(index, event) {
        console.log(index);
        console.log(event);   
        this.setState ({ selectedCountryIndex: index })
          
        //this.setState({ list: event.target.value });
    } 
    
    handleDeleteItem() {
        this.props.onDelete(this.state.selectedCountryIndex);
    }

    render() {
        const countryListSorted = this.props.countries.map((country, index) =>
            <li 
                onClick={this.handleClickOnList.bind(this, index)}
                key={index} 
                value={index} 
                className={'list-group-item ' + (this.state.selectedCountryIndex === index ? 'selected' : '')}>
                 
                {index + 1}. {country.name} <button onClick={this.handleDeleteItem.bind(this)} className='btn-danger pull-right'>Delete</button>
           </li>
        );

        return (
        <div>
            <ul className='list-group'>
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

/*onItemClick: function (event) {

    this.setState({ selectedItem: event.currentTarget.dataset.id });
    //where 'id' =  whatever suffix you give the data-* li attribute
},

render: function() {
    return (
        <div>
            <ul>
                <li onClick={this.onItemClick} data-id="1" className={this.state.selectedItem == 1 ? "on" : "off"}>Component 1</li>
                <li onClick={this.onItemClick} data-id="2" className={this.state.selectedItem == 2 ? "on" : "off"}>Component 2</li>
                <li onClick={this.onItemClick} data-id="3" className={this.state.selectedItem == 3 ? "on" : "off"}>Component 3</li>
            </ul>
        </div>
    );
},*/
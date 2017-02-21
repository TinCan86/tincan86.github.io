const urlForWorldApi = countryListInformation => 'http://forverkliga.se/JavaScript/api/simple.php?world'

class App extends React.Component {
constructor(props) {
        super(props)
        this.state = {
            requestFailed: false,
            list: []
        } 
        this.handleClickOnList = this.handleClickOnList.bind(this);
}
    
handleClickOnList(event) {
        this.setState({ list: event.target.value });
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
        console.log(data);
        
        this.setState({
            list: data
        })
        //den skriver ut en lista med object där allt finns.
           
        console.log(data);
    }, () => {       
        this.setState({
            requestFailed: true
        })
    })    
}    
    
  render() {
        if (this.state.requestFailed) return <p>Failed!</p>
        //Denna säger om listan är 0 så loadar det. 
        if (this.state.list.length === 0) return <p>Loading...</p>
        else {
            return (
                <div>
                    <h3 className='well'>There is {this.state.list.length} countries in the list</h3>
                    <CountryList list={this.state.list}/>
                <div className="well">
                                    
                </div>
                </div>
            )}
    }
    //slutet av klassen
}

function CountryList(props) {

    const countryListSorted = props.list.map((list, index) =>
            <li key={index} value={index} className='list-group-item'>{index + 1}. {list.name} - {list.continent}</li>
    );
    
    return (
        <div>
            <ul className='list-group'>
                {countryListSorted}           
            </ul>
        </div>       
    );
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
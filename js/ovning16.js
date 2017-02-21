const urlForWorldApi = list => 'http://forverkliga.se/JavaScript/api/simple.php?world'

class FetchData extends React.Component {
constructor(props) {
        super(props)
        this.state = {
            requestFailed: false,
            list: []
        }
}
   
    
componentDidMount() {    
    fetch(urlForWorldApi(this.props.list))
    .then(response => {
        if(!response.ok) {
            throw Error("Network request failed")
        }
        
        return response
    })
      .then(d => d.json())
      .then(d => {
        console.log(d);
        
        this.setState({
            list: d
        })
        //den skriver ut en lista med object där allt finns.
           
        console.log(d);
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
                    <CountryList list={this.state.list}/>
                </div>
            )
        }
    }
}

function CountryList(props) {

    const countryList = props.list.map((list, index) =>
            <li key={index} className='list-group-item'>{index + 1}. {list.name} - {list.continent}<button className='pull-right btn-danger' >Delete</button></li>
    );
    
    return (
        <div>
            <ul className='list-group'>
                {countryList}           
            </ul>
        </div>       
    );
}

ReactDOM.render(
  <FetchData />,
  document.getElementById('root')
);
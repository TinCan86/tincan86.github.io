class User extends React.Component {
  render() {
  let subscriberStatus = "Är proffs";
  let subscriberClass = "Proffs";
      
  if( this.props.subscribed != 'true') 
  {
    subscriberStatus = "Icke Proffs";
    subscriberClass = 'amatör';
  }
  
  //Sätter ihop koden till en variabel.
  var element = <div className={subscriberClass}>
  <strong>{this.props.name}</strong> <br/>
  {subscriberStatus}</div>;
  
  //Här returnerar vi koden som görs om till html-kod. 
  return element;
  }
}

//Här är render metoden som kallas i början av Class. börja alltid med html koden och därefter vart det ska vara. I detta fallet väljer vi Id users.
ReactDOM.render(
<div className="userList">
  <h3>Uppgift 1</h3>
  <User name="Robert Hansson" subscribed="true"/>
  <User name="Antonio Banderaz" subscribed="true"/>
  <User name="Erika Nyhlen" subscribed="false"/>
</div>,
  document.getElementById('users') 
);

    
ReactDOM.render(
    <div>
    <h3>Uppgift 2</h3>
    <p>{333 + 777}</p>
    </div>,
    document.getElementById('uppgift2')
);

const header3element = React.createElement(
    'h3',
    { className: 'header' },
    'Uppgift 3'
);

//uppgift 3
ReactDOM.render(
    <div>
    {header3element}
    <p>Andra elementet</p>
    <p>tredje elementet!</p>
    </div>,
    document.getElementById('uppgift3')
);

//Uppgift 4
function Welcome(props) {
  return <p>Hello, {props.name}</p>;
}

const element = <Welcome name="David" />;

ReactDOM.render(
    <div>
    <h3>Uppgift 4</h3>
    {element}
    </div>,
  document.getElementById('uppgift4')
);

//Övning 14, inlämningsuppgift! 




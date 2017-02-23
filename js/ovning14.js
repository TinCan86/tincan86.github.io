function AnimalList(props) {
    //har animals som är listan av djuren.
    //Index är viktig för att den ska läsa ut "unika" object hela tiden
    const animalList = props.animals.map((animal, index) =>
        <div key={index} className='well'>
            {index + 1}. {animal.name} = {animal.translation}
        </div>
    );
    return (
        <div>
            {animalList}
        </div>
    );
}

const animals = [
    { name: 'Cat', translation: 'Katt' },
    { name: 'Dog', translation: 'Hund' },
    { name: 'Tiger', translation: 'Tiger' },
    { name: 'Ant', translation: 'Myra' },
    { name: 'Bird', translation: 'Fågel' },
    { name: 'Eagle', translation: 'Örn' }
];

ReactDOM.render(
    <AnimalList animals={animals} />,
    document.getElementById('divAnimal')
);

function GameList(props) {
    
    //strukturen - elementet
    const gameList = props.games.map((game, index) =>
        <li key={index} className='list-group-item'> 
            {game.name} - {game.genre} - {game.price}kr
        </li>
    );
    //Här kan man ändra html dokumentet lite som man vill. 
    return (
        <ul className='list-group'>
            {gameList}
        </ul>
    );
}

const games = [
    { name: "Star Craft", genre: "Strategy", price: 399 },
    { name: "World of Warcraft", genre: "mmorpg", price: 99 },
    { name: "Grim Fandangoo", genre: "Click RPG", price: 99 },
    { name: "Dota 2", genre: "Strategy", price: 299 },
    { name: "Total War: Warhammer", genre: "Strategy", price: 300 },
    { name: "Super Mario", genre: "Plattform", price: 599 },
    { name: "Baldur's Gate", genre: "RPG", price: 499 },
    { name: "Final Fantasy V", genre: "RPG", price: 99 },
    { name: "The Witcher 3", genre: "RPG", price: 599 },
    { name: "Diablo", genre: "Hack'n'Slash", price: 199 }
];

ReactDOM.render(
    <GameList games={games} />,
    document.getElementById('root')
);
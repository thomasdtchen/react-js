const App = () => {
    const [pokemons, setPokemons] = React.useState([])
    console.log(pokemons)
    const [filteredPokemons, setFilteredPokemons] = React.useState([])

    console.log(" Before fetch")
    React.useEffect(
        () => {
            fetch("https://pokeapi.co/api/v2/pokemon")
            .then(res => res.json())
            .then(json => 
                {
                    //console.log(json.results)
                    json.results.map((result, index) => {
                        result.id = index + 1
                    })
                    setPokemons(json.results)
                    setFilteredPokemons(json.results)
                }
            )
        }, [])
    console.log(" After fetch")

    const onChangeHandler = event => {
        const comparedPokemons = pokemons.filter(
            pokemon => {
                return pokemon.name.includes(event.target.value)
            }
        )
        setFilteredPokemons(comparedPokemons)
    }

    return (
        <div>
            <h1>寳可夢</h1>
            <Input onChangeHandler={onChangeHandler}/>
            <Lists pokemonLists={filteredPokemons}/>
        </div>
    )
}
/*
class App extends React.Component{
    constructor(){
        console.log("== constructor ==")
        super()
        this.state = {
            pokemons: [],
            filteredPokemons: [],
        }
    }

    componentDidMount(){
        console.log("== component did mount ==")
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(res => res.json())
            .then(json => 
                {
                    //console.log(json.results)
                    json.results.map((result, index) => {
                        result.id = index + 1
                    })
                    this.setState(
                        () => {
                            return { 
                                pokemons: json.results, 
                                filteredPokemons: json.results, 
                            }
                        },
                        () => {
                            console.log(this.state) //print json results 
                        }
                    )
                    //console.log(this.state) //print []
                }
            )
    }

    onChangeHandler = event => {
        const comparedPokemons = this.state.pokemons.filter(
            pokemon => {
                return pokemon.name.includes(event.target.value)
            }
        )
        this.setState(
            () => {
                return { filteredPokemons: comparedPokemons }
            },
            () => {
                console.log(this.state.searching)
            }      
        )
    }

    render(){
        console.log("== render ==")
        return  (
            <div>
                <h1>寳可夢</h1>
                <Input onChangeHandler={this.onChangeHandler}/>
                <Lists pokemonLists={this.state.filteredPokemons}/>
            </div>
        )
    }
}
*/

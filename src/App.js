import React, { Component } from 'react';
import PokeCardList from './PokeCardList';
import Title from './Title';

function getStyles() {
    return {

    }
}

class App extends Component {

    render() {
        return (<div style={getStyles()}>
            <Title text="PokePoki" />
            <PokeCardList />
        </div>);
    }
}

export default App;

import React from 'react';
import {Row, Column} from 'hedron';
import PokeCard from './PokeCard';
import {pokeLink} from './Utils';

export default class PokeCardList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            poke : require('./pokedex.js')
        }
    }

    render() {
        let renderedList = this.state.poke.map((p) => (
            <Column lg={1}>
                <PokeCard name={p.name} image={pokeLink(p.image)} />
            </Column>
        ))

        return <Row divisions={6}>
            {renderedList}
        </Row>
    }
}
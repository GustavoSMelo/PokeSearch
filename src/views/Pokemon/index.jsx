import React from 'react';
import { View, Text, List } from 'react-native';
import IconF from 'react-native-vector-icons/Foundation';
import {
    Container,
    Sprite,
    FigureView,
    MarginView,
    ListItem,
    Bold,
} from './styled';

class Pokemon extends React.Component {
    static navigationOptions = {
        title: 'Informaçoes sobre o pokemon',
    };

    componentDidMount = () => {
        this.props.navigation.state.params.clearValues();
    };

    render() {
        const { pokemonData } = this.props.navigation.state.params;
        return (
            <Container>
                <FigureView>
                    <Sprite
                        source={{
                            uri: pokemonData.spritePokemon,
                        }}
                    ></Sprite>
                </FigureView>
                <MarginView>
                    <ListItem>
                        <Bold>Icon>Nome: </Bold>
                        <Text>{pokemonData.namePokemon}</Text>
                    </ListItem>

                    <ListItem>
                        <Bold>
                            <IconF name="list-number" />
                            Numero na dex:{' '}
                        </Bold>
                        <Text>#{pokemonData.numberDex}</Text>
                    </ListItem>

                    <ListItem>
                        <Bold>Tipo: </Bold>
                        <Text>{pokemonData.typePokemon}</Text>
                    </ListItem>

                    <ListItem>
                        <Bold>Items: </Bold>
                        {pokemonData.itensPokemon.map(item => (
                            <Text key={item.item.name}>{item.item.name}</Text>
                        ))}
                    </ListItem>

                    <ListItem>
                        <Bold>Moves: </Bold>
                        {pokemonData.movesPokemon.map(item => (
                            <Text key={item.move.name}> {item.move.name} </Text>
                        ))}
                    </ListItem>
                </MarginView>
            </Container>
        );
    }
}

export default Pokemon;

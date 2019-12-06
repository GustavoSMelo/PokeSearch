import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    ImageContainer,
    ImageBackground,
    TextCenter,
    ButtonSearch,
    ButtonText,
} from './styled';
import backgroundPokemon from '../../../assets/landing.jpg';

export default class Landing extends React.Component {
    static navigationOptions = {
        title: 'Boas vindas! ',
    };

    render() {
        return (
            <ImageBackground source={backgroundPokemon}>
                <ImageContainer>
                    <TextCenter>Seja bem-vindo ao PokeSearch</TextCenter>
                    <ButtonSearch
                        onPress={() => this.props.navigation.navigate('Search')}
                    >
                        <ButtonText>
                            {' '}
                            <Icon name="search" /> Pesquisar Pokemon
                        </ButtonText>
                    </ButtonSearch>
                </ImageContainer>
            </ImageBackground>
        );
    }
}

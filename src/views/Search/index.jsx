import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    StyleSheet,
    Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Pikachu from '../../../assets/pikachu.gif';
import api from '../../api/api';

const style = StyleSheet.create({
    header: {
        marginTop: 50,
        padding: 10,
        flexDirection: 'row',
    },

    inputPokemon: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        alignSelf: 'stretch',
        marginLeft: 10,
        height: 40,
        width: 270,
        padding: 5,
    },

    ButtonSearch: {
        marginRight: 30,
        marginLeft: 10,
        backgroundColor: '#0043ff',
        height: 40,
        width: 50,
        borderRadius: 10,
    },

    textButton: {
        color: '#fff',
        textAlign: 'center',
        paddingTop: 12,
    },

    loadingScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sizeImg: {
        width: 320,
        height: 256,
    },
});

class Search extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);

        this.state = {
            pokemonText: '',
            loading: false,
            data: {},
            hasValue: false,
        };

        this.handleChangeText = this.handleChangeText.bind(this);
        this.loadingScreen = this.loadingScreen.bind(this);
        this.clearValues = this.clearValues.bind(this);
    }

    handleChangeText = async pokemonText =>
        await this.setState({ pokemonText });

    //handleShow = () => alert(this.state.loading);

    loadingScreen = () => {
        if (this.state.loading === true) {
            return (
                <View style={style.loadingScreen}>
                    <Text>Buscando na dex... Aguarde </Text>
                    <Image source={Pikachu} style={style.sizeImg}></Image>
                </View>
            );
        }
    };

    handleSearchPokemon = async () => {
        Keyboard.dismiss();
        await this.setState({ loading: true });

        try {
            const response = await api.get(
                this.state.pokemonText.toLowerCase()
            );

            await this.setState({
                data: {
                    numberDex: response.data.id,
                    namePokemon: response.data.forms[0].name,
                    spritePokemon: response.data.sprites.front_default,
                    typePokemon: response.data.types,
                    movesPokemon: response.data.moves,
                    abilityPokemon: response.data.abilities,
                    stats: response.data.stats,
                },
            });

            await this.setState({ loading: false, hasValue: true });
        } catch {
            alert('Pokemon not found in the dex ');
            await this.setState({ loading: false });
        }
    };

    pokemonTab = () => {
        if (this.state.hasValue === true) {
            this.props.navigation.navigate('Pokemon', {
                pokemonData: this.state.data,
                clearValues: this.clearValues,
            });
        }
    };

    clearValues = async () => {
        this.setState({ hasValue: false, pokemonText: '' });
    };

    render() {
        return (
            <>
                <View style={style.header}>
                    <TextInput
                        style={style.inputPokemon}
                        placeholder="Insira o nome do pokemon aqui! "
                        onChangeText={pokemonText =>
                            this.handleChangeText(pokemonText)
                        }
                        value={this.state.pokemonText}
                    />
                    <TouchableOpacity
                        onPress={this.handleSearchPokemon}
                        style={style.ButtonSearch}
                    >
                        <Text style={style.textButton}>
                            <Icon name="search" />
                        </Text>
                    </TouchableOpacity>
                </View>

                {this.loadingScreen()}
                {this.pokemonTab() &&
                    this.setState({ hasValue: false, pokemonText: '' })}
            </>
        );
    }
}

export default Search;

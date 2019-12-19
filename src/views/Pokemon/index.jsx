import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import IconF from 'react-native-vector-icons/Foundation';
import {
    Container,
    Sprite,
    FigureView,
    MarginView,
    ListItem,
    TypeSteel,
    TypePsych,
    TypeBug,
    TypeDark,
    TypeDragon,
    TypeElectric,
    TypeFairy,
    TypeFight,
    TypeFire,
    TypeFly,
    TypeGhost,
    TypeGrass,
    TypeGround,
    TypeIce,
    TypeNormal,
    TypePoison,
    TypeRock,
    TypeWater,
    TypeContainer,
    TypeText,
    ContainerTitle,
    Bold,
    ContainerText,
    StrongTitle,
} from './styled';

class Pokemon extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: <></>,
        };

        this.returnType = this.returnType.bind(this);
    }
    static navigationOptions = {
        header: null,
    };

    componentDidMount = () => {
        this.props.navigation.state.params.clearValues();
    };

    returnType = item => {
        if (item === 'steel') {
            return (
                <TypeSteel key={item}>
                    <ContainerText>
                        <TypeText>{item}</TypeText>
                    </ContainerText>
                </TypeSteel>
            );
        } else if (item === 'psychic') {
            return (
                <TypePsych key={item}>
                    <ContainerText>
                        <TypeText>{item}</TypeText>
                    </ContainerText>
                </TypePsych>
            );
        } else if (item === 'fire') {
            return (
                <TypeFire key={item}>
                    <ContainerText>
                        <TypeText>{item}</TypeText>
                    </ContainerText>
                </TypeFire>
            );
        } else if (item === 'flying') {
            return (
                <TypeFly key={item}>
                    <ContainerText>
                        <TypeText>{item}</TypeText>
                    </ContainerText>
                </TypeFly>
            );
        } else if (item === 'ghost') {
            return (
                <TypeGhost key={item}>
                    <ContainerText>
                        <TypeText>{item}</TypeText>
                    </ContainerText>
                </TypeGhost>
            );
        } else if (item === 'bug') {
            return (
                <TypeBug key={item}>
                    <ContainerText>
                        <TypeText>{item}</TypeText>
                    </ContainerText>
                </TypeBug>
            );
        } else if (item === 'fairy') {
            return (
                <TypeFairy key={item}>
                    <ContainerText>
                        <TypeText>{item}</TypeText>
                    </ContainerText>
                </TypeFairy>
            );
        } else if (item === 'dragon') {
            return (
                <TypeDragon key={item}>
                    <ContainerText>
                        <TypeText>{item}</TypeText>
                    </ContainerText>
                </TypeDragon>
            );
        } else if (item === 'poison') {
            return (
                <TypePoison key={item}>
                    <ContainerText>
                        <TypeText>{item}</TypeText>
                    </ContainerText>
                </TypePoison>
            );
        } else if (item === 'normal') {
            return (
                <TypeNormal key={item}>
                    <ContainerText>
                        <TypeText>{item}</TypeText>
                    </ContainerText>
                </TypeNormal>
            );
        } else if (item === 'fighting') {
            return (
                <TypeFight key={item}>
                    <ContainerText>
                        <TypeText>{item}</TypeText>
                    </ContainerText>
                </TypeFight>
            );
        } else if (item === 'water') {
            return (
                <TypeWater key={item}>
                    <ContainerText>
                        <TypeText>{item}</TypeText>
                    </ContainerText>
                </TypeWater>
            );
        } else if (item === 'grass') {
            return (
                <TypeGrass key={item}>
                    <ContainerText>
                        <TypeText>{item}</TypeText>
                    </ContainerText>
                </TypeGrass>
            );
        } else if (item === 'ground') {
            return (
                <TypeGround key={item}>
                    <ContainerText>
                        <TypeText>{item}</TypeText>
                    </ContainerText>
                </TypeGround>
            );
        } else if (item === 'dark') {
            return (
                <TypeDark key={item}>
                    <ContainerText>
                        <TypeText>{item}</TypeText>
                    </ContainerText>
                </TypeDark>
            );
        } else if (item === 'ice') {
            return (
                <TypeIce key={item}>
                    <ContainerText>
                        <TypeText>{item}</TypeText>
                    </ContainerText>
                </TypeIce>
            );
        } else if (item === 'electric') {
            return (
                <TypeElectric key={item}>
                    <ContainerText>
                        <TypeText>{item}</TypeText>
                    </ContainerText>
                </TypeElectric>
            );
        } else if (item === 'rock') {
            return (
                <TypeRock key={item}>
                    <ContainerText>
                        <TypeText>{item}</TypeText>
                    </ContainerText>
                </TypeRock>
            );
        }
    };

    returnColorTitle = (item, name) => {
        if (item === 'steel') {
            return (
                <TypeSteel>
                    <ContainerTitle>
                        <Bold>{name}</Bold>
                    </ContainerTitle>
                </TypeSteel>
            );
        } else if (item === 'psychic') {
            return (
                <TypePsych>
                    <ContainerTitle>
                        <Bold>{name}</Bold>
                    </ContainerTitle>
                </TypePsych>
            );
        } else if (item === 'fire') {
            return (
                <TypeFire>
                    <ContainerTitle>
                        <Bold>{name}</Bold>
                    </ContainerTitle>
                </TypeFire>
            );
        } else if (item === 'flying') {
            return (
                <TypeFly>
                    <ContainerTitle>
                        <Bold>{name}</Bold>
                    </ContainerTitle>
                </TypeFly>
            );
        } else if (item === 'ghost') {
            return (
                <TypeGhost>
                    <ContainerTitle>
                        <Bold>{name}</Bold>
                    </ContainerTitle>
                </TypeGhost>
            );
        } else if (item === 'bug') {
            return (
                <TypeBug>
                    <ContainerTitle>
                        <Bold>{name}</Bold>
                    </ContainerTitle>
                </TypeBug>
            );
        } else if (item === 'fairy') {
            return (
                <TypeFairy>
                    <ContainerTitle>
                        <Bold>{name}</Bold>
                    </ContainerTitle>
                </TypeFairy>
            );
        } else if (item === 'dragon') {
            return (
                <TypeDragon>
                    <ContainerTitle>
                        <Bold>{name}</Bold>
                    </ContainerTitle>
                </TypeDragon>
            );
        } else if (item === 'poison') {
            return (
                <TypePoison>
                    <ContainerTitle>
                        <Bold>{name}</Bold>
                    </ContainerTitle>
                </TypePoison>
            );
        } else if (item === 'normal') {
            return (
                <TypeNormal>
                    <ContainerTitle>
                        <Bold>{name}</Bold>
                    </ContainerTitle>
                </TypeNormal>
            );
        } else if (item === 'fighting') {
            return (
                <TypeFight>
                    <ContainerTitle>
                        <Bold>{name}</Bold>
                    </ContainerTitle>
                </TypeFight>
            );
        } else if (item === 'water') {
            return (
                <TypeWater>
                    <ContainerTitle>
                        <Bold>{name}</Bold>
                    </ContainerTitle>
                </TypeWater>
            );
        } else if (item === 'grass') {
            return (
                <TypeGrass>
                    <ContainerTitle>
                        <Bold>{name}</Bold>
                    </ContainerTitle>
                </TypeGrass>
            );
        } else if (item === 'ground') {
            return (
                <TypeGround>
                    <ContainerTitle>
                        <Bold>{name}</Bold>
                    </ContainerTitle>
                </TypeGround>
            );
        } else if (item === 'dark') {
            return (
                <TypeDark>
                    <ContainerTitle>
                        <Bold>{name}</Bold>
                    </ContainerTitle>
                </TypeDark>
            );
        } else if (item === 'ice') {
            return (
                <TypeIce>
                    <ContainerTitle>
                        <Bold>{name}</Bold>
                    </ContainerTitle>
                </TypeIce>
            );
        } else if (item === 'electric') {
            return (
                <TypeElectric>
                    <ContainerTitle>
                        <Bold>{name}</Bold>
                    </ContainerTitle>
                </TypeElectric>
            );
        } else if (item === 'rock') {
            return (
                <TypeRock>
                    <ContainerTitle>
                        <Bold>{name}</Bold>
                    </ContainerTitle>
                </TypeRock>
            );
        }
    };

    returnColorMenu = (item, name) => {
        if (item === 'steel') {
            return (
                <TypeSteel>
                    <StrongTitle>{name}</StrongTitle>
                </TypeSteel>
            );
        } else if (item === 'psychic') {
            return (
                <TypePsych>
                    <StrongTitle>{name}</StrongTitle>
                </TypePsych>
            );
        } else if (item === 'fire') {
            return (
                <TypeFire>
                    <StrongTitle>{name}</StrongTitle>
                </TypeFire>
            );
        } else if (item === 'flying') {
            return (
                <TypeFly>
                    <StrongTitle>{name}</StrongTitle>
                </TypeFly>
            );
        } else if (item === 'ghost') {
            return (
                <TypeGhost>
                    <StrongTitle>{name}</StrongTitle>
                </TypeGhost>
            );
        } else if (item === 'bug') {
            return (
                <TypeBug>
                    <StrongTitle>{name}</StrongTitle>
                </TypeBug>
            );
        } else if (item === 'fairy') {
            return (
                <TypeFairy>
                    <StrongTitle>{name}</StrongTitle>
                </TypeFairy>
            );
        } else if (item === 'dragon') {
            return (
                <TypeDragon>
                    <StrongTitle>{name}</StrongTitle>
                </TypeDragon>
            );
        } else if (item === 'poison') {
            return (
                <TypePoison>
                    <StrongTitle>{name}</StrongTitle>
                </TypePoison>
            );
        } else if (item === 'normal') {
            return (
                <TypeNormal>
                    <StrongTitle>{name}</StrongTitle>
                </TypeNormal>
            );
        } else if (item === 'fighting') {
            return (
                <TypeFight>
                    <StrongTitle>{name}</StrongTitle>
                </TypeFight>
            );
        } else if (item === 'water') {
            return (
                <TypeWater>
                    <StrongTitle>{name}</StrongTitle>
                </TypeWater>
            );
        } else if (item === 'grass') {
            return (
                <TypeGrass>
                    <StrongTitle>{name}</StrongTitle>
                </TypeGrass>
            );
        } else if (item === 'ground') {
            return (
                <TypeGround>
                    <StrongTitle>{name}</StrongTitle>
                </TypeGround>
            );
        } else if (item === 'dark') {
            return (
                <TypeDark>
                    <StrongTitle>{name}</StrongTitle>
                </TypeDark>
            );
        } else if (item === 'ice') {
            return (
                <TypeIce>
                    <StrongTitle>{name}</StrongTitle>
                </TypeIce>
            );
        } else if (item === 'electric') {
            return (
                <TypeElectric>
                    <StrongTitle>{name}</StrongTitle>
                </TypeElectric>
            );
        } else if (item === 'rock') {
            return (
                <TypeRock>
                    <StrongTitle>{name}</StrongTitle>
                </TypeRock>
            );
        }
    };

    render() {
        const { pokemonData } = this.props.navigation.state.params;
        return (
            <ScrollView>
                {this.returnColorTitle(
                    pokemonData.typePokemon[0].type.name,
                    pokemonData.namePokemon
                )}

                <FigureView>
                    <Sprite
                        source={{
                            uri: pokemonData.spritePokemon,
                        }}
                    ></Sprite>
                </FigureView>

                <TypeContainer>
                    {pokemonData.typePokemon.map(item =>
                        this.returnType(item.type.name)
                    )}
                </TypeContainer>

                <Container>
                    {this.returnColorMenu(
                        pokemonData.typePokemon[0].type.name,
                        'Stats'
                    )}
                </Container>

                <MarginView>
                    {this.props.navigation.state.params.pokemonData.stats.map(
                        item => (
                            <ListItem key={item.stat.name}>
                                {item.stat.name}: {item.base_stat}
                            </ListItem>
                        )
                    )}
                </MarginView>

                <Container>
                    {this.returnColorMenu(
                        pokemonData.typePokemon[0].type.name,
                        'Abilities'
                    )}
                </Container>
                <MarginView>
                    {pokemonData.abilityPokemon.map(item => (
                        <ListItem key={item.ability.name}>
                            {item.ability.name}
                        </ListItem>
                    ))}
                </MarginView>

                <Container>
                    {this.returnColorMenu(
                        pokemonData.typePokemon[0].type.name,
                        'Moves'
                    )}
                </Container>

                <MarginView>
                    {pokemonData.movesPokemon.map(item => (
                        <ListItem key={item.move.name}>
                            {' '}
                            {item.move.name}{' '}
                        </ListItem>
                    ))}
                </MarginView>
            </ScrollView>
        );
    }
}

export default Pokemon;

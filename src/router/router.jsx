import Landing from '../views/Landing/index';
import Search from '../views/Search/index';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Pokemon from '../views/Pokemon/index';

const appNavigator = createStackNavigator(
    {
        Landing: {
            screen: Landing,
        },

        Search: {
            screen: Search,
        },

        Pokemon: {
            screen: Pokemon,
        },
    },
    {
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#C0C2F5',
            },

            headerTintColor: '#fff',
        },
    }
);

const Router = createAppContainer(appNavigator);

export default Router;

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Main from '../screens/main';
import Users from '../screens/users';

const screens = {
    Users: {
        screen: Users
    },
    Main: {
        screen: Main
    }
}

const MainStack = createStackNavigator(screens);

export default createAppContainer(MainStack);
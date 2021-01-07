import {createAppContainer} from 'react-navigation'
import {createStackNavigator, createDrawerNavigator} from 'react-navigation-stack'
import Main from '../../screens/Main';
import MainFood from '../../screens/MainFood';
import SubFood from '../../screens/SubFood';

// import SecondScreen from '../../screens/SecondScreen';


const stack = createStackNavigator({
    Main: {
        screen: Main,
        navigationOptions: ({navigation}) => ({
            headerShown: false,
            gestureEnabled: false,
        })
    },
    MainFood: {
        screen: MainFood,
        navigationOptions: ({navigation}) => ({
            headerShown: false,
            gestureEnabled: false,
        })
    },
    SubFood: {
        screen: SubFood,
        navigationOptions: ({navigation}) => ({
            headerShown: false,
            gestureEnabled: false,
        })
    },
})


const AppContainer =createAppContainer(stack)
export default AppContainer
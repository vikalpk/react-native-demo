import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

const navigator = createStackNavigator ({
  Search: SearchScreen,
},
{

  initialRouteName : 'Search',
  defultNavigationOptions : {
    title : "My Search App"

  }


});

export default createAppContainer(navigator);
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// import Lista from '../list-agenda/Lista'
import Agenda from './agenda'
// import Agenda2 from '../agenda2/Agenda2'
// import About from '../about/About'

const Tab = createBottomTabNavigator();

const Tabs = () => {
      return (
      <Tab.Navigator>
            {/* <Tab.Screen name="Lista" component={Lista} /> */}
            <Tab.Screen name="Agenda" component={Agenda} />
            {/* <Tab.Screen name="Agenda2" component={Agenda2} /> */}
            {/* <Tab.Screen name="About" component={About} /> */}
      </Tab.Navigator>
      )
}

export default Tabs
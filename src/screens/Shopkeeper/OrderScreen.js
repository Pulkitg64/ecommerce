import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const OrderScreen = () => {
	return(
    <View style={styles.container}>
    <Text>Order Screen</Text>
    </View>
	);
}

OrderScreen.navigationOptions = function({navigation}){

    return {
        title: 'Order Details',
        headerStyle: 
        {
            
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle:
           {
            fontWeight: 'bold',
          }        

    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'orange'
    }
});

export default OrderScreen;
import React from 'react'
import {Text,View,FlatList,StyleSheet,TouchableOpacity} from 'react-native'


const ShopList = function({navigation}){

    const shoplist = [
        
        {name: 'Shop #1',id: 1},
        {name: 'Shop #2',id: 2},
        {name: 'Shop #3',id: 3},
    ]
        
    return (
        <View>
        <FlatList
            data = {shoplist}
            keyExtractor = {function(shoplist){
                return shoplist.name
            }}

            renderItem = {function({item}){
                return(
                    <TouchableOpacity
                        onPress ={function(){
                            navigation.navigate('ShopD')
                        }}
                    >
                        <View style = {{height:200,backgroundColor: 'grey'}}>
                        </View>
                    <Text>{item.name}</Text>

                    </TouchableOpacity>
                )
            }}
        />
        </View>

    )

}

const styles = StyleSheet.create({

})

export default ShopList
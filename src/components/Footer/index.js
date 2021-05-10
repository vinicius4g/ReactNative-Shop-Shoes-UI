import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import Shoes from '../Shoes'

export default function Footer() {
    return (
        <View>
            <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
            <View style={{flexDirection: 'row'}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{marginHorizontal: 10}}>
                        <Shoes img={require('../../assets/1.png')} cost="149,90">
                            Nike Air Max Dia
                        </Shoes>
                    </View>
                    <View style={{marginHorizontal: 10}}>
                        <Shoes img={require('../../assets/3.png')} cost="149,90">
                            Adidas Squidward Tentacles
                        </Shoes>
                    </View>
                    <View style={{marginHorizontal: 10}}>
                        <Shoes img={require('../../assets/4.png')} cost="389,90">
                            Adidas Downshifter 10
                        </Shoes>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%',  
    },
})
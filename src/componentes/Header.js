import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = (props) => {
    return (
        <View style={style.container}>
            <Text  style={style.title}>
               {props.title}
            </Text>
        </View>
    );
}

const style =  StyleSheet.create({
    container: {
		marginTop: 25,
		backgroundColor: 'black',

		alignItems: 'center',
        justifyContent: 'center'
	},
	title: {
		fontSize: 50,
		color: '#fff',
	}
})

export default Header;
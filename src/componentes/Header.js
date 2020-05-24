import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = (props) => {
    return (
        <View>
            <Text>
               {props.title}
            </Text>
        </View>
    );
}

export default Header;
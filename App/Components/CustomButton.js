import React, { Component } from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

const CustomButton = () => {
    return (
        <Button title="Add Product" onPress={() => alert("add product")} />
    );
}

export default CustomButton;

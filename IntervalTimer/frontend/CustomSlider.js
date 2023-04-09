import React from "react";
import { useContext } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { AppContext } from './AppContextProvider';
import Slider from '@react-native-community/slider';

export default function CustomSlider({type, state, setState, sliderStyle, isTime}) {

    const {formatTime} = useContext(AppContext);
    let valueLable = state;
    if(isTime) {
        valueLable = formatTime(valueLable);
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.label}>
                <Text>{type.label}</Text>
                <Text>{valueLable}</Text>
            </View>
            <Slider
                style={styles.slider}
                minimumValue={type.minValue}
                maximumValue={type.maxValue}
                value={state}
                step={1}
                onValueChange={(value) => setState(value)}
                minimumTrackTintColor={sliderStyle.secondary}
                thumbTintColor={sliderStyle.main}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginVertical: 10
    },
    label: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
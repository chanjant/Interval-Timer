import { React, useContext } from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import { AppContext } from './AppContextProvider';
import Icon from 'react-native-vector-icons/FontAwesome';
import { workSliderStyles, restSliderStyles, exercisesSliderStyles, roundsSliderStyles, roundRestSliderStyles } from './styles/SliderStyles';
import { work, rest, exercises, rounds, roundRest } from './DefaultSettings';
import CustomSlider from './CustomSlider';
import { styles } from './styles/LaunchStyles';


export default function Launch({navigation}) {

const {slider, handleSlider} = useContext(AppContext);

function calculateTotalTime() {
  const totalSec = (((slider.work + slider.rest) * slider.exercises) + slider.roundRest) * slider.rounds;
  let hours = Math.floor(totalSec / 3600)
  let minutes = Math.floor((totalSec % 3600) / 60)
  let seconds = totalSec % 60

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return `${hours}:${minutes}:${seconds}`
}

function handleOnPress() {
  //Navigate to Timer screen on start button press
  navigation.navigate('Timer');
}

  return (
  <View style={styles.container}> 
    <View style={styles.infoContainer}>
      <Text style={styles.time}>{calculateTotalTime()}</Text>
    </View>
    <TouchableOpacity style={styles.buttonContainer} onPress={handleOnPress} activeOpacity={0.9}>
      <Icon style={styles.playButton} name="play" size={50}/>    
    </TouchableOpacity>
    <View style={styles.sliderContainer}>
      <CustomSlider 
        type={work}
        state={slider.work} 
        setState={(value) => handleSlider('work', value)} 
        sliderStyle={workSliderStyles}
        isTime={true}/>
      <CustomSlider 
        type={rest}
        state={slider.rest} 
        setState={(value) => handleSlider('rest', value)} 
        sliderStyle={restSliderStyles}
        isTime={true}/>
      <CustomSlider 
        type={exercises} 
        state={slider.exercises} 
        setState={(value) => handleSlider('exercises', value)} 
        sliderStyle={exercisesSliderStyles}/>
      <CustomSlider 
        type={rounds}
        state={slider.rounds} 
        setState={(value) => handleSlider('rounds', value)} 
        sliderStyle={roundsSliderStyles}/>
      <CustomSlider 
        type={roundRest}
        state={slider.roundRest} 
        setState={(value) => handleSlider('roundRest', value)} 
        sliderStyle={roundRestSliderStyles}
        isTime={true}/>
    </View>
  </View>    
  );
}


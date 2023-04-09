import { React, useState, useContext, useEffect } from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { AppContext } from './AppContextProvider';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { workSliderStyles, restSliderStyles, roundRestSliderStyles } from './styles/SliderStyles';
import { styles } from './styles/TimerStyles';

export default function Timer({navigation}) {

  const INTERVALS = {
    WORK: "WORK",
    REST: "REST",
    ROUND_REST: "ROUND REST"
  }

  function onComplete(){
    //Navigate back to Launch screen
    navigation.navigate('Launch');
  };

  const { slider, formatTime } = useContext(AppContext);
  const [isRunning, setIsRunning] = useState(true);
  const [currentInterval, setCurrentInterval] = useState(INTERVALS.WORK);
  const [currentTime, setCurrentTime] = useState(slider.work);
  const [currentExercise, setCurrentExercise] = useState(1);
  const [currentRound, setCurrentRound] = useState(1);
  const [duration, setDuration] = useState(slider.work);
  const [color, setColor] = useState(workSliderStyles);
  

  function switchToWork() {
    setCurrentInterval(INTERVALS.WORK);
    setCurrentTime(slider.work);
    setDuration(slider.work);
    setColor(workSliderStyles)
  }
  
  useEffect(() => {
    if(!isRunning) {
      return;
    }

    const interval = setInterval(() => {
     setCurrentTime((prevTime) => {
      if(prevTime > 1) {
        return prevTime - 1;
      } else {
        //End of interval, switch to next one
        switch(currentInterval){
          case INTERVALS.WORK:
            // Switch to rest
            setCurrentInterval(INTERVALS.REST);
            setCurrentTime(slider.rest);
            setDuration(slider.rest);
            setColor(restSliderStyles);
            break;
          case INTERVALS.REST:
            if(currentExercise === slider.exercises){
              //End of last exercise of current round, switch to round rest
              setCurrentInterval(INTERVALS.ROUND_REST);
              setCurrentTime(slider.roundRest);
              setDuration(slider.roundRest);
              setColor(roundRestSliderStyles);
            } else {
              //Switch to work
              setCurrentExercise((prevExercise) => prevExercise + 1);
              switchToWork();
            }         
            break;
          case INTERVALS.ROUND_REST:
            if(currentRound === slider.rounds && currentExercise === slider.exercises) {
              //End of last exercise of last round, clear timer and navigate back to launch
              clearInterval(interval)
              onComplete();
            } else {
              //Start a new round
              switchToWork();
              setCurrentExercise(1);
              setCurrentRound((prevRound) => prevRound + 1);
            }
            break;
        }
        return prevTime
      }
     })
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, currentInterval, currentExercise, currentRound, currentTime]);

  function resumeTimer() {
    setIsRunning(false);
  }

  function pauseTimer() {
    setIsRunning(true);
  }

    return (
        <View style={[styles.container, {backgroundColor:color.secondary}]}>
          <View style={styles.statusContainer}>
            <View style={styles.statusBox}>
              <Text style={[{color:color.main}, {fontFamily: 'Impact'}, {fontSize: 18}]}>Round</Text>
              <Text style={[{color:color.main}, {fontFamily: 'Impact'}, {fontSize: 18}]}>{currentRound}/{slider.rounds}</Text>
            </View>
            <View style={styles.statusBox}>
              <Text style={[{color:color.main}, {fontFamily: 'Impact'}, {fontSize: 18}]}>Exercise</Text>
              <Text style={[{color:color.main}, {fontFamily: 'Impact'}, {fontSize: 18}]}>{currentExercise}/{slider.exercises}</Text>
            </View>
          </View>
          <View style={styles.timerContainer}>
            <CountdownCircleTimer
              isPlaying={isRunning}
              key={currentInterval}
              duration={duration}
              size={330}
              strokeWidth={10}
              trailStrokeWidth={5}
              colors={color.main}
              trailColor={'rgba(255, 248, 243, .5)'}
              rotation='counterclockwise'
              children={()=> {
                const time = formatTime(currentTime)
                return (
                <View>
                  <Text style={[styles.circularText, {color: color.main}, {fontSize: 80}]}>{time}</Text>
                  <Text style={[styles.circularText, {color: color.main}, {fontSize: 35}]}>{currentInterval}</Text>
                </View>  
                )
              }}
              onComplete={() => {
                return {shouldRepeat: true, delay: 1}
              }}
            />
            <TouchableOpacity onPress={isRunning ? resumeTimer : pauseTimer} style={[styles.buttonContainer, {backgroundColor:color.main}]} activeOpacity={0.9}>
              <Icon  name={isRunning ? "pause" : "play"}  size={50} style={isRunning ? styles.pauseButton : styles.playButton}/>  
            </TouchableOpacity>   
            </View>
        </View>
    )
}


  

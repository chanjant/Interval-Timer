import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: 'rgb(163, 228, 219)',
      flex: 1,
    },
    infoContainer: {
      flex: 3.5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    time: {
      color: 'rgb(255, 248, 243)',
      fontSize: 60,
      fontFamily: 'Impact',
      textAlign: 'center',
      marginTop: 'auto',
      marginBottom: 'auto',
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: '35%',
      left: '50%',
      transform: [{translateX: -50}, {translateY: -50}],
      width: 90,
      height: 90,
      borderRadius: 60,
      backgroundColor: 'rgb(255, 248, 243)',
      zIndex: 1,
      borderRadius: 100,
      borderWidth: 6,
      borderColor: 'rgb(163, 228, 219)',
    },
    playButton: {
      zIndex: 1,
      marginLeft: '13%',
      color: 'rgb(163, 228, 219)',
    },
    sliderContainer: {
      flex:6.5,
      justifyContent: 'space-evenly',
      backgroundColor: 'rgb(255, 248, 243)',
      borderTopLeftRadius: 37,
      borderTopRightRadius: 37,
      paddingBottom: 15,
      paddingTop: 23,
    },
  });
  
  
  
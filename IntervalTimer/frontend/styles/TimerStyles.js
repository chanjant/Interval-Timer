import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: 1,
    }, 
    statusContainer:{
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '100%',
        marginTop: 10,
    },
    statusBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        height: 50,
        borderRadius: 5,
        borderColor: 'rgba(255, 248, 243, .5)',
        borderWidth: 1,
        marginVertical: 5,
        marginHorizontal: 10,
    },
    timerContainer: {
        flex: 8,
        justifyContent:'space-evenly',
        alignItems: 'center',
    },
    circularText: {
        fontFamily: 'Impact',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 90,
        height: 90,
        borderRadius: 60,
        zIndex: 1,
    },
    playButton: {
        zIndex: 1,
        marginLeft: '13%',
        color: 'rgba(255, 248, 243,0.9)',
    },
    pauseButton: {
        zIndex: 1,
        marginHorizontal: 'auto',
        color: 'rgba(255, 248, 243,0.9)',
    }
  });
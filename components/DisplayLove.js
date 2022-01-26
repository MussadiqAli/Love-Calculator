import React from 'react';
import { StyleSheet, Text, View, Alert, Image } from 'react-native';


const DisplayLove = (props) => {
    if(props.data === ''){
        return(
            <Text></Text>
        )
    }
    else if(props.data === 'loading'){
        return(
            <Text style={styles.text}>Please wait...</Text>
        )
    }else{
        return(
            <View style={styles.container}>
                <Text style={styles.text}>{props.data.percentage} %</Text>
                <Text style={styles.text}>{props.data.result}</Text>
            </View>
        )
    }
}

export default DisplayLove;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    text: {
     fontSize:20,
     textAlign: 'center',
     marginTop: 10
    }
  });
  
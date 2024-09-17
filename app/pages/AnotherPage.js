import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';

export default function AnotherPage({ onCorrectAnswer }) {
  const handleOptionPress = (option) => {
    if (option === 'TIGER') {
      Alert.alert('Correct', 'You are correct!!!', [{ text: 'OK', onPress: onCorrectAnswer }]); // Call the callback on correct answer
    } else {
      Alert.alert('Incorrect', 'The national animal of India is Tiger', [{ text: 'OK' }]);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>


        {/* Yellow Box */}
        <View style={styles.yellowBox}>
          <Text style={styles.yellowBoxText}>UNIT 1</Text>
        </View>

        {/* Question Text */}
        <Text style={styles.questionText}>Q) WHAT IS THE NATIONAL ANIMAL</Text>






        {/* Lion Image */}
        <Image
          source={require('../../assets/images/main/lion2.png')} // Ensure you have the correct path to the lion image
          style={styles.lionImage}
        />


        {/* White Line */}
        <View style={styles.whiteLine} />



        {/* Options */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={styles.optionBox}
            onPress={() => handleOptionPress('ELEPHANT')}
          >
            <Text style={styles.optionText}>ELEPHANT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionBox}
            onPress={() => handleOptionPress('TIGER')}
          >
            <Text style={styles.optionText}>TIGER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionBox}
            onPress={() => handleOptionPress('COW')}
          >
            <Text style={styles.optionText}>COW</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionBox}
            onPress={() => handleOptionPress('PEACOCK')}
          >
            <Text style={styles.optionText}>PEACOCK</Text>
          </TouchableOpacity>
        </View>




        {/* Hint */}
        <Text style={styles.hintText}>INDIA'S NATIONAL ANIMAL REPRESENTS STRENGTH</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#131E22',
    padding: 20,
  },

  // Yellow Box
  yellowBox: {
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  yellowBoxText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  // Question Text
  questionText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },

  // Lion Image
  lionImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },

  // White Line
  whiteLine: {
    height: 2,
    backgroundColor: '#fff',
    marginVertical: 20,
  },

  // Options Container
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  optionBox: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    width: '45%',
    marginVertical: 5,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 14,
    color: '#000',
  },

  // Hint Text
  hintText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
});

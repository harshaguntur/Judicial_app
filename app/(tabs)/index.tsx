import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native';
import React, { useState, useRef } from 'react';
import Svg, { Path } from 'react-native-svg';
import AnotherPage from '../pages/AnotherPage';

export default function TabOneScreen() {
  const [navigated, setNavigated] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const boxRef = useRef(null);

  const handleTouchOutside = (event) => {
    if (boxRef.current) {
      const box = boxRef.current;
      box.measure((x, y, width, height, pageX, pageY) => {
        const touchPosition = {
          x: event.nativeEvent.pageX,
          y: event.nativeEvent.pageY,
        };

        if (
          touchPosition.x < pageX ||
          touchPosition.x > pageX + width ||
          touchPosition.y < pageY ||
          touchPosition.y > pageY + height
        ) {
          setShowBox(false);
        }
      });
    }
  };

  const handleNavigateToAnotherPage = () => {
    setNavigated(true);
  };

  if (navigated) {
    return <AnotherPage onCorrectAnswer={() => setNavigated(false)} />;
  }

  return (
    <TouchableWithoutFeedback onPress={handleTouchOutside}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Svg style={styles.svg}>
            <Path
              d="M100,50 C150,100 50,150 150,200 C50,250 150,300 50,350 C150,400 50,450 150,500"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10,5"
              transform="rotate(30 90 130)"
            />
          </Svg>

          <Image
            source={require('../../assets/images/main/lion2.png')}
            style={styles.lion1}
          />
          <TouchableOpacity onPress={() => setShowBox(true)}>
            <Image
              source={require('../../assets/images/main/island1.png')}
              style={styles.island1}
            />
          </TouchableOpacity>

          <Image
            source={require('../../assets/images/main/chest.png')}
            style={styles.chest}
          />

          <Image
            source={require('../../assets/images/main/island3.png')}
            style={styles.island2}
          />

          {showBox && (
            <TouchableWithoutFeedback>
              <View style={styles.box} ref={boxRef}>
                <Text style={styles.boxTitle}>Unit 1:</Text>
                <Text style={styles.boxSubtitle}>Fundamental Law</Text>
                <TouchableOpacity
                  style={styles.startButton}
                  onPress={handleNavigateToAnotherPage}
                >
                  <Text style={styles.buttonText}>Start</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          )}
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
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
  },
  lion1: {
    position: 'absolute',
    top: 80,
    left: 50,
    height: 150,
    width: 150,
  },
  island1: {
    position: 'absolute',
    top: 40,
    right: 0,
    height: 250,
    width: 250,
  },
  chest: {
    position: 'absolute',
    top: 270,
    left: '30%',
    height: 150,
    width: 150,
    zIndex: 1,
  },
  island2: {
    position: 'absolute',
    bottom: 0,
    left: '1%',
    height: 250,
    width: 250,
  },
  svg: {
    position: 'absolute',
    top: 170,
    left: 100,
    width: '100%',
    height: '45%',
  },
  box: {
    position: 'absolute',
    top: 10,
    right: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    width: 160,
    alignItems: 'center',
  },
  boxTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  boxSubtitle: {
    fontSize: 14,
    marginVertical: 5,
  },
  startButton: {
    backgroundColor: '#007bff',
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});

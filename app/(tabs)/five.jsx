import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default function FullScreenImage() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/main/five.jpg')}
        style={styles.fullScreenImage}
        resizeMode="cover" 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', },
  fullScreenImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

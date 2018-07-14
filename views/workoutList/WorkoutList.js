import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'HIIT'},
            {key: 'Yoga'},
            {key: 'Badminton'},
            {key: 'Kettlebells'},
            {key: 'Swimming'}
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 22,
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
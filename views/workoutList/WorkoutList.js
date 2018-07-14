import React from 'react'
import { StyleSheet, FlatList, Text, View, Button } from 'react-native'
import { connect } from 'react-redux'

export class WorkoutList extends React.Component {
  constructor(props) {
    super(props)
    this.renderItem = this.renderItem.bind(this)
  }

  renderItem({ item }) {
    return (
      <View style={styles.item}>
        <Button
          onPress={() => { /* TODO */ }}
          title={item.key}
        />
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Choose a workout:</Text>
        <FlatList
          data={[
            {key: 'HIIT'},
            {key: 'Yoga'},
            {key: 'Badminton'},
            {key: 'Kettlebells'},
            {key: 'Swimming'}
          ]}
          renderItem={this.renderItem}
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
    height: 44,
  },
})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutList);
import React from 'react'
import { StyleSheet, FlatList, Text, TextInput, View, Button } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export class WorkoutDetail extends React.Component {
  constructor(props) {
    super(props)
    this.renderItem = this.renderItem.bind(this)
  }

  renderItem({ item }) {
    return (
      <Text style={styles.item}>{item}</Text>
    )
  }

  render() {
    const { title, participants } = this.props

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 25 }}>{title}</Text>
        <View style={styles.addParticipantContainer}>
          <TextInput
            style={styles.addInput}
            placeholder="Add participant"
            onChangeText={text => this.setState({text})}
          />
          <Button
            title="Add"
            onPress={() => { /* TODO */ }}
          />
        </View>
        <FlatList
          data={participants}
          keyExtractor={(item, index) => index.toString()}
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
  addParticipantContainer: {
    flexDirection: 'row',
    padding: 20
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  addInput: {
    height: 40,
    width: 150
  }
})

WorkoutDetail.propTypes = {
  title: PropTypes.string.isRequired,
  participants: PropTypes.arrayOf(PropTypes.string)
}

WorkoutDetail.defaultProps = {
  participants: []
}

export default connect(state => {
  console.log('detail state', state)
  const workoutId = state.view
  const { title, participants } = state.workouts[workoutId]
  return {
    title,
    participants
  }
})(WorkoutDetail)
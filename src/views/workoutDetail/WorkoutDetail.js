import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, FlatList, Text, TextInput, View, Button } from 'react-native'
import { addParticipant } from '../../reducer'

export class WorkoutDetail extends React.Component {
  constructor(props) {
    super(props)
    this.renderItem = this.renderItem.bind(this)
    this.handleOnInputChange = this.handleOnInputChange.bind(this)
    this.handleOnButtonPress = this.handleOnButtonPress.bind(this)

    this.state = {
      newParticipant: ''
    }
  }

  handleOnInputChange(input) {
    this.setState({ newParticipant: input })
  }

  handleOnButtonPress() {
    const { workoutId, addParticipant } = this.props
    const { newParticipant } = this.state

    addParticipant({ workoutId, participant: newParticipant })
  }

  renderItem({ item }) {
    return (
      <Text style={styles.item}>{item}</Text>
    )
  }

  render() {
    const { title, participants } = this.props
    const { newParticipant } = this.state

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 25 }}>{title}</Text>
        <View style={styles.addParticipantContainer}>
          <TextInput
            style={styles.addInput}
            placeholder="Add participant"
            onChangeText={this.handleOnInputChange}
          />
          <Button
            title="Add"
            onPress={this.handleOnButtonPress}
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
  workoutId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  addParticipant: PropTypes.func.isRequired,
  participants: PropTypes.arrayOf(PropTypes.string),
}

WorkoutDetail.defaultProps = {
  participants: []
}

const mapStateToProps = state => {
  const workoutId = state.view
  const { title, participants } = state.workouts[workoutId]
  return {
    workoutId,
    title,
    participants
  }
}

const mapDispatchToProps = dispatch => ({
  addParticipant: payload => { dispatch(addParticipant(payload)) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutDetail)
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, FlatList, Text, TextInput, View, Button } from 'react-native'
import { addParticipant, changeView } from '../../redux/actions'

export class WorkoutDetail extends React.Component {
  constructor(props) {
    super(props)
    this.renderItem = this.renderItem.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleAddButtonPress = this.handleAddButtonPress.bind(this)
    this.handleBackButtonPress = this.handleBackButtonPress.bind(this)

    this.state = {
      name: ''
    }
  }

  handleInputChange(input) {
    this.setState({ name: input })
  }

  handleAddButtonPress() {
    const { workoutId, addParticipant } = this.props
    const { name } = this.state

    addParticipant({ workoutId, name })
  }

  handleBackButtonPress() {
    const { changeViewToList } = this.props

    changeViewToList()
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
            onChangeText={this.handleInputChange}
          />
          <Button
            title="Add"
            onPress={this.handleAddButtonPress}
          />
        </View>
        <FlatList
          data={participants}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}
        />
        <Button
          title="Back"
          onPress={this.handleBackButtonPress}
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
  changeViewToList: PropTypes.func.isRequired,
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
  addParticipant: payload => { dispatch(addParticipant(payload)) },
  changeViewToList: () => { dispatch(changeView('workoutList')) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutDetail)
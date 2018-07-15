import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import WorkoutList from '../workoutList/WorkoutList'
import WorkoutDetail from '../workoutDetail/WorkoutDetail'

export class App extends Component {
  render() {
    // you would probably use some sort of navigation library instead of this...
    const currentView = this.props.currentView
    
    return (
      <View style={styles.container}>
        { (currentView === 'workoutList')
          ? <WorkoutList />
          : <WorkoutDetail />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  }
})

App.propTypes = {
  currentView: PropTypes.string.isRequired
}

export default connect(state => ({
  currentView: state.view
}))(App)

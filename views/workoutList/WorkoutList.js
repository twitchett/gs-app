import React from 'react'
import { StyleSheet, FlatList, Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import { changeView } from '../../reducer'
import PropTypes from 'prop-types'

export class WorkoutList extends React.Component {
  constructor(props) {
    super(props)
    this.renderItem = this.renderItem.bind(this)
  }

  renderItem({ item }) {
    const { changeView } = this.props

    return (
      <View style={styles.item}>
        <Button
          title={item.title}
          onPress={() => changeView(item.key)}
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
            {title: 'HIIT', key: 'hiit'},
            {title: 'Yoga', key: 'yoga'},
            {title: 'Badminton', key: 'badminton'},
            {title: 'Kettlebells', key: 'kettlebells'},
            {title: 'Swimming', key: 'swimming'}
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

WorkoutList.propTypes = {
  changeView: PropTypes.func.isRequired
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
  changeView: view => { dispatch(changeView(view)) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutList)
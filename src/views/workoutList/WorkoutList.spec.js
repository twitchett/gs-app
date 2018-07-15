import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { WorkoutList } from './WorkoutList'

describe('WorkoutList', () => {
  const defaultProps = {
    changeView: () => {}
  }

  it('renders the component', () => {
    const tree = renderer.create(<WorkoutList {...defaultProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('calls changeView when a workout button is pressed', () => {
    const props = {
      changeView: jest.fn()
    }
    const wrapper = mount(<WorkoutList {...props} />)
    const button = wrapper.find('Button')
      .first()  // not good!
      .props()
      .onPress()

    wrapper.update()

    expect(props.changeView).toHaveBeenCalledTimes(1)
    expect(props.changeView).toHaveBeenCalledWith("hiit")
  })
})

import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { WorkoutDetail } from './WorkoutDetail'

describe('WorkoutDetail', () => {
  const defaultProps = {
    workoutId: 'running',
    title: 'Running',
    addParticipant: () => {},
    changeViewToList: () => {},
  }

  it('renders the component', () => {
    const tree = renderer.create(<WorkoutDetail {...defaultProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('displays the list of participants', () => {
    const props = {
      ...defaultProps,
      participants: ['Kim', 'Tim', 'Jim'],
    }
    const tree = renderer.create(<WorkoutDetail {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  xit('updates the state when input is entered', () => {
    const wrapper = mount(<WorkoutDetail {...defaultProps} />)
    const textInput = wrapper.find('TextInput').first()

    expect(wrapper.state('name')).to.equal('')

    // TODO: how to simulate text input?
    // textInput.simulate('change', 'The Doctor')
    wrapper.update()

    expect(wrapper.state('name')).to.equal('The Doctor')
  })

  it('calls addParticipant when the Add button is pressed', () => {
    const props = {
      ...defaultProps,
      addParticipant: jest.fn()
    }
    const wrapper = mount(<WorkoutDetail {...props} />)
    const textInput = wrapper.find('TextInput').first()

    // TODO: same problem as above
    // textInput.simulate('change', 'The Doctor')
    wrapper.update()

    const button = wrapper.find('Button').first().props().onPress()

    expect(props.addParticipant).toHaveBeenCalledTimes(1)
    expect(props.addParticipant).toHaveBeenCalledWith({
      name: '',
      workoutId: 'running'
    })
  })

  it('calls changeView when the Back button is pressed', () => {
    const props = {
      ...defaultProps,
      changeViewToList: jest.fn()
    }
    const wrapper = mount(<WorkoutDetail {...props} />)
    const button = wrapper.find('Button')
      .last()  // not good!
      .props()
      .onPress()

    wrapper.update()

    expect(props.changeViewToList).toHaveBeenCalledTimes(1)
  })
})

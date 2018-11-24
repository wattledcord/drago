import App from './app'
import React from 'react'
import {shallow} from 'enzyme'
describe('App', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find('div').text()).toBe('Hi I Am Madhav  The greatest developer of ll time')
    expect(wrapper).toMatchSnapshot()
  })
})
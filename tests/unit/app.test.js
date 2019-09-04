const App = require('../../app')


describe('App', () => {
  it('has valid url routes that match expected content', () => {
    expect(App.endpoints()).toEqual(['/about-page', '/jobs', '/valves'])
  })
})
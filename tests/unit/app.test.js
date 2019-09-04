const App = require('../../app')
const fs = require('fs')

jest.mock('fs', () => ({
  readdirSync: jest.fn(() => {return ['about-page', 'jobs', 'valves']}),
  readFileSync: jest.fn(() => {return '<html><head>Mock template<head><html>'})
}));


describe('App', () => {

  describe('#enpoint', () => {
    it('has valid url routes that match expected content', () => {
      expect(App.endpoints()).toEqual(['/about-page', '/jobs', '/valves'])
    })
  })

  describe('#getTemplate', () => {
    it('finds template content', () => {
      expect(App.getTemplate()).toEqual('<html><head>Mock template<head><html>')
    })
  })

})
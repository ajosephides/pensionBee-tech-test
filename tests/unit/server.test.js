const Server = require('../../model/server')
const fs = require('fs')

jest.mock('fs', () => ({
  readdirSync: jest.fn(() => {return ['about-page', 'jobs', 'valves']}),
  readFileSync: jest.fn(() => {return '<html><head>Mock template<head><html>'})
}));

let requestMock = jest.fn()

describe('App', () => {

  describe('#enpoint', () => {
    it('has valid url routes that match expected content', () => {
      expect(Server.endpoints('/mockRoute')).toEqual(['/about-page', '/jobs', '/valves'])
    })
  })

  describe('#getTemplate', () => {
    it('finds template content', () => {
      expect(Server.getTemplate('/mockRoute')).toEqual('<html><head>Mock template<head><html>')
    })
  })

  describe('#getContent', () => {
    it('finds content', () => {
      expect(Server.getContent(requestMock, '/mockRoute')).toEqual('<html><head>Mock template<head><html>')
    })
  })

})
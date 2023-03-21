const { Builder, Capabilities } = require("selenium-webdriver")
require("chromedriver")

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const { addMovie, deleteMovie } = require('../testFunctions/addMovie')

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movie-list/index.html')
})

afterAll(async () => {
    await driver.quit()
})

describe('movie list functionality', () => {
    test('add a movie', async () => {
        await addMovie(driver)
        await driver.sleep(3000)
    })

    test('deletes a movie', async () => {
        await deleteMovie(driver)
        await driver.sleep(3000)
    })
})
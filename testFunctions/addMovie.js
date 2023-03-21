const { By } = require('selenium-webdriver')

const movie = 'Back to the Future'

const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys(movie + '\n')
    const newMovie = await driver.findElement(By.xpath(`//li/span[text()='${movie}']`))
    expect(newMovie.isDisplayed()).toBeTruthy()
}

const deleteMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys(movie + '\n')
    await driver.findElement(By.xpath("//button[text() = 'x']")).click()
    const deleted = await driver.findElement(By.id('message'))

    expect(deleted.isDisplayed()).toBeTruthy()
}

module.exports = {
    addMovie,
    deleteMovie
}
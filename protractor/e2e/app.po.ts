import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }

  enterHeroQueryInSearch(heroQuery: string) {
    element(by.id('search-box')).sendKeys(heroQuery);
  }

  getAllSearchResults() {
    return element.all(by.className('search-result'));
  }

  eraseFirstHero() {
    const allHeroes = this.getAllHeroes();
    allHeroes.all(by.className('delete')).first().click();
  }

  editHero(newName: string) {
    element(by.tagName('input')).sendKeys(newName);
    element(by.buttonText('Save')).click();
  }

  navigateToHeroFromDashboard() {
    element.all(by.className('module hero')).first().click();
  }

  getHeroDetailContainer() {
    return element.all(by.tagName('hero-detail'));
  }

  navigateToFirstHeroFromHeroesList() {
    this.getAllHeroes().first().click();
    element(by.buttonText('View Details')).click();
  }

  navigateToHeroFromSearch(heroName: string) {
    this.enterHeroQueryInSearch('Magneta');
    this.getAllSearchResults().first().click();
  }
}

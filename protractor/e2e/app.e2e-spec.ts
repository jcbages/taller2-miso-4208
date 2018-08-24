import { TourOfHeroesPage } from './app.po';
import { browser } from 'protractor';

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
    page.navigateTo();
  });

  it('should display top 4 heroes', () => {
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });

  it('should search a hero', () => {
    page.enterHeroQueryInSearch('Magneta');
    expect(page.getAllSearchResults().count()).toBe(1);
  });

  it('should navigate to a hero from dashboard', () => {
    page.navigateToHeroFromDashboard();
    expect(page.getHeroDetailContainer().count()).toBe(1);
  });

  it('should navigate to a hero from search', () => {
    page.navigateToHeroFromSearch('Magneta');
    expect(page.getHeroDetailContainer().count()).toBe(1);
  });

  it('should edit a hero', () => {
    page.navigateToHeroFromSearch('Zero');
    page.editHero('One');
    page.navigateToHeroFromSearch('One');
    expect(page.getHeroDetailContainer().count()).toBe(1);
  });
});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should add a new hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('My new Hero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });

  it('should delete a hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.eraseFirstHero();
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n - 1));
  });

  it('should navigate to a hero from heroes page', () => {
    page.navigateToFirstHeroFromHeroesList();
    expect(page.getHeroDetailContainer().count()).toBe(1);
  });
});

// test.js

const assert = require('assert');
const UIThemeSwitcher = require('../src/ui-theme-switcher');

describe('UIThemeSwitcher', function () {
  let uiThemeSwitcher;

  beforeEach(function () {
    uiThemeSwitcher = new UIThemeSwitcher();
  });

  it('should initialize with light theme by default', function () {
    assert.strictEqual(uiThemeSwitcher.currentTheme, 'light');
  });

  it('should switch theme from light to dark and vice versa', function () {
    uiThemeSwitcher.toggleTheme();
    assert.strictEqual(uiThemeSwitcher.currentTheme, 'dark');

    uiThemeSwitcher.toggleTheme();
    assert.strictEqual(uiThemeSwitcher.currentTheme, 'light');
  });

  // Add more test cases as needed
});

import { fixture, assert } from '@open-wc/testing';
import '../http-method-label.js';

describe('<http-method-label>', () => {
  function listTargets(first) {
    const elements = [first];
    let target = first;
    while (true) {
      const next = target && target.nextElementSibling;
      if (next) {
        elements.push(next);
        target = next;
      } else {
        break;
      }
    }
    return elements;
  }
  it('Has unique colors', async () => {
    const first = await fixture(`<http-method-label method="get"></http-method-label>
    <http-method-label method="POST"></http-method-label>
    <http-method-label method="Put"></http-method-label>
    <http-method-label method="delete"></http-method-label>
    <http-method-label method="patch"></http-method-label>
    <http-method-label method="test"></http-method-label>`);
    const elements = listTargets(first);
    const colors = [];
    for (let i = 0, len = elements.length; i < len; i++) {
      colors.push(getComputedStyle(elements[i]).color);
    }
    const filteredArray = elements.filter(function(item, pos) {
      return elements.indexOf(item) === pos;
    });
    assert.equal(elements.length, filteredArray.length);
  });

  it('Has unique background colors', async () => {
    const first = await fixture(`<http-method-label method="get"></http-method-label>
    <http-method-label method="POST"></http-method-label>
    <http-method-label method="Put"></http-method-label>
    <http-method-label method="delete"></http-method-label>
    <http-method-label method="patch"></http-method-label>
    <http-method-label method="test"></http-method-label>`);
    const elements = listTargets(first);
    const colors = [];
    for (let i = 0, len = elements.length; i < len; i++) {
      colors.push(getComputedStyle(elements[i]).backgroundColor);
    }
    const filteredArray = elements.filter(function(item, pos) {
      return elements.indexOf(item) === pos;
    });
    assert.equal(elements.length, filteredArray.length);
  });

  it('Sets title attribute on label change', async () => {
    const element = await fixture(`<http-method-label method="get"></http-method-label>`);
    assert.isTrue(element.hasAttribute('title'), 'Has title attribute');
    assert.equal(element.getAttribute('title'), 'get');
  });

  it('Removes title attribute', async () => {
    const element = await fixture(`<http-method-label method="get"></http-method-label>`);
    element.method = undefined;
    assert.isFalse(element.hasAttribute('title'));
  });

  it('Sets arial-label attribute on label change', async () => {
    const element = await fixture(`<http-method-label method="get"></http-method-label>`);
    assert.isTrue(element.hasAttribute('aria-label'), 'Has arial-label attribute');
    assert.equal(element.getAttribute('aria-label'), 'get');
  });

  it('Removes arial-label attribute', async () => {
    const element = await fixture(`<http-method-label method="get"></http-method-label>`);
    element.method = undefined;
    assert.isFalse(element.hasAttribute('aria-label'));
  });
});

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pretty-color', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(4);

    this.set('colorValue', 'red');

    await render(hbs`<PrettyColor @name={{this.colorValue}} />`);

    assert.equal(
      this.element.querySelector('div').getAttribute('style'),
      'color: red',
      'starts as red'
    );

    this.set('colorValue', 'blue');

    assert.equal(
      this.element.querySelector('div').getAttribute('style'),
      'color: blue',
      'updates to blue'
    );

    this.set('colorValue', 'orange');

    await render(hbs`<PrettyColor @name={{this.colorValue}} />`);

    assert.equal(
      this.element.textContent.trim(),
      'Pretty Color: orange',
      'text starts as orange'
    );

    this.set('colorValue', 'green');

    assert.equal(
      this.element.textContent.trim(),
      'Pretty Color: green',
      'text switches to green'
    );
  });
});

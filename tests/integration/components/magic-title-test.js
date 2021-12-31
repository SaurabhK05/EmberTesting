import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | magic-title', function (hooks) {
  setupRenderingTest(hooks);

  test('should update title on button click', async function (assert) {
    assert.expect(2);

    await render(hbs`<MagicTitle />`);

    assert.equal(
      this.element.querySelector('h2').textContent.trim(),
      'Hello World',
      'initial text is hello world'
    );

    await click('.title-button');

    assert.equal(
      this.element.querySelector('h2').textContent.trim(),
      'This is Magic',
      'title changes after click'
    );
  });
});

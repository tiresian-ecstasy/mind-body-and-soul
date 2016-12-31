import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script) {
    script.backdrop('womb').fadeIn();
    yield script.text('Hello!')
  })
});

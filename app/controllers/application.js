import Ember from 'ember';

export default Ember.Controller.extend({
  config: {
    stage: {
      direction: {
        text: {
          classNames: {
            structural: 'ae-bottom-block'
          },
          lxlTransition: {
            effect: {
              translateX: [0, '10px'],
              translateY: [0, '-3px'],
              translateZ: [0, '15px']
            },
            rate: 10
          }
        }
      }
    }
  },
  fixtures: {
    backdrops: [{
      id: 'womb',
      keyframe: 'womb'
    }],
    keyframes: [{
      // http://sulirium.deviantart.com/art/Devious-Depths-Recovecos-I-472038169
      id: 'womb',
      src: 'images/backdrops/womb.jpg'
    }],
    sounds: []
  },
  progressBarOptions: {
    color: 'rgb(250, 250, 250)',
    trailColor: 'rgba(250, 250, 250, 0.62)',
    strokeWidth: 4,
    trailWidth: 4 * 0.62
  }
})

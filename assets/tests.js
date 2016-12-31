'use strict';

define('mind-body-and-soul/tests/affinity-engine/stage/scenes/intro.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | affinity-engine/stage/scenes/intro.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'affinity-engine/stage/scenes/intro.js should pass jshint.\naffinity-engine/stage/scenes/intro.js: line 7, col 32, Missing semicolon.\n\n1 error');
  });
});
define('mind-body-and-soul/tests/app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('mind-body-and-soul/tests/controllers/application.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/application.js should pass jshint.\ncontrollers/application.js: line 41, col 3, Missing semicolon.\n\n1 error');
  });
});
define('mind-body-and-soul/tests/helpers/affinity-engine/stage/delay', ['exports', 'ember'], function (exports, _ember) {
  var Promise = _ember['default'].RSVP.Promise;
  var later = _ember['default'].run.later;

  exports['default'] = function (app) {
    var duration = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

    return new Promise(function (resolve) {
      later(function () {
        resolve();
      }, duration);
    });
  };
});
define('mind-body-and-soul/tests/helpers/affinity-engine/stage/register-test-helpers', ['exports', 'ember', 'mind-body-and-soul/tests/helpers/affinity-engine/stage/delay', 'mind-body-and-soul/tests/helpers/affinity-engine/stage/step'], function (exports, _ember, _mindBodyAndSoulTestsHelpersAffinityEngineStageDelay, _mindBodyAndSoulTestsHelpersAffinityEngineStageStep) {
  exports['default'] = function () {
    _ember['default'].Test.registerAsyncHelper('delay', _mindBodyAndSoulTestsHelpersAffinityEngineStageDelay['default']);
    _ember['default'].Test.registerAsyncHelper('step', _mindBodyAndSoulTestsHelpersAffinityEngineStageStep['default']);
  };
});
define('mind-body-and-soul/tests/helpers/affinity-engine/stage/step', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = function (app, duration) {
    triggerEvent(document, 'keyup', {
      keyCode: 32,
      which: 32,
      altKey: true,
      ctrlKey: true,
      shiftKey: true
    });

    return delay(duration);
  };
});
define('mind-body-and-soul/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('mind-body-and-soul/tests/helpers/destroy-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('mind-body-and-soul/tests/helpers/ember-keyboard/register-test-helpers', ['exports', 'ember', 'ember-keyboard', 'ember-keyboard/fixtures/modifiers-array', 'ember-keyboard/utils/get-cmd-key'], function (exports, _ember, _emberKeyboard, _emberKeyboardFixturesModifiersArray, _emberKeyboardUtilsGetCmdKey) {

  var keyEvent = function keyEvent(app, attributes, type, element) {
    var event = attributes.split('+').reduce(function (event, attribute) {
      if (_emberKeyboardFixturesModifiersArray['default'].indexOf(attribute) > -1) {
        attribute = attribute === 'cmd' ? (0, _emberKeyboardUtilsGetCmdKey['default'])() : attribute;
        event[attribute + 'Key'] = true;
      } else {
        event.keyCode = (0, _emberKeyboard.getKeyCode)(attribute);
      }

      return event;
    }, {});

    return app.testHelpers.triggerEvent(element || document, type, event);
  };

  exports['default'] = function () {
    _ember['default'].Test.registerAsyncHelper('keyDown', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keydown', element);
    });

    _ember['default'].Test.registerAsyncHelper('keyUp', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keyup', element);
    });

    _ember['default'].Test.registerAsyncHelper('keyPress', function (app, attributes, element) {
      return keyEvent(app, attributes, 'keypress', element);
    });
  };
});
define('mind-body-and-soul/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'mind-body-and-soul/tests/helpers/start-app', 'mind-body-and-soul/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _mindBodyAndSoulTestsHelpersStartApp, _mindBodyAndSoulTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _mindBodyAndSoulTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _mindBodyAndSoulTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('mind-body-and-soul/tests/helpers/module-for-acceptance.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('mind-body-and-soul/tests/helpers/resolver', ['exports', 'mind-body-and-soul/resolver', 'mind-body-and-soul/config/environment'], function (exports, _mindBodyAndSoulResolver, _mindBodyAndSoulConfigEnvironment) {

  var resolver = _mindBodyAndSoulResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _mindBodyAndSoulConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _mindBodyAndSoulConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('mind-body-and-soul/tests/helpers/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('mind-body-and-soul/tests/helpers/start-app', ['exports', 'ember', 'mind-body-and-soul/app', 'mind-body-and-soul/config/environment'], function (exports, _ember, _mindBodyAndSoulApp, _mindBodyAndSoulConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    // use defaults, but you can override
    var attributes = _ember['default'].assign({}, _mindBodyAndSoulConfigEnvironment['default'].APP, attrs);

    _ember['default'].run(function () {
      application = _mindBodyAndSoulApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('mind-body-and-soul/tests/helpers/start-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('mind-body-and-soul/tests/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('mind-body-and-soul/tests/router.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('mind-body-and-soul/tests/test-helper', ['exports', 'mind-body-and-soul/tests/helpers/resolver', 'ember-qunit'], function (exports, _mindBodyAndSoulTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_mindBodyAndSoulTestsHelpersResolver['default']);
});
define('mind-body-and-soul/tests/test-helper.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('mind-body-and-soul/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map

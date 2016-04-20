(function() {
  'use strict';

  angular
    .module('adventureTimeWatchGuide')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

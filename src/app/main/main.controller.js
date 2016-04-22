(function() {
  'use strict';

  angular
    .module('adventureTimeWatchGuide')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, $http) {
    var vm = this;

    vm.episodes = [];
    vm.currentTier = 1;

    //temporary
    vm.totalSeasons = 6;
    vm.totalEpisodes = 199;

    getEpisodes();

    vm.isInTier = function(value){
        return value.tier <= vm.currentTier;
    };

    vm.showSeasonHeader = function(ep, $index, arr){
      return $index == 0 || (ep.season != arr[$index-1].season);
    }

    function getEpisodes(){
      $http.get('https://spreadsheets.google.com/feeds/list/14ciO3hpZXigTlBWdi0aCyxOXeSKEAdlb1BPBpCKAqKk/2/public/values?alt=json')
        .then(function success(response){
          var rows = response.data.feed.entry;
          vm.episodes = rows.map(processEpisodeData);
        }, function error(){

        });
    }


    function processEpisodeData(ep){

      //create arc array
      var arcs = [];
      if(ep.gsx$arc.$t){
        arcs.push(ep.gsx$arc.$t);
      }
      if(ep.gsx$arc2.$t){
        arcs.push(ep.gsx$arc2.$t);
      }
      if(ep.gsx$arc3.$t){
        arcs.push(ep.gsx$arc3.$t);
      }

      return {
        season: parseInt(ep.gsx$season.$t),
        number: parseInt(ep.gsx$number.$t),
        title: ep.gsx$title.$t,
        arcs: arcs,
        article: ep.gsx$article.$t,
        tier: parseInt(ep.gsx$priority.$t)
      };

    }//processEpisodeData

  }
})();

angular.module('adventureTimeWatchGuide')
  .filter('minutesToTime', [function() {
    return function(minutes) {
        return new Date(1970, 0, 1).setSeconds(minutes*60);
    };
}])


angular.module('adventureTimeWatchGuide')
  .filter('episodesToTime', [function() {
    return function(episodes) {
      var totalMinutes = episodes * 11;
      var hours = totalMinutes / 60;
      var mins = totalMinutes % 60;
      return Math.floor(hours) + ' hr '+ mins + ' min';
    };
}]);
!function(){"use strict";angular.module("adventureTimeWatchGuide",["ngAria","ui.bootstrap","toastr"])}(),function(){"use strict";function e(e,t){function n(){t.get("https://spreadsheets.google.com/feeds/list/14ciO3hpZXigTlBWdi0aCyxOXeSKEAdlb1BPBpCKAqKk/2/public/values?alt=json").then(function(e){var t=e.data.feed.entry;s.episodes=t.map(r),s.totalEpisodes=s.episodes.length},function(){})}function r(e){var t=[];return e.gsx$keywords.$t&&t.push(e.gsx$keywords.$t),e.gsx$keywords2.$t&&t.push(e.gsx$keywords2.$t),e.gsx$keywords3.$t&&t.push(e.gsx$keywords3.$t),e.gsx$keywords4.$t&&t.push(e.gsx$keywords4.$t),{season:parseInt(e.gsx$partofseason.$t),number:parseInt(e.gsx$episodenumber.$t),title:e.gsx$name.$t,arcs:t,article:e.gsx$article.$t,tier:parseInt(e.gsx$priority.$t)}}var s=this;s.episodes=[],s.currentTier=1,s.totalEpisodes=0,s.totalSeasons=7,n(),s.isInTier=function(e){return e.tier<=s.currentTier},s.showSeasonHeader=function(e,t,n){return 0==t||e.season!=n[t-1].season}}e.$inject=["$log","$http"],angular.module("adventureTimeWatchGuide").controller("MainController",e)}(),angular.module("adventureTimeWatchGuide").filter("minutesToTime",[function(){return function(e){return new Date(1970,0,1).setSeconds(60*e)}}]),angular.module("adventureTimeWatchGuide").filter("episodesToTime",[function(){return function(e){var t=11*e,n=t/60,r=t%60;return Math.floor(n)+" hr "+r+" min"}}]),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("adventureTimeWatchGuide").run(e)}(),function(){"use strict";angular.module("adventureTimeWatchGuide").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,t){e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}e.$inject=["$logProvider","toastrConfig"],angular.module("adventureTimeWatchGuide").config(e)}();
//# sourceMappingURL=../maps/scripts/app-52da46493c.js.map
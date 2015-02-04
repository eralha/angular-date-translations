(function () {
   'use strict';

    var Module = angular.module('dateTranslations', []);

    Module.factory('DateTranslationsService',['$q', '$http', '$rootScope', '$timeout', 
    function($q, $http, $rootScope, $timeout) {
    	this.dataDefer = $q.defer();
    	this.data = null;
    	var sup = this;

    	this.load = function(url){
    		var path = (url !== undefined)? url : 'js/angular.date.translations.json';
    		var def = this.dataDefer;

    		$http.get(path).
		    success(function(data, status, headers, config) {
		      //resolving promisse
		      	sup.data = data;
		        def.resolve(data);
		      //Apply changes to repopulate our filters
		      	$timeout(function() {
                    $rootScope.$apply();
                }, 0);
		    }).error(function() {
		      def.reject("Error loading");
		    });//end http

		    return def.promise;
    	};

    	return this;
	}]);

    Module.config(['$provide', function($provide) {
    	$provide.decorator('dateFilter', ['$delegate', 'DateTranslationsService',
    	function($delegate, DateTranslationsService) {
		    var srcFilter = $delegate;
		    var srvc = DateTranslationsService;
		    var langData = (srvc.data !== null)? srvc.data[0] : null;

		    if(langData === null){
		    	srvc.load().then(function(data){
    				langData = data[0];
    			});
		    }

		    function replacer(string, obj){
			    for(var i in obj){
			      string = string.replace(i, obj[i]);
			    }
			    return string;
			  }
		      
		    var extendsFilter = function(date, format) {
		      var dateResult = srcFilter.apply(this, arguments);
		      
		      if(langData !== null){
		      	
			      if(format.indexOf('MMMM') !== -1){
			        dateResult = replacer(dateResult, langData.months.MMMM);
			      }
			      if(format.indexOf('MMM') !== -1){
			        dateResult = replacer(dateResult, langData.months.MMM);
			      }
			      if(format.indexOf('EEEE') !== -1){
			        dateResult = replacer(dateResult, langData.weekDays.EEEE);
			      }
			      if(format.indexOf('EEE') !== -1){
			        dateResult = replacer(dateResult, langData.weekDays.EEE);
			      }
			      if(format.indexOf('longDate') !== -1){
			        dateResult = replacer(dateResult, langData.months.MMMM);
			      }
			      if(format.indexOf('longDate') !== -1){
			        dateResult = replacer(dateResult, langData.months.MMMM);
			      }
			      if(format.indexOf('fullDate') !== -1){
			      	dateResult = replacer(dateResult, langData.weekDays.EEEE);
			        dateResult = replacer(dateResult, langData.months.MMMM);
			      }

			      return dateResult;

			    }else{
			      return dateResult;
			    }
		    };
		     
		    return extendsFilter;
		}]);
    }]);

	/*
	 * Check if our Module is being loaded by AMD and export it that way
	 */
	if (typeof require === "function") {
	    define([], function () {
	        return Module;
	    });
	}
}());
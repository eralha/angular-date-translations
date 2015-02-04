var appCFO_baseUrl = "src";
require.config({
    baseUrl: 'js/'+appCFO_baseUrl+'/',
    paths: {
        'angular' : 'lib/angular.min',
        'app' : 'ng/date.translate',
        'services' : 'ng/services'
    },
    shim: {
        'app': {
            deps: ['angular' ]
        }
    }
});
require(['app'], function(app){
	
	try{
		angular.bootstrap(document, ['dateTranslations']);
	}catch(e){
		console.log(e);
	}

});
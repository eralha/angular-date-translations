# angular-date-translations

<p><img src="https://travis-ci.org/eralha/angular-date-translations.svg?branch=master" /></p>

<p>This is a module that extends the angular date filter to add translations to the date filter.</p>

##How to use

<p>The json file "js/angular.date.translations.json" have the translation maping from "eng" to "pt", it will allways be from "eng" to some language, because the native language of angular filter "date" in eng.</p>

<p>Change this file tho set your language</p>

```javascript
[{
	"months": {
	  "MMMM": {
	    "January":    "Janeiro"
	    ...
	  },
	  "MMM": {
	    "Jan": "Jan"
	    ...
	  }
	},
	"weekDays": {
	 "EEE": {
	    "Mon": "Seg"
	    ...
	  },
	 "EEEE": {
	    "Monday": "Segunda-feira"
	    ...
	  }
	}
}]
```

##Change languages on run time

<p>You can change language on app run time by calling the DateTranslationsService load method, you will be using this feature for example when the user clicks a button to change language.</p>

```javascript
	myApp.controller('SomeController', ['DateTranslationsService', function(service) {
	  //This will trigger a $rootScope.$apply(), and all date filters will be updated
	  service.load('some_path_to_json');
	}]);
```
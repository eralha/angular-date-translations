# angular-date-translations

<p><img src="https://travis-ci.org/eralha/angular-date-translations.svg?branch=master" /></p>

<p>This is a module that extends the angular date filter to add translations to the date filter.</p>

##How to use

<p>In the json file "js/angular.date.translations.json" have the translation maping from eng to pt, it will allways be from eng to some language.</p>

<p>Change this file tho set you language</p>

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
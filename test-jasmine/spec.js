/*
 * Fix for jasmine require amd template
 */
var wl = startTests;
startTests = function(){};


var translationData = [{
  "months": {
    "MMMM": {
      "January":    "Janeiro",
      "February":   "Fevereiro",
      "March":      "Março",
      "April":      "Abril",
      "May":        "Maio",
      "June":       "Junho",
      "July":       "Julho",
      "August":     "Agosto",
      "September":  "Setembro",
      "October":    "Outubro",
      "November":   "Novembro",
      "December":   "Dezembro"
    },
    "MMM": {
      "Jan": "Jan",
      "Feb": "Fev",
      "Mar": "Mar",
      "Apr": "Abr",
      "May": "Mai",
      "Jun": "Jun",
      "Jul": "Jul",
      "Aug": "Ago",
      "Sep": "Set",
      "Oct": "Out",
      "Nov": "Nov",
      "Dec": "Dez"
    }
  },
  "weekDays": {
   "EEE": {
      "Mon": "Seg",
      "Tue": "Ter",
      "Wed": "Qua",
      "Thu": "Qui",
      "Fri": "Sex",
      "Sat": "Sab",
      "Sun": "Dom"
    },
   "EEEE": {
      "Monday": "Segunda-feira",
      "Tuesday": "Terça-feira",
      "Wednesday": "Quarta-feira",
      "Tuesday": "Quinta-feira",
      "Friday": "Sexta-feira",
      "Saturday": "Sábado",
      "Sunday": "Domingo"
    }
  }
}];


/*
 * Here we load all files in amd that our app may need
 */
  setTimeout(function(){

    require(['js/src/lib/angular-mocks.js'], function(){

      describe('Testing angular DateTanslation Service', function() {
        var testEngine, testModule;
        var $httpBackend, $rootScope, createController, requestHandler;

        beforeEach(function(){
          testEngine = {};
          testModule = angular.module('test', ['dateTranslations', 'ngMockE2E']);
          module('test');
        });   

        beforeEach(inject(function($injector){
          $httpBackend = $injector.get('$httpBackend');

           // Get hold of a scope (i.e. the root scope)
           $rootScope = $injector.get('$rootScope');
           // The $controller service is used to create instances of controllers
           var $controller = $injector.get('$controller');

           createController = function(controllerName) {
             return $controller(controllerName, {'$scope' : $rootScope });
           };
        }));   


        it('Should translate Fri to Sex', inject(function(DateTranslationsService, $filter) {
          $httpBackend.expectGET('js/angular.date.translations.json').respond(200, translationData);
          var srv = DateTranslationsService;

          srv.load();

          $httpBackend.flush();

          //DateFilter
          var date = $filter('date');

          console.log(srv.data);

          expect(date(1288323623006, "EEE")).toEqual("Sex");
        }));

        it('Should translate Friday to Sexta-feira', inject(function(DateTranslationsService, $filter) {
          $httpBackend.expectGET('js/angular.date.translations.json').respond(200, translationData);
          var srv = DateTranslationsService;

          srv.load();

          $httpBackend.flush();

          //DateFilter
          var date = $filter('date');

          console.log(srv.data);

          expect(date(1288323623006, "EEEE")).toEqual("Sexta-feira");
        }));

        it('Should translate Oct to Out', inject(function(DateTranslationsService, $filter) {
          $httpBackend.expectGET('js/angular.date.translations.json').respond(200, translationData);
          var srv = DateTranslationsService;

          srv.load();

          $httpBackend.flush();

          //DateFilter
          var date = $filter('date');

          console.log(srv.data);

          expect(date(1288323623006, "MMM")).toEqual("Out");
        }));

        it('Should translate October to Outubro', inject(function(DateTranslationsService, $filter) {
          $httpBackend.expectGET('js/angular.date.translations.json').respond(200, translationData);
          var srv = DateTranslationsService;

          srv.load();

          $httpBackend.flush();

          //DateFilter
          var date = $filter('date');

          console.log(srv.data);

          expect(date(1288323623006, "MMMM")).toEqual("Outubro");
        }));

        it('Should translate "Friday, October 29, 2010" to "Sexta-feira, Outubro 29, 2010"', inject(function(DateTranslationsService, $filter) {
          $httpBackend.expectGET('js/angular.date.translations.json').respond(200, translationData);
          var srv = DateTranslationsService;

          srv.load();

          $httpBackend.flush();

          //DateFilter
          var date = $filter('date');

          console.log(srv.data);

          expect(date(1288323623006, "fullDate")).toEqual("Sexta-feira, Outubro 29, 2010");
        }));


      });//end describe

      wl();
    });//end require

  }, 2000);
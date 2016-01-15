angular.module("app.core").run(["$templateCache", function($templateCache) {$templateCache.put("/index.html","<!doctype html><html data-ng-app=ngAPI ng-strict-di><head><meta charset=utf-8><meta http-equiv=X-UA-Compatible , content=\"IE=edge\"><base href=\"/\"><title>J.Ca</title><meta name=description content><meta name=viewport content=\"width=device-width\"><style>\n        .ng-hide {\n          display: none!important;\n        }\n        [ng\\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {\n          display: none !important;\n        }\n    </style><link rel=stylesheet href=/bower/ionicons/css/ionicons.css><link rel=stylesheet href=/bower/toastr/toastr.css><link rel=stylesheet href=/.tmp/stylus/app.css></head><body ng-class=\"{\'modal-open\': modalOpen}\"><section id=content class=ui-view-container><div data-ng-controller=\"Shell as vm\" ng-cloak><div ui-view></div></div></section><script src=/bower/angular/angular.js></script><script src=/bower/angular-animate/angular-animate.js></script><script src=/bower/angular-ui-router/release/angular-ui-router.js></script><script src=/bower/jquery/dist/jquery.js></script><script src=/bower/lodash/lodash.js></script><script src=/bower/restangular/dist/restangular.js></script><script src=/bower/satellizer/satellizer.js></script><script src=/bower/toastr/toastr.js></script><script src=/js/core/module.js></script><script src=/js/exception/module.js></script><script src=/js/layout/module.js></script><script src=/js/logger/module.js></script><script src=/js/promise/module.js></script><script src=/js/promise-request/module.js></script><script src=/js/router/module.js></script><script src=/js/services/module.js></script><script src=/js/widgets/module.js></script><script src=/js/routes/main/module.js></script><script src=/js/routes/survey/module.js></script><script src=/js/app.js></script><script src=/js/constants/constants.js></script><script src=/js/constants/ngConstants.js></script><script src=/js/core/config.js></script><script src=/js/core/constants.js></script><script src=/js/exception/exception-handler.provider.js></script><script src=/js/exception/exception.js></script><script src=/js/layout/shell.js></script><script src=/js/logger/logger.js></script><script src=/js/promise/DataParams.js></script><script src=/js/promise/DataQuery.js></script><script src=/js/promise-request/withParams.js></script><script src=/js/promise-request/withQuery.js></script><script src=/js/router/routerhelper.js></script><script src=/js/services/Settings.js></script><script src=/js/routes/survey/pieDirective.js></script><script src=/js/routes/survey/results.js></script><script src=/js/routes/survey/resultsDirective.js></script><script src=/js/routes/survey/route.js></script><script src=/js/routes/survey/summary.js></script><script src=/js/routes/survey/summaryDirective.js></script><script src=/js/routes/survey/survey.js></script><script src=/js/services/api/user.js></script><script src=/js/routes/main/main.js></script><script src=/js/routes/main/route.js></script></body></html>");
$templateCache.put("/client/main/index.html","<div class=main><a href class=button ui-sref=survey>Answer the Survey</a> <a href class=button ui-sref=surveyResults>View Existing Survey</a> <a href class=button ui-sref=surveySummary>View Summary</a><div></div></div>");
$templateCache.put("/client/survey/index.html","<div class=survey><div style=\"padding: 10px;display: flex;align-items: center; justify-content: center\"><a href class=button ui-sref=surveyResults>View Existing Survey</a> <a href class=button ui-sref=surveySummary>View Summary</a> <a href class=button ui-sref=main>Main</a></div><div class=\"button center\" ng-show=vm.status>{{vm.status}}</div><form name=surveyForm novalidate class=xscribe-36-offset-36 ng-submit=vm.survey(surveyForm)><div class=padding><input type=text placeholder=Name name=name required class=\"input xscribe-40\" ng-class=\"{\'has-error\' : surveyForm.name.$invalid && !surveyForm.name.$pristine}\" ng-model=vm.name></div><div class=\"help-block padding\" ng-show=\"surveyForm.name.$dirty && surveyForm.name.$error.required\">Name is required</div>{{signupForm.name.$error}}<div class=padding><input type=email placeholder=Email name=email required class=\"input xscribe-40\" ng-class=\"{\'has-error\' : surveyForm.email.$invalid && !surveyForm.email.$pristine}\" ng-model=vm.email></div><div class=\"help-block padding\" ng-show=\"surveyForm.email.$dirty && surveyForm.email.$error.required\">Email is required</div><div class=\"help-block padding\" ng-show=surveyForm.email.$error.email>Please enter an email address</div><div class=padding><select name=gender required class=\"select xscribe-45 padding\" ng-class=\"{\'has-error\' : vm.gender == \'none\' && !surveyForm.gender.$pristine}\" ng-model=vm.gender ng-init=\"vm.gender = \'none\'\"><option value=none selected>Please select your Gender</option><option value=Male>Male</option><option value=Female>Female</option></select></div><div class=padding><select name=color required class=\"select xscribe-45\" ng-class=\"{\'has-error\' : vm.color == \'none\' && !surveyForm.color.$pristine}\" ng-model=vm.color ng-init=\"vm.color = \'none\'\"><option value={{color.value}} {{color.status}} ng-repeat=\"color in vm.colorData\">{{color.name}}</option></select></div><div class=padding ng-show=\"vm.color === \'Other\'\"><input type=text placeholder=\"Please Specify...\" name=other required class=\"input xscribe-40\" ng-class=\"{\'has-error\' : surveyForm.other.$dirty && (surveyForm.other.$error.required || vm.isColor)}\" ng-model=vm.other></div><div class=\"help-block padding\" ng-show=\"surveyForm.other.$dirty && vm.other == undefined\">Please Specify...</div><div class=padding><input type=submit value=Submit class=\"input-submit xscribe-45\"></div></form></div>");
$templateCache.put("/client/survey/results.html","<div class=xscribe-36-offset-36 style=\"padding: 15px;\"><a href class=button ui-sref=survey>Answer the Survey</a> <a href class=button ui-sref=surveySummary>View Summary</a> <a href class=button ui-sref=main>Main</a></div><on-load-table ng-model=vm.surveyData t-header=\"[\'Submission Date\', \'Name\', \'Favorite Color\']\"></on-load-table>");
$templateCache.put("/client/survey/summary.html","<div class=xscribe-36-offset-36 style=\"padding: 15px;\"><a href class=button ui-sref=survey>Answer the Survey</a> <a href class=button ui-sref=surveyResults>View Existing Survey</a> <a href class=button ui-sref=main>Main</a></div><div style=\"display: flex; justify-content: center;\"><a href class=button ng-class=\"{\'active\': vm.activeCss}\" ng-click=vm.active()>Table</a> <a href class=button ng-class=\"{\'active\': !vm.activeCss}\" ng-click=vm.active()>Pie</a></div><on-load-table-summary ng-model=vm.summaryData t-header=\"[\'Color\', \'Occurences\']\" ng-show=vm.activeCss></on-load-table-summary><div class=canvas on-load-pie-summary ng-model=vm.summaryData ng-show=!vm.activeCss><canvas id=canvas width=400 height=400>+ This text is displayed if your browser does not support HTML5 Canvas.</canvas></div>");}]);
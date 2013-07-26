define([], function () {
		"use strict";
	
		var directive = function() {
			return {
				require : 'ngModel',
				link : function(scope,element, attrs, ngModelCtrl) {
					ngModelCtrl.$formatters.push(function(value) {
						return JSON.stringify(value);
					});

					ngModelCtrl.$parsers.push(function(value) {
						
						try {
							var json = JSON.parse(value);
						}
						catch(e) {
							//console.log(e);
						}

						if (json === null) {
							return value;
						}				
						else {
							return json;
						}	
					})
				}
			}
		};
		
		return directive;
	});


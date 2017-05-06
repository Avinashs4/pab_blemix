$(function() {
		
			$("#json-one").change(function() {
			
				var $dropdown = $(this);
							
				$.getJSON("jsondata/data1.json", function(data) {
					var key = $dropdown.val();
					var vals = [];
										
					switch(key) {
						case 'os':
							vals = data.os.split(",");
							break;
						case 'bi':
							vals = data.bi.split(",");
							break;
						case 'mf':
							vals = data.mf.split(",");
							break;
						case 'base':
							vals = ['--Select--'];}
							
					var $jsontwo = $("#json-two");
					$jsontwo.empty();
					$.each(vals, function(index, value) {
						$jsontwo.append("<option>" + value + "</option>");
					});
			
				});
			});
			
			
$("#json-one").change(function() {
			
				var $dropdown = $(this);
							
				$.getJSON("jsondata/data2.json", function(data) {
					var key = $dropdown.val();
					var vals = [];
										
					switch(key) {
						case 'ams':
							vals = data.ams.split(",");
							break;
						case 'gw':
							vals = data.gw.split(",");
							break;
						case 'life':
							vals = data.life.split(",");
							break;
						case 'base':
							vals = ['Please choose from above'];}
							
					var $jsonthree = $("#json-three");
					$jsonthree.empty();
					$.each(vals, function(index, value) {
						$jsonthree.append("<option>" + value + "</option>");
					});
			
				});
			});
			
			$("#json-one").change(function() {
			
				var $dropdown = $(this);
							
				$.getJSON("jsondata/data3.json", function(data) {
					var key = $dropdown.val();
					var vals = [];
										
					switch(key) {
						case 'ams':
							vals = data.ams.split(",");
							break;
						case 'gw':
							vals = data.gw.split(",");
							break;
						case 'life':
							vals = data.life.split(",");
							break;
						case 'base':
							vals = ['Please choose from above'];}
							
					var $jsonfour = $("#json-four");
					$jsonfour.empty();
					$.each(vals, function(index, value) {
						$jsonfour.append("<option>" + value + "</option>");
					});
			
				});
			});

		});
var j =0;
var data = [
	['AL', 'Alabama', '47', '13', 'Abortion'],
	['AK', 'Alaska', '22', '11', 'Second Amendment (gun control)'],
	['AZ', 'Arizona', '24', '43', 'Environment'],
	['AR', 'Arkansas', '24', '19', 'Immigration Reform'],
	['CA', 'California', '22', '31', 'Economy (tax reform)'],
	['CO', 'Colorado', '44', '19', 'Surveillance'],
	['CT', 'Connecticut', '32', '27', 'Foreign Policy'],
	['DE', 'Delaware', '24', '18', 'Abortion'],
	['DC', 'District of Columbia', '13', '22', 'Second Amendment (gun control)'],
	['FL', 'Florida', '47', '4', 'Environment'],
	['GA', 'Georgia', '31', '26', 'Immigration Reform'],
	['HI', 'Hawaii', '21', '41', 'Abortion'],
	['ID', 'Idaho', '20', '48', 'Second Amendment (gun control)'],
	['IL', 'Illinois', '21', '37', 'Environment'],
	['IN', 'Indiana', '18', '36', 'Immigration Reform'],
	['IA', 'Iowa', '23', '41', 'Economy (tax reform)'],
	['KS', 'Kansas', '44', '32', 'Surveillance'],
	['KY', 'Kentucky', '40', '26', 'Foreign Policy'],
	['LA', 'Louisiana', '30', '21', 'Abortion'],
	['ME', 'Maine', '33', '12', 'Second Amendment (gun control)'],
	['MD', 'Maryland', '31', '10', 'Environment'],
	['MA', 'Massachusetts', '19', '20', 'Immigration Reform'],
	['MI', 'Michigan', '46', '10', 'Economy (tax reform)'],
	['MN', 'Minnesota', '45', '40', 'Surveillance'],
	['MS', 'Mississippi', '26', '23', 'Foreign Policy'],
	['MO', 'Missouri', '25', '35', 'Abortion'],
	['MT', 'Montana', '6', '17', 'Second Amendment (gun control)'],
	['NE', 'Nebraska', '39', '28', 'Environment'],
	['NV', 'Nevada', '15', '15', 'Immigration Reform'],
	['NH', 'New Hampshire', '18', '7', 'Economy (tax reform)'],
	['NJ', 'New Jersey', '11', '6', 'Surveillance'],
	['NM', 'New Mexico', '48', '7', 'Foreign Policy'],
	['NY', 'New York', '15', '45', 'Abortion'],
	['NC', 'North Carolina', '29', '10', 'Second Amendment (gun control)'],
	['ND', 'North Dakota', '36', '14', 'Environment'],
	['OH', 'Ohio', '33', '28', 'Immigration', 'Reform'],
	['OK', 'Oklahoma', '40', '47', 'Economy (tax reform)'],
	['OR', 'Oregon', '29', '14', 'Surveillance'],
	['PA', 'Pennsylvania', '9', '46', 'Foreign', 'Policy'],
	['RI', 'Rhode Island', '44', '28', 'Abortion'],
	['SC', 'South Carolina', '45', '30', 'Second Amendment (gun control)'],
	['SD', 'South Dakota', '38', '1', 'Environment'],
	['TN', 'Tennessee', '13', '30', 'Immigration Reform'],
	['TX', 'Texas', '26', '37', 'Economy (tax reform)'],
	['UT', 'Utah', '42', '23', 'Surveillance'],
	['VT', 'Vermont', '22', '21', 'Foreign Policy'],
	['VA', 'Virginia', '14', '36', 'Abortion'],
	['WA', 'Washington', '42', '25', 'Second Amendment (gun control)'],
	['WV', 'West Virginia', '41', '16', 'Environment'],
	['WI', 'Wisconsin', '3', '27', 'Immigration Reform'],
	['WY', 'Wyoming', '47', '14', 'Economy (tax reform)'],
]
var positive_data = [
	['AL', 'Alabama', '47', '13', 'Abortion'],
	['AK', 'Alaska', '22', '11', 'Second Amendment (gun control)'],
	['AZ', 'Arizona', '24', '43', 'Environment'],
	['AR', 'Arkansas', '24', '19', 'Immigration Reform'],
	['CA', 'California', '22', '31', 'Economy (tax reform)'],
	['CO', 'Colorado', '44', '19', 'Surveillance'],
	['CT', 'Connecticut', '32', '27', 'Foreign Policy'],
	['DE', 'Delaware', '24', '18', 'Abortion'],
	['DC', 'District of Columbia', '13', '22', 'Second Amendment (gun control)'],
	['FL', 'Florida', '47', '4', 'Environment'],
	['GA', 'Georgia', '31', '26', 'Immigration Reform'],
	['HI', 'Hawaii', '21', '41', 'Abortion'],
	['ID', 'Idaho', '20', '48', 'Second Amendment (gun control)'],
	['IL', 'Illinois', '21', '37', 'Environment'],
	['IN', 'Indiana', '18', '36', 'Immigration Reform'],
	['IA', 'Iowa', '23', '41', 'Economy (tax reform)'],
	['KS', 'Kansas', '44', '32', 'Surveillance'],
	['KY', 'Kentucky', '40', '26', 'Foreign Policy'],
	['LA', 'Louisiana', '30', '21', 'Abortion'],
	['ME', 'Maine', '33', '12', 'Second Amendment (gun control)'],
	['MD', 'Maryland', '31', '10', 'Environment'],
	['MA', 'Massachusetts', '19', '20', 'Immigration Reform'],
	['MI', 'Michigan', '46', '10', 'Economy (tax reform)'],
	['MN', 'Minnesota', '45', '40', 'Surveillance'],
	['MS', 'Mississippi', '26', '23', 'Foreign Policy'],
	['MO', 'Missouri', '25', '35', 'Abortion'],
	['MT', 'Montana', '6', '17', 'Second Amendment (gun control)'],
	['NE', 'Nebraska', '39', '28', 'Environment'],
	['NV', 'Nevada', '15', '15', 'Immigration Reform'],
	['NH', 'New Hampshire', '18', '7', 'Economy (tax reform)'],
	['NJ', 'New Jersey', '11', '6', 'Surveillance'],
	['NM', 'New Mexico', '48', '7', 'Foreign Policy'],
	['NY', 'New York', '15', '45', 'Abortion'],
	['NC', 'North Carolina', '29', '10', 'Second Amendment (gun control)'],
	['ND', 'North Dakota', '36', '14', 'Environment'],
	['OH', 'Ohio', '33', '28', 'Immigration', 'Reform'],
	['OK', 'Oklahoma', '40', '47', 'Economy (tax reform)'],
	['OR', 'Oregon', '29', '14', 'Surveillance'],
	['PA', 'Pennsylvania', '9', '46', 'Foreign', 'Policy'],
	['RI', 'Rhode Island', '44', '28', 'Abortion'],
	['SC', 'South Carolina', '45', '30', 'Second Amendment (gun control)'],
	['SD', 'South Dakota', '38', '1', 'Environment'],
	['TN', 'Tennessee', '13', '30', 'Immigration Reform'],
	['TX', 'Texas', '26', '37', 'Economy (tax reform)'],
	['UT', 'Utah', '42', '23', 'Surveillance'],
	['VT', 'Vermont', '22', '21', 'Foreign Policy'],
	['VA', 'Virginia', '14', '36', 'Abortion'],
	['WA', 'Washington', '42', '25', 'Second Amendment (gun control)'],
	['WV', 'West Virginia', '41', '16', 'Environment'],
	['WI', 'Wisconsin', '3', '27', 'Immigration Reform'],
	['WY', 'Wyoming', '47', '14', 'Economy (tax reform)'],
]
$(document).ready(function(){
	for (i in data) {
		$("#"+data[i][0]).css("fill","rgb(215, 25, 25)");
		$("#"+data[i][0]).css("opacity", data[i][2]/48);
	}

	$("#positive_tweets").click(function(){
		console.log('hi');
		for (j in positive_data) {
			$("#"+data[j][0]).css("fill","rgb(215, 25, 25)");
			$("#"+data[j][0]).css("opacity", data[j][3]/48);
		}
	});

	$("#negative_tweets").click(function(){
		console.log('hi');
		for (j in positive_data) {
			$("#"+data[j][0]).css("fill","rgb(215, 25, 25)");
			$("#"+data[j][0]).css("opacity", data[j][2]/48);
		}
	});

	$("#women").click(function(){
		console.log('hi');
		for (j in positive_data) {
			$("#"+data[j][0]).css("fill","rgb(215, 25, 25)");
			$("#"+data[j][0]).css("opacity", data[j][3]/48);
		}
	});

	$("#men").click(function(){
		console.log('hi');
		for (j in positive_data) {
			$("#"+data[j][0]).css("fill","rgb(215, 25, 25)");
			$("#"+data[j][0]).css("opacity", data[j][2]/48);
		}
	});

	$("#18-30").click(function(){
		console.log('hi');
		for (j in positive_data) {
			$("#"+data[j][0]).css("fill","rgb(215, 25, 25)");
			$("#"+data[j][0]).css("opacity", data[j][3]/48);
		}
	});
});
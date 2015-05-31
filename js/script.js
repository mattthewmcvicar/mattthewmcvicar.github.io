function updateVersus(tempdata){
    var legend = "<ul id=\"legend\">";
    for (var i = 0; i < tempdata["datasets"].length; i++) {
        legend += "<li id=\"team" + (i + 1) + "\">" + 
        tempdata["datasets"][i]["label"] + "</li>"
    };
    legend += "</ul>"
    document.getElementById("versus").innerHTML = legend;
};

function makeRadar(team1, data1, team2, data2){           
    var data = {
        labels: ["Long Middle", "Long Right", "Short Right", 
            "Short Middle", "Short Left", "Long Left"],
        datasets: [
            {
                label: team1 + " Offense",
                fillColor: "rgba(220,0,0,0.2)",
                strokeColor: "rgba(220,0,0,1)",
                pointColor: "rgba(220,0,0,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,2,2,1)",
                data: data1
            },
            {
                label: team2 + " Defense",
                fillColor: "rgba(0, 220, 0,0.2)",
                strokeColor: "rgba(0, 220, 0,1)",
                pointColor: "rgba(0, 220, 0,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(0, 220, 0,1)",
                data: data2
            }
        ]
    };

    updateVersus(data);

    var chart = document.getElementById('chart').getContext('2d');
    new Chart(chart).Radar(data);
};

function updateAnalysis(team1, data1, team2, data2){
    if (team1 == team2){
        document.getElementById('analysis').innerHTML = 'Analysis not valid for same team.';
    }
    else{
        document.getElementById('analysis').innerHTML = 'Lets take a look at how ' + team1 + ' does against ' + team2 + ':'
    }
};

function updateChartData(){
	DText = '{"BUF": {"Short Left": 0.6904761904761905, "Long Middle": 0.43333333333333335, "Short Right": 0.6455026455026455, "Long Left": 0.16666666666666666, "Short Middle": 0.7156862745098039, "Long Right": 0.18181818181818182}, "NYJ": {"Short Left": 0.6892655367231638, "Long Middle": 0.65, "Short Right": 0.6467391304347826, "Long Left": 0.32, "Short Middle": 0.6941176470588235, "Long Right": 0.46808510638297873}, "MIN": {"Short Left": 0.7005649717514124, "Long Middle": 0.6363636363636364, "Short Right": 0.717391304347826, "Long Left": 0.3111111111111111, "Short Middle": 0.6973684210526315, "Long Right": 0.3541666666666667}, "CHI": {"Short Left": 0.7150537634408602, "Long Middle": 0.6538461538461539, "Short Right": 0.7068965517241379, "Long Left": 0.38095238095238093, "Short Middle": 0.6470588235294118, "Long Right": 0.5384615384615384}, "NE": {"Short Left": 0.6197916666666666, "Long Middle": 0.5882352941176471, "Short Right": 0.6954022988505747, "Long Left": 0.29411764705882354, "Short Middle": 0.6170212765957447, "Long Right": 0.2982456140350877}, "ARI": {"Short Left": 0.6746987951807228, "Long Middle": 0.5357142857142857, "Short Right": 0.680365296803653, "Long Left": 0.4482758620689655, "Short Middle": 0.6808510638297872, "Long Right": 0.288135593220339}, "DEN": {"Short Left": 0.6732673267326733, "Long Middle": 0.2916666666666667, "Short Right": 0.6578947368421053, "Long Left": 0.3076923076923077, "Short Middle": 0.6460176991150443, "Long Right": 0.28}, "DET": {"Short Left": 0.6868131868131868, "Long Middle": 0.5384615384615384, "Short Right": 0.672645739910314, "Long Left": 0.2692307692307692, "Short Middle": 0.6916666666666667, "Long Right": 0.23529411764705882}, "DAL": {"Short Left": 0.7125748502994012, "Long Middle": 0.45, "Short Right": 0.6649484536082474, "Long Left": 0.2962962962962963, "Short Middle": 0.7196969696969697, "Long Right": 0.41379310344827586}, "OAK": {"Short Left": 0.7195121951219512, "Long Middle": 0.5384615384615384, "Short Right": 0.6348314606741573, "Long Left": 0.2564102564102564, "Short Middle": 0.631578947368421, "Long Right": 0.45}, "PIT": {"Short Left": 0.6305732484076433, "Long Middle": 0.5151515151515151, "Short Right": 0.6577540106951871, "Long Left": 0.4827586206896552, "Short Middle": 0.696078431372549, "Long Right": 0.5217391304347826}, "IND": {"Short Left": 0.6057142857142858, "Long Middle": 0.3684210526315789, "Short Right": 0.6577540106951871, "Long Left": 0.2962962962962963, "Short Middle": 0.6547619047619048, "Long Right": 0.28888888888888886}, "HOU": {"Short Left": 0.6390243902439025, "Long Middle": 0.39473684210526316, "Short Right": 0.676923076923077, "Long Left": 0.29545454545454547, "Short Middle": 0.5700934579439252, "Long Right": 0.21951219512195122}, "CAR": {"Short Left": 0.6647058823529411, "Long Middle": 0.47619047619047616, "Short Right": 0.71875, "Long Left": 0.4722222222222222, "Short Middle": 0.625, "Long Right": 0.43333333333333335}, "STL": {"Short Left": 0.7551020408163265, "Long Middle": 0.52, "Short Right": 0.7333333333333333, "Long Left": 0.3125, "Short Middle": 0.6728971962616822, "Long Right": 0.16129032258064516}, "JAC": {"Short Left": 0.6866666666666666, "Long Middle": 0.6296296296296297, "Short Right": 0.688622754491018, "Long Left": 0.37142857142857144, "Short Middle": 0.6929824561403509, "Long Right": 0.46551724137931033}, "PHI": {"Short Left": 0.6353591160220995, "Long Middle": 0.45454545454545453, "Short Right": 0.5751295336787565, "Long Left": 0.5, "Short Middle": 0.6276595744680851, "Long Right": 0.36619718309859156}, "SF": {"Short Left": 0.7160493827160493, "Long Middle": 0.3870967741935484, "Short Right": 0.6108108108108108, "Long Left": 0.37735849056603776, "Short Middle": 0.7297297297297297, "Long Right": 0.288135593220339}, "MIA": {"Short Left": 0.7183908045977011, "Long Middle": 0.42105263157894735, "Short Right": 0.6971428571428572, "Long Left": 0.2826086956521739, "Short Middle": 0.6333333333333333, "Long Right": 0.42105263157894735}, "KC": {"Short Left": 0.6413793103448275, "Long Middle": 0.4, "Short Right": 0.676056338028169, "Long Left": 0.28888888888888886, "Short Middle": 0.5977011494252874, "Long Right": 0.2222222222222222}, "NYG": {"Short Left": 0.6223776223776224, "Long Middle": 0.34615384615384615, "Short Right": 0.5974842767295597, "Long Left": 0.4117647058823529, "Short Middle": 0.8347826086956521, "Long Right": 0.43902439024390244}, "TB": {"Short Left": 0.6792452830188679, "Long Middle": 0.6285714285714286, "Short Right": 0.7183908045977011, "Long Left": 0.425, "Short Middle": 0.7647058823529411, "Long Right": 0.46808510638297873}, "SD": {"Short Left": 0.6395348837209303, "Long Middle": 0.5, "Short Right": 0.6593406593406593, "Long Left": 0.21621621621621623, "Short Middle": 0.6590909090909091, "Long Right": 0.42592592592592593}, "BAL": {"Short Left": 0.6593406593406593, "Long Middle": 0.5789473684210527, "Short Right": 0.6551724137931034, "Long Left": 0.4418604651162791, "Short Middle": 0.6722689075630253, "Long Right": 0.52}, "GB": {"Short Left": 0.6089743589743589, "Long Middle": 0.4782608695652174, "Short Right": 0.6277777777777778, "Long Left": 0.38, "Short Middle": 0.6796875, "Long Right": 0.23809523809523808}, "CIN": {"Short Left": 0.7048192771084337, "Long Middle": 0.3829787234042553, "Short Right": 0.605, "Long Left": 0.24242424242424243, "Short Middle": 0.636986301369863, "Long Right": 0.40540540540540543}, "TEN": {"Short Left": 0.6830601092896175, "Long Middle": 0.375, "Short Right": 0.6650485436893204, "Long Left": 0.3953488372093023, "Short Middle": 0.5737704918032787, "Long Right": 0.45652173913043476}, "CLE": {"Short Left": 0.6411764705882353, "Long Middle": 0.5806451612903226, "Short Right": 0.6019417475728155, "Long Left": 0.28846153846153844, "Short Middle": 0.6551724137931034, "Long Right": 0.24489795918367346}, "ATL": {"Short Left": 0.6809815950920245, "Long Middle": 0.5483870967741935, "Short Right": 0.7048192771084337, "Long Left": 0.36538461538461536, "Short Middle": 0.7154471544715447, "Long Right": 0.2631578947368421}, "NO": {"Short Left": 0.6868131868131868, "Long Middle": 0.45, "Short Right": 0.6810810810810811, "Long Left": 0.391304347826087, "Short Middle": 0.7045454545454546, "Long Right": 0.4}, "WAS": {"Short Left": 0.7483443708609272, "Long Middle": 0.36, "Short Right": 0.6730769230769231, "Long Left": 0.3488372093023256, "Short Middle": 0.7227722772277227, "Long Right": 0.5121951219512195}, "SEA": {"Short Left": 0.718562874251497, "Long Middle": 0.42857142857142855, "Short Right": 0.6143790849673203, "Long Left": 0.3, "Short Middle": 0.6779661016949152, "Long Right": 0.35135135135135137}}';
	OText = '{"BUF": {"Short Left": 0.6746987951807228, "Long Middle": 0.4827586206896552, "Short Right": 0.6881720430107527, "Long Left": 0.3269230769230769, "Short Middle": 0.6696428571428571, "Long Right": 0.4}, "NYJ": {"Short Left": 0.5743243243243243, "Long Middle": 0.375, "Short Right": 0.6981132075471698, "Long Left": 0.3, "Short Middle": 0.6262626262626263, "Long Right": 0.2926829268292683}, "MIN": {"Short Left": 0.6225165562913907, "Long Middle": 0.4444444444444444, "Short Right": 0.6756756756756757, "Long Left": 0.37209302325581395, "Short Middle": 0.7303370786516854, "Long Right": 0.42105263157894735}, "CHI": {"Short Left": 0.6792452830188679, "Long Middle": 0.6153846153846154, "Short Right": 0.7253886010362695, "Long Left": 0.3469387755102041, "Short Middle": 0.7058823529411765, "Long Right": 0.20833333333333334}, "NE": {"Short Left": 0.7166666666666667, "Long Middle": 0.5135135135135135, "Short Right": 0.655367231638418, "Long Left": 0.27906976744186046, "Short Middle": 0.6696428571428571, "Long Right": 0.2857142857142857}, "ARI": {"Short Left": 0.5492957746478874, "Long Middle": 0.3888888888888889, "Short Right": 0.6505376344086021, "Long Left": 0.3392857142857143, "Short Middle": 0.6396396396396397, "Long Right": 0.3333333333333333}, "DEN": {"Short Left": 0.6731707317073171, "Long Middle": 0.6, "Short Right": 0.7244897959183674, "Long Left": 0.36538461538461536, "Short Middle": 0.6847826086956522, "Long Right": 0.42105263157894735}, "DET": {"Short Left": 0.6735751295336787, "Long Middle": 0.5833333333333334, "Short Right": 0.645320197044335, "Long Left": 0.21568627450980393, "Short Middle": 0.6403508771929824, "Long Right": 0.2571428571428571}, "DAL": {"Short Left": 0.7013888888888888, "Long Middle": 0.5, "Short Right": 0.7310344827586207, "Long Left": 0.4411764705882353, "Short Middle": 0.7766990291262136, "Long Right": 0.45714285714285713}, "OAK": {"Short Left": 0.6761363636363636, "Long Middle": 0.4583333333333333, "Short Right": 0.6222222222222222, "Long Left": 0.18181818181818182, "Short Middle": 0.6095238095238096, "Long Right": 0.2553191489361702}, "PIT": {"Short Left": 0.7391304347826086, "Long Middle": 0.6, "Short Right": 0.7339901477832512, "Long Left": 0.45454545454545453, "Short Middle": 0.7107438016528925, "Long Right": 0.32653061224489793}, "IND": {"Short Left": 0.6404494382022472, "Long Middle": 0.5151515151515151, "Short Right": 0.6554621848739496, "Long Left": 0.3404255319148936, "Short Middle": 0.6115702479338843, "Long Right": 0.49206349206349204}, "HOU": {"Short Left": 0.6326530612244898, "Long Middle": 0.55, "Short Right": 0.6242038216560509, "Long Left": 0.3783783783783784, "Short Middle": 0.693069306930693, "Long Right": 0.375}, "CAR": {"Short Left": 0.6219512195121951, "Long Middle": 0.45, "Short Right": 0.5989010989010989, "Long Left": 0.4, "Short Middle": 0.7303370786516854, "Long Right": 0.42}, "STL": {"Short Left": 0.7786259541984732, "Long Middle": 0.2857142857142857, "Short Right": 0.5888888888888889, "Long Left": 0.425, "Short Middle": 0.7526881720430108, "Long Right": 0.45652173913043476}, "JAC": {"Short Left": 0.6060606060606061, "Long Middle": 0.3888888888888889, "Short Right": 0.642512077294686, "Long Left": 0.2222222222222222, "Short Middle": 0.5507246376811594, "Long Right": 0.34375}, "PHI": {"Short Left": 0.7126436781609196, "Long Middle": 0.5135135135135135, "Short Right": 0.6666666666666666, "Long Left": 0.2826086956521739, "Short Middle": 0.6568627450980392, "Long Right": 0.39285714285714285}, "SF": {"Short Left": 0.6524390243902439, "Long Middle": 0.5789473684210527, "Short Right": 0.6453900709219859, "Long Left": 0.2916666666666667, "Short Middle": 0.7764705882352941, "Long Right": 0.1875}, "MIA": {"Short Left": 0.7619047619047619, "Long Middle": 0.2608695652173913, "Short Right": 0.6534653465346535, "Long Left": 0.3076923076923077, "Short Middle": 0.7008547008547008, "Long Right": 0.2777777777777778}, "KC": {"Short Left": 0.73125, "Long Middle": 0.5833333333333334, "Short Right": 0.6386138613861386, "Long Left": 0.28, "Short Middle": 0.6071428571428571, "Long Right": 0.43333333333333335}, "NYG": {"Short Left": 0.7218934911242604, "Long Middle": 0.3548387096774194, "Short Right": 0.6495327102803738, "Long Left": 0.3125, "Short Middle": 0.648, "Long Right": 0.4791666666666667}, "TB": {"Short Left": 0.5842696629213483, "Long Middle": 0.4444444444444444, "Short Right": 0.6716417910447762, "Long Left": 0.36538461538461536, "Short Middle": 0.686046511627907, "Long Right": 0.3157894736842105}, "SD": {"Short Left": 0.675531914893617, "Long Middle": 0.5, "Short Right": 0.7351351351351352, "Long Left": 0.44, "Short Middle": 0.6574074074074074, "Long Right": 0.3617021276595745}, "BAL": {"Short Left": 0.6573426573426573, "Long Middle": 0.4166666666666667, "Short Right": 0.6649214659685864, "Long Left": 0.3333333333333333, "Short Middle": 0.6594202898550725, "Long Right": 0.2972972972972973}, "GB": {"Short Left": 0.6776315789473685, "Long Middle": 0.6521739130434783, "Short Right": 0.6954022988505747, "Long Left": 0.23076923076923078, "Short Middle": 0.7184466019417476, "Long Right": 0.35185185185185186}, "CIN": {"Short Left": 0.6363636363636364, "Long Middle": 0.47058823529411764, "Short Right": 0.7176470588235294, "Long Left": 0.15789473684210525, "Short Middle": 0.7047619047619048, "Long Right": 0.34615384615384615}, "TEN": {"Short Left": 0.644927536231884, "Long Middle": 0.3888888888888889, "Short Right": 0.6153846153846154, "Long Left": 0.4166666666666667, "Short Middle": 0.75, "Long Right": 0.32075471698113206}, "CLE": {"Short Left": 0.5870967741935483, "Long Middle": 0.525, "Short Right": 0.5100671140939598, "Long Left": 0.41025641025641024, "Short Middle": 0.59, "Long Right": 0.3333333333333333}, "ATL": {"Short Left": 0.7164948453608248, "Long Middle": 0.7352941176470589, "Short Right": 0.6504854368932039, "Long Left": 0.36363636363636365, "Short Middle": 0.7068965517241379, "Long Right": 0.5128205128205128}, "NO": {"Short Left": 0.7673267326732673, "Long Middle": 0.45454545454545453, "Short Right": 0.7018348623853211, "Long Left": 0.52, "Short Middle": 0.648, "Long Right": 0.5348837209302325}, "WAS": {"Short Left": 0.7485714285714286, "Long Middle": 0.42105263157894735, "Short Right": 0.6528497409326425, "Long Left": 0.25, "Short Middle": 0.6593406593406593, "Long Right": 0.38461538461538464}, "SEA": {"Short Left": 0.7410071942446043, "Long Middle": 0.5, "Short Right": 0.6746987951807228, "Long Left": 0.375, "Short Middle": 0.6607142857142857, "Long Right": 0.3137254901960784}}';
	var DPassPCT = JSON.parse(DText);
	var OPassPCT = JSON.parse(OText);
	var TeamList = Object.keys(DPassPCT);
	//var temp = result[0];
	var select1 = document.getElementById("OTeam_Select");
	var select2 = document.getElementById("DTeam_Select");
	var team1 = select1.options[select1.selectedIndex].text;
	var team2 = select2.options[select2.selectedIndex].text;
    

	data1 = [];
	data2 = [];
    data1.push(OPassPCT[team1]["Long Middle"]);
    data1.push(OPassPCT[team1]["Long Right"]);
    data1.push(OPassPCT[team1]["Short Right"]);
    data1.push(OPassPCT[team1]["Short Middle"]);
    data1.push(OPassPCT[team1]["Short Left"]);
    data1.push(OPassPCT[team1]["Long Left"]);

    data2.push(DPassPCT[team2]["Long Middle"]);
    data2.push(DPassPCT[team2]["Long Right"]);
    data2.push(DPassPCT[team2]["Short Right"]);
    data2.push(DPassPCT[team2]["Short Middle"]);
    data2.push(DPassPCT[team2]["Short Left"]);
    data2.push(DPassPCT[team2]["Long Left"]);
	// for (i in OPassPCT[team1]) {
	// 	data1.push(OPassPCT[team1][i]);
	// };
	// for (i in DPassPCT[team2]) {
	// 	data2.push(DPassPCT[team2][i]);
	// };

	makeRadar(team1, data1, team2, data2);
    updateAnalysis(team1, data1, team2, data2);
};	 

$(document).ready(function(){
	text = '{"BUF": {"Short Left": 0.6746987951807228, "Long Middle": 0.4827586206896552, "Short Right": 0.6881720430107527, "Long Left": 0.3269230769230769, "Short Middle": 0.6696428571428571, "Long Right": 0.4}, "NYJ": {"Short Left": 0.5743243243243243, "Long Middle": 0.375, "Short Right": 0.6981132075471698, "Long Left": 0.3, "Short Middle": 0.6262626262626263, "Long Right": 0.2926829268292683}, "MIN": {"Short Left": 0.6225165562913907, "Long Middle": 0.4444444444444444, "Short Right": 0.6756756756756757, "Long Left": 0.37209302325581395, "Short Middle": 0.7303370786516854, "Long Right": 0.42105263157894735}, "CHI": {"Short Left": 0.6792452830188679, "Long Middle": 0.6153846153846154, "Short Right": 0.7253886010362695, "Long Left": 0.3469387755102041, "Short Middle": 0.7058823529411765, "Long Right": 0.20833333333333334}, "NE": {"Short Left": 0.7166666666666667, "Long Middle": 0.5135135135135135, "Short Right": 0.655367231638418, "Long Left": 0.27906976744186046, "Short Middle": 0.6696428571428571, "Long Right": 0.2857142857142857}, "ARI": {"Short Left": 0.5492957746478874, "Long Middle": 0.3888888888888889, "Short Right": 0.6505376344086021, "Long Left": 0.3392857142857143, "Short Middle": 0.6396396396396397, "Long Right": 0.3333333333333333}, "DEN": {"Short Left": 0.6731707317073171, "Long Middle": 0.6, "Short Right": 0.7244897959183674, "Long Left": 0.36538461538461536, "Short Middle": 0.6847826086956522, "Long Right": 0.42105263157894735}, "DET": {"Short Left": 0.6735751295336787, "Long Middle": 0.5833333333333334, "Short Right": 0.645320197044335, "Long Left": 0.21568627450980393, "Short Middle": 0.6403508771929824, "Long Right": 0.2571428571428571}, "DAL": {"Short Left": 0.7013888888888888, "Long Middle": 0.5, "Short Right": 0.7310344827586207, "Long Left": 0.4411764705882353, "Short Middle": 0.7766990291262136, "Long Right": 0.45714285714285713}, "OAK": {"Short Left": 0.6761363636363636, "Long Middle": 0.4583333333333333, "Short Right": 0.6222222222222222, "Long Left": 0.18181818181818182, "Short Middle": 0.6095238095238096, "Long Right": 0.2553191489361702}, "PIT": {"Short Left": 0.7391304347826086, "Long Middle": 0.6, "Short Right": 0.7339901477832512, "Long Left": 0.45454545454545453, "Short Middle": 0.7107438016528925, "Long Right": 0.32653061224489793}, "IND": {"Short Left": 0.6404494382022472, "Long Middle": 0.5151515151515151, "Short Right": 0.6554621848739496, "Long Left": 0.3404255319148936, "Short Middle": 0.6115702479338843, "Long Right": 0.49206349206349204}, "HOU": {"Short Left": 0.6326530612244898, "Long Middle": 0.55, "Short Right": 0.6242038216560509, "Long Left": 0.3783783783783784, "Short Middle": 0.693069306930693, "Long Right": 0.375}, "CAR": {"Short Left": 0.6219512195121951, "Long Middle": 0.45, "Short Right": 0.5989010989010989, "Long Left": 0.4, "Short Middle": 0.7303370786516854, "Long Right": 0.42}, "STL": {"Short Left": 0.7786259541984732, "Long Middle": 0.2857142857142857, "Short Right": 0.5888888888888889, "Long Left": 0.425, "Short Middle": 0.7526881720430108, "Long Right": 0.45652173913043476}, "JAC": {"Short Left": 0.6060606060606061, "Long Middle": 0.3888888888888889, "Short Right": 0.642512077294686, "Long Left": 0.2222222222222222, "Short Middle": 0.5507246376811594, "Long Right": 0.34375}, "PHI": {"Short Left": 0.7126436781609196, "Long Middle": 0.5135135135135135, "Short Right": 0.6666666666666666, "Long Left": 0.2826086956521739, "Short Middle": 0.6568627450980392, "Long Right": 0.39285714285714285}, "SF": {"Short Left": 0.6524390243902439, "Long Middle": 0.5789473684210527, "Short Right": 0.6453900709219859, "Long Left": 0.2916666666666667, "Short Middle": 0.7764705882352941, "Long Right": 0.1875}, "MIA": {"Short Left": 0.7619047619047619, "Long Middle": 0.2608695652173913, "Short Right": 0.6534653465346535, "Long Left": 0.3076923076923077, "Short Middle": 0.7008547008547008, "Long Right": 0.2777777777777778}, "KC": {"Short Left": 0.73125, "Long Middle": 0.5833333333333334, "Short Right": 0.6386138613861386, "Long Left": 0.28, "Short Middle": 0.6071428571428571, "Long Right": 0.43333333333333335}, "NYG": {"Short Left": 0.7218934911242604, "Long Middle": 0.3548387096774194, "Short Right": 0.6495327102803738, "Long Left": 0.3125, "Short Middle": 0.648, "Long Right": 0.4791666666666667}, "TB": {"Short Left": 0.5842696629213483, "Long Middle": 0.4444444444444444, "Short Right": 0.6716417910447762, "Long Left": 0.36538461538461536, "Short Middle": 0.686046511627907, "Long Right": 0.3157894736842105}, "SD": {"Short Left": 0.675531914893617, "Long Middle": 0.5, "Short Right": 0.7351351351351352, "Long Left": 0.44, "Short Middle": 0.6574074074074074, "Long Right": 0.3617021276595745}, "BAL": {"Short Left": 0.6573426573426573, "Long Middle": 0.4166666666666667, "Short Right": 0.6649214659685864, "Long Left": 0.3333333333333333, "Short Middle": 0.6594202898550725, "Long Right": 0.2972972972972973}, "GB": {"Short Left": 0.6776315789473685, "Long Middle": 0.6521739130434783, "Short Right": 0.6954022988505747, "Long Left": 0.23076923076923078, "Short Middle": 0.7184466019417476, "Long Right": 0.35185185185185186}, "CIN": {"Short Left": 0.6363636363636364, "Long Middle": 0.47058823529411764, "Short Right": 0.7176470588235294, "Long Left": 0.15789473684210525, "Short Middle": 0.7047619047619048, "Long Right": 0.34615384615384615}, "TEN": {"Short Left": 0.644927536231884, "Long Middle": 0.3888888888888889, "Short Right": 0.6153846153846154, "Long Left": 0.4166666666666667, "Short Middle": 0.75, "Long Right": 0.32075471698113206}, "CLE": {"Short Left": 0.5870967741935483, "Long Middle": 0.525, "Short Right": 0.5100671140939598, "Long Left": 0.41025641025641024, "Short Middle": 0.59, "Long Right": 0.3333333333333333}, "ATL": {"Short Left": 0.7164948453608248, "Long Middle": 0.7352941176470589, "Short Right": 0.6504854368932039, "Long Left": 0.36363636363636365, "Short Middle": 0.7068965517241379, "Long Right": 0.5128205128205128}, "NO": {"Short Left": 0.7673267326732673, "Long Middle": 0.45454545454545453, "Short Right": 0.7018348623853211, "Long Left": 0.52, "Short Middle": 0.648, "Long Right": 0.5348837209302325}, "WAS": {"Short Left": 0.7485714285714286, "Long Middle": 0.42105263157894735, "Short Right": 0.6528497409326425, "Long Left": 0.25, "Short Middle": 0.6593406593406593, "Long Right": 0.38461538461538464}, "SEA": {"Short Left": 0.7410071942446043, "Long Middle": 0.5, "Short Right": 0.6746987951807228, "Long Left": 0.375, "Short Middle": 0.6607142857142857, "Long Right": 0.3137254901960784}}'
	var DPassPCT = JSON.parse(text);
	var result = Object.keys(DPassPCT);
	for (var i = 0; i < result.length; i++) {
		var option = $('<option></option>').text(result[i]);
		$('#OTeam_Select').append(option);
	}
    for (var i = 0; i < result.length; i++) {
        var option = $('<option></option>').text(result[i]);
        $('#DTeam_Select').append(option);
    }
	updateChartData();
});


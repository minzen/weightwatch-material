import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import Chart from 'chart.js/src/chart.js';
import './weightwidget.html';

Template.weightwidget.onRendered(function() {
    console.log('weightwidget: onRendered()');
    var jsonStr = '{"weight":[{"bmi":21.03,"date":"2017-01-18","fat":8.109999656677246,"logId":1484724473000,"source":"Aria","time":"07:27:53","weight":68.1},{"bmi":20.95,"date":"2017-01-19","fat":7.614999771118164,"logId":1484811379000,"source":"Aria","time":"07:36:19","weight":67.8},{"bmi":20.94,"date":"2017-01-20","fat":7.991000175476074,"logId":1484897526000,"source":"Aria","time":"07:32:06","weight":67.8},{"bmi":20.99,"date":"2017-01-21","fat":7.822000026702881,"logId":1484990742000,"source":"Aria","time":"09:25:42","weight":68},{"bmi":21.05,"date":"2017-01-23","fat":7.373000144958496,"logId":1485157122000,"source":"Aria","time":"07:38:42","weight":68.2},{"bmi":21.08,"date":"2017-01-24","fat":7.429999828338623,"logId":1485244040000,"source":"Aria","time":"07:47:20","weight":68.3}]}';
    var jsonObj = JSON.parse(jsonStr);
    drawChart(jsonObj);
});

function drawChart(jsonObj) {
    console.log("length: " +jsonObj.weight.length)
    const NUM_DATAITEMS = jsonObj.weight.length;
    var weightLabels = new Array(NUM_DATAITEMS);
    var weightData = new Array(NUM_DATAITEMS);

    jsonObj.weight.forEach(function(entry, index) {
        console.log(index +": "  +entry.weight);
        weightLabels[index] = entry.date;
        weightData[index] = entry.weight;
    });

    var ctx  = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: weightLabels,
            datasets: [{
                label: 'Weight',
                data: weightData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false,
                        maxTicksLimit: 3
                    }
                }]
            },
            responsive: true
        }
    });
}

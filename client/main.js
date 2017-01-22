import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.weightInformation.onRendered(function() {
    var ctx  = document.getElementById("myChart").getContext("2d");

    var rand1 = random();
    var rand2 = random();
    var rand3 = random();
    var data = [
    {
        value: rand1,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: rand2,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: rand3,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
    ]
    var myPieChart = new Chart(ctx).Pie(data);
});

function random() {
    return Math.floor((Math.random() * 100) + 1);
}
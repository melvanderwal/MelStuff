function addRow(chartSet) {    
    var row = document.createElement("div");
    row.classList.add("row");    
    row.style.height = chartSet.height + "px";
    chartSet.charts.forEach(chart => {
        row.appendChild(chartFrame(chart[0], chart[1]));
    });
    document.getElementById("outerContent").appendChild(row);
}

function chartFrame (className,chartOid) {
    var frame = document.createElement("iframe");
    frame.classList.add(className);
    frame.style.padding = "5px";
    frame.setAttribute("frameborder", "0");
    frame.setAttribute("src", "https://docs.google.com/spreadsheets/u/0/d/e/2CAIWO3eme_Nua8MpNjEEzFQTtHWDJLQYX82dP1cwA_Mam93-Dbo763wPfn9j1UQrg5KFNSzRq2GjqLIoBdQ/gviz/chartiframe?autosize=true&oid=" + chartOid);  
    return frame;
}


let charts = [
    {"height": 150, "charts": [["gauge", 1969682006], ["chart", 469278234]]},
    {"height": 150, "charts": [["gaugePair", 61498154],["gaugePair", 2107591495], ["gauge", 37754069]]},
    {"height": 250, "charts": [["chart", 1343807972], ["chart", 1178812911]]},
    {"height": 250, "charts": [["chart", 2002231473],["chart", 1524167861]]},
    {"height": 250, "charts": [["chart", 1514251050],["chart", 1598170161]]},
    {"height": 250, "charts": [["chart", 1036758008]]},
    {"height": 250, "charts": [["chart", 104556950]]},
    {"height": 250, "charts": [["chart", 992399964]]},
    {"height": 250, "charts": [["chart", 1511096733]]}
]

charts.forEach(chartSet => {
    addRow(chartSet);
});
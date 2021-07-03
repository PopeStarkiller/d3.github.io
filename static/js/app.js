d3.json("samples.json").then((importedData) => {
   
    var data = importedData.samples;
    var data2 = importedData.metadata;
    var panel = d3.select("#sample-metadata");

    var dataB = data[0]
              var trace1 = {
              x: dataB.sample_values.slice(0, 10).reverse(),
              y:`OTU ${dataB.otu_ids.slice(0, 10).reverse()}`,
              text: dataB.otu_labels.slice(0, 10).reverse(),
              marker: {color: ["#EAF2F8", "#D4E6F1", "#A9CCE3", "#7FB3D5", "#5499C7", "#2980B9", "#2471A3", "#1F618D", "#1A5276", "#154360"]},
              type: "bar",
              orientation: "h"
              };
              var chartData = [trace1];
              var layout = {
                  title: "OTU",
                  xaxis: {title: "Total in Sample"},
                  
                  };
                Plotly.newPlot("bar", chartData, layout);


                var trace2 = {
                    x: dataB.otu_ids.slice(0, 10).reverse(),
                    y: dataB.sample_values.slice(0, 10).reverse(),
                    mode: 'markers',
                    marker: {
                      color: dataB.otu_ids.slice(0, 10).reverse(), 
                      size: dataB.sample_values.slice(0, 10).reverse()
                    }
                  };
                  
                  var data3 = [trace2];
                  
                  var layout = {
                    title: 'OTU Sample sizes',
                    showlegend: false,
                    height: 600,
                    width: 600
                  };
                  
                  Plotly.newPlot('bubble', data3, layout);

                  var data4 = [
                    {
                      domain: { x: [0, 1], y: [0, 1] },
                      value: data2[0].wfreq,
                      title: { text: "Wash Frequency" },
                      type: "indicator",
                      mode: "gauge+number",
                      
                      gauge: {
                        axis: { range: [null, 9] },
                        steps: [
                            { range: [0, 1], color: "Black" },
                            { range: [1, 2], color: "Cyan" },
                            { range: [2, 3], color: "DarkTurquoise" },
                            { range: [3, 4], color: "DarkCyan" },
                            { range: [4, 5], color: "SeaGreen" },
                            { range: [5, 6], color: "ForestGreen" },
                            { range: [6, 7], color: "LimeGreen" },
                            { range: [7, 8], color: "LawnGreen" },
                            { range: [8, 9], color: "Lime" }
                        ],
                        threshold: {
                          line: { color: "red", width: 4 },
                          thickness: 0.75,
                          value: 10
                        }
                      }
                    }
                  ];
                  
                  var layout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
                  Plotly.newPlot('gauge', data4, layout);
                console.log(data2[0])
                Object.entries(data2[0]).forEach(function([key, value]) {
                    console.log(`${key}: ${value}`)        
                    var row = panel.append("p");
                    row.text(`${key}: ${value}`);
                });
  

    let samples = new Set(data.map(sample => sample.id));

    samples.forEach(function(sample)  {
        d3.select("#selDataset").append("option").attr("key","value",).text(sample);
        
    })

var dropDown = d3.select("#selDataset");
dropDown.on("change", optionChanged)

    function optionChanged() {
    var selection = d3.select("#selDataset").property("value");
    panel.selectAll("p").remove();

        d3.event.preventDefault();
        var data1 = data.filter(input => input.id == selection);
        data1.sort(function(a, b) {
            return parseFloat(b.sample_values) - parseFloat(a.sample_values);
          });
        data1 = data1[0]

        let sampleV= data1.sample_values.slice(0, 10).reverse();
        let otuId= data1.otu_ids.slice(0, 10).reverse();
        let sotuLabel= data1.otu_labels.slice(0, 10).reverse();
        
       var data2b = data2.filter(input => input.id == selection)[0];
       console.log(data2b)

       Object.entries(data2b).forEach(function([key, value]) {
         console.log(`${key}: ${value}`)        
        var row = panel.append("p");
        row.text(`${key}: ${value}`);
       });

let stringOtu_ids = []
otuId.forEach(function(num) {
    stringOtu_ids.push(`OTU ${num}`);
});

          var trace1 = {
          x: sampleV,
          y: stringOtu_ids,
          text: sotuLabel,
          marker: {color: ["#EAF2F8", "#D4E6F1", "#A9CCE3", "#7FB3D5", "#5499C7", "#2980B9", "#2471A3", "#1F618D", "#1A5276", "#154360"]},
          type: "bar",
          orientation: "h"
          };
          var chartData = [trace1];
          var layout = {
              title: "OTU",
              xaxis: {title: "Total in Sample"},
              
              };
            Plotly.newPlot("bar", chartData, layout);
            var trace2 = {
                x: data1.otu_ids.slice(0, 10).reverse(),
                y: sampleV,
                mode: 'markers',
                marker: {
                  color: dataB.otu_ids.slice(0, 10).reverse(),
                  
                  size: sampleV
                }
              };
              
              var data3 = [trace2];
              
              var layout = {
                title: 'OTU Sample sizes',
                showlegend: false,
                height: 600,
                width: 600
              };
              
              Plotly.newPlot('bubble', data3, layout);


              var data4 = [
                {
                  domain: { x: [0, 1], y: [0, 1] },
                  value: data2b.wfreq,
                  title: { text: "Wash Frequency" },
                  type: "indicator",
                  mode: "gauge+number",
                  
                  gauge: {
                    axis: { range: [null, 9] },
                    steps: [
                        { range: [0, 1], color: "Black" },
                        { range: [1, 2], color: "Cyan" },
                        { range: [2, 3], color: "DarkTurquoise" },
                        { range: [3, 4], color: "DarkCyan" },
                        { range: [4, 5], color: "SeaGreen" },
                        { range: [5, 6], color: "ForestGreen" },
                        { range: [6, 7], color: "LimeGreen" },
                        { range: [7, 8], color: "LawnGreen" },
                        { range: [8, 9], color: "Lime" }
                      
                    ],
                    threshold: {
                      line: { color: "red", width: 4 },
                      thickness: 0.75,
                      value: 10
                    }
                  }
                }
              ];
              
              var layout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
              Plotly.newPlot('gauge', data4, layout);
    }
  });
/**
 * Radius Monitor Interface Speed Chart
 * Author : Maizil <https://github.com/maizil41>
 */
const apiUrl="../backend/graph.php";const data={labels:[],datasets:[{label:"Tx",borderColor:"#20a8d8",backgroundColor:"rgba(0, 0, 255, 0.1)",data:[],fill:!0,pointStyle:"circle",pointRadius:3,tension:0.4,},{label:"Rx",borderColor:"#f86c6b",backgroundColor:"rgba(255, 20, 147, 0.1)",data:[],fill:!0,pointStyle:"circle",pointRadius:3,tension:0.4,},],};const legendColorPlugin={id:'customLegendColor',beforeRender:function(chart){chart.legend.legendItems.forEach((legendItem,index)=>{if(legendItem.text==='Tx'){legendItem.fillStyle='#20a8d8'}else if(legendItem.text==='Rx'){legendItem.fillStyle='#f86c6b'}})}};const config={type:"line",data:data,options:{responsive:!0,plugins:{legend:{position:"bottom",labels:{boxWidth:8,boxHeight:8,usePointStyle:!0,font:{size:12,weight:"normal",family:"Arial"}}},tooltip:{callbacks:{label:function(context){let value=context.raw;let sizes=["bps","kbps","Mbps","Gbps"];let i=0;while(value>=1024&&i<sizes.length-1){value/=1024;i++}
return `${context.dataset.label}: ${value.toFixed(2)} ${sizes[i]}`},title:function(tooltipItems){return `Time: ${tooltipItems[0].label}`},},},},scales:{x:{type:"time",time:{unit:"second",tooltipFormat:"HH:mm:ss",displayFormats:{second:"HH:mm:ss"}},title:{display:!1,text:"Time"},ticks:{autoSkip:!0,maxRotation:0,minRotation:0,maxTicksLimit:5}},y:{ticks:{autoSkip:!0,maxTicksLimit:4,callback:function(value){let sizes=["bps","kbps","Mbps","Gbps"];let i=0;while(value>=1024&&i<sizes.length-1){value/=1024;i++}
return `${value.toFixed(2)} ${sizes[i]}`},},title:{display:!1,text:"Speed"},},},elements:{point:{radius:3,hitRadius:10,hoverRadius:7}},interaction:{mode:"index",intersect:false},},plugins:[legendColorPlugin]};const speedChart=new Chart(document.getElementById("trafficMonitor"),config);let previousRxBytes=null;let previousTxBytes=null;let previousTime=null;function bytesToMbps(bytesPerSecond){return(bytesPerSecond*8)/1}
async function fetchInterfaceData(){try{const response=await fetch(apiUrl);const jsonData=await response.json();if(!jsonData||!jsonData.rx_bytes||!jsonData.tx_bytes){console.error("Data tidak valid diterima dari API:",jsonData);return}
const now=new Date();const currentTime=now.getTime();const timeLabel=now;if(previousRxBytes!==null&&previousTxBytes!==null&&previousTime!==null){const timeDiff=(currentTime-previousTime)/1000;const rxSpeedMbps=bytesToMbps((jsonData.rx_bytes-previousRxBytes)/timeDiff);const txSpeedMbps=bytesToMbps((jsonData.tx_bytes-previousTxBytes)/timeDiff);if(speedChart.data.labels.length>=6){speedChart.data.labels.shift();speedChart.data.datasets[0].data.shift();speedChart.data.datasets[1].data.shift()}
speedChart.data.labels.push(timeLabel);speedChart.data.datasets[0].data.push(rxSpeedMbps);speedChart.data.datasets[1].data.push(txSpeedMbps);speedChart.update()}
previousRxBytes=jsonData.rx_bytes;previousTxBytes=jsonData.tx_bytes;previousTime=currentTime}catch(error){console.error("Gagal mengambil data dari API:",error)}}
setInterval(fetchInterfaceData,3000)

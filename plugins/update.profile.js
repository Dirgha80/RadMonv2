/**
 * Radius Monitor Update Profile
 * Author : Maizil <https://github.com/maizil41>
 */
document.addEventListener('DOMContentLoaded',function(){fetch('../backend/bandwidth.php').then(response=>response.json()).then(data=>{let bwDropdown=document.getElementById('bw_id');if(Array.isArray(data.data)){data.data.forEach(item=>{let option=document.createElement('option');option.value=item.bw_id;option.textContent=item.bw_name;bwDropdown.appendChild(option)});bwDropdown.addEventListener('change',function(){let selectedBw=bwDropdown.value;let selectedItem=data.data.find(item=>item.bw_id===selectedBw);if(selectedItem){document.getElementById('rate_down').value=selectedItem.rate_down||'';document.getElementById('rate_up').value=selectedItem.rate_up||'';document.getElementById('bw_name').value=selectedItem.bw_name||''}})}else{console.error('Format tidak sesuai.')}}).catch(error=>console.error('Error:',error))});document.addEventListener("DOMContentLoaded",function(){function handlePlanTypeChange(){var planType=document.querySelector('input[name="typebp"]:checked');if(!planType)return;var planTypeValue=planType.value;var limitTypeSection=document.getElementById('Type');var timeLimitSection=document.getElementById('TimeLimit');var dataLimitSection=document.getElementById('DataLimit');if(planTypeValue==='Limited'){limitTypeSection.style.display='block';var limitType=document.querySelector('input[name="limit_type"]:checked');if(!limitType)return;var limitTypeValue=limitType.value;if(limitTypeValue==='Time_Limit'){timeLimitSection.style.display='block';dataLimitSection.style.display='none'}else if(limitTypeValue==='Data_Limit'){timeLimitSection.style.display='none';dataLimitSection.style.display='block'}else if(limitTypeValue==='Both_Limit'){timeLimitSection.style.display='block';dataLimitSection.style.display='block'}}else{limitTypeSection.style.display='none';timeLimitSection.style.display='none';dataLimitSection.style.display='none'}}
document.querySelectorAll('input[name="typebp"]').forEach(function(radio){radio.addEventListener('change',handlePlanTypeChange)});document.querySelectorAll('input[name="limit_type"]').forEach(function(radio){radio.addEventListener('change',handlePlanTypeChange)});handlePlanTypeChange();document.getElementById('planTimeBankInput').addEventListener('input',function(){calculatePlanBank()});document.getElementById('planTimeBankSelect').addEventListener('change',function(){calculatePlanBank()});document.getElementById('profileTimeBankInput').addEventListener('input',function(){calculateProfileBank()});document.getElementById('profileTimeBankSelect').addEventListener('change',function(){calculateProfileBank()});document.getElementById('data_limit').addEventListener('input',function(){calculateDataLimit()});document.getElementById('data_unit').addEventListener('change',function(){calculateDataLimit()});function calculatePlanBank(){let timeValue=parseFloat(document.getElementById('planTimeBankInput').value);let timeUnit=document.getElementById('planTimeBankSelect').value;let convertedValue;if(isNaN(timeValue)){console.log('Invalid input for planTimeBankInput:',timeValue);return}
if(timeUnit==="M"){convertedValue=timeValue*60}else if(timeUnit==="H"){convertedValue=timeValue*3600}else if(timeUnit==="D"){convertedValue=timeValue*86400}else{console.log('Invalid time unit for planTimeBankSelect:',timeUnit);return}
document.getElementById('planTimeBank').value=convertedValue;console.log('planTimeBank value set to:',convertedValue)}
function calculateProfileBank(){let timeValue=parseFloat(document.getElementById('profileTimeBankInput').value);let timeUnit=document.getElementById('profileTimeBankSelect').value;let convertedValue;if(isNaN(timeValue)){console.log('Invalid input for profileTimeBankInput:',timeValue);return}
if(timeUnit==="M"){convertedValue=timeValue*60}else if(timeUnit==="H"){convertedValue=timeValue*3600}else if(timeUnit==="D"){convertedValue=timeValue*86400}else{console.log('Invalid time unit for profileTimeBankSelect:',timeUnit);return}
document.getElementById('profileTimeBank').value=convertedValue;console.log('profileTimeBank value set to:',convertedValue)}
function calculateDataLimit(){let dataValue=parseFloat(document.getElementById('data_limit').value);let dataUnit=document.getElementById('data_unit').value;let convertedValue;if(isNaN(dataValue)){console.log('Invalid input for data_limit:',dataValue);return}
if(dataUnit==="MB"){convertedValue=dataValue*1048576}else if(dataUnit==="GB"){convertedValue=dataValue*1073741824}else{console.log('Invalid data unit for data_unit:',dataUnit);return}
document.getElementById('dataLimit').value=convertedValue;console.log('dataLimit value set to:',convertedValue)}})
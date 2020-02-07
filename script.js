var chrs = [
  {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
  {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
  {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
  {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
  {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
  {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];
for (var i = 0 ; i < chrs.length ; i++){
  var obj = chrs[i];
  var newDiv = document.createElement("div");
  newDiv.classList.add('character');
  document.body.append(newDiv);
  newDiv.innerHTML = "Name: "+obj.name+"<br/>"+ "Class: "+obj.class. toUpperCase()+"<br/>";
  var vehicle = document.createElement("div");
  vehicle.innerHTML = "Vehicle: " + obj.vehicle;
  
  var auto = document.createElement("img");
  auto.src = 'https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png';
   var dec = document.createElement("img");
  dec.src = 'https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png';
  
  if (obj.afl=="autobot"){
    newDiv.classList.add('autobot');
    newDiv.appendChild(auto);
  }
  else{
    newDiv.classList.add('decepticon');
    newDiv.appendChild(dec);
  }

  if (obj.vehicle=="truck"){
    vehicle.style.color = "blue";
  }
  else if(obj.vehicle=="tank"){
    vehicle.style.color = "green";
  }
  else if(obj.vehicle=="car"){
    vehicle.style.color = "gold";
  }
  else if(obj.vehicle=="plane"){
    vehicle.style.color = "white";
  }
  newDiv.appendChild(vehicle);
}
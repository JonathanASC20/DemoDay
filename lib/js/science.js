console.log(data);
let masterdiv = document.getElementById("masterDiv");
let newdiv = document.createElement("div");
for(let i = 0; i < science.length; i++){
    let newpT = document.createElement("p");
    let newpD = document.createElement("p");
    let newpURL = document.createElement("p");
    let newpTAGS = document.createElement("p");
    newpT.innerText = (data.science[i].title);
    newpD.innerText = (data.science[i].description)
    newpURL.innerText = (data.science[i].url)
    newpTAGS.innerText = (data.science[i].tags)
    newdiv.appendChild(newpT);
    newdiv.appendChild(newpD);
    newdiv.appendChild(newpURL);
    newdiv.appendChild(newpTAGS);
}
masterdiv.appendChild(newdiv);
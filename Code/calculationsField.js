console.log("A'm here Derevo");
console.log(window.innerWidth);
console.log(screen.orientation.type);

function cl(bubu) {console.log(bubu)};
let proportion =0;
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const derevoTpansform = document.getElementById('derevo-fone');


window.addEventListener('load', () =>{
    console.log('Was resized to ==> '+window.innerWidth); 
    console.log(screen.orientation.type);

    console.log(`Width ${screenWidth} and Height ${screenHeight}`);
if (screenWidth > screenHeight) {
     proportion = screenWidth/screenHeight;
} else {
     proportion = screenHeight/screenWidth;
}
console.log(screen.orientation.type);
cl(`Proportion  ${proportion}`);





if (proportion <2) {

    derevoTpansform.innerHTML = `
            <a class="derevo-item" id="derevo-item-1" href="https://docs.google.com/spreadsheets/d/1r9CxHE0fp_4rnm9ivhnfcczcFc6ytCrNyr8DlsnNyZM/edit?usp=sharing" target="_blank"></a>
            <a class="derevo-item" id="derevo-item-2" href="https://docs.google.com/spreadsheets/d/1DeB6WmI6s3-lWcUriF1FX_bTs3Yusq_n6mac0kSg_HY/edit?usp=sharing" target="_blank"></a>
            <a class="derevo-item" id="derevo-item-3" href="https://docs.google.com/spreadsheets/d/1_A6PHsE6otu_skEWy6_Izcc7j64nyNRHsIux_-LW3UU/edit?usp=sharing" target="_blank"></a>

            <a class="derevo-item" id="derevo-item-4" href="https://docs.google.com/spreadsheets/d/1TOApJlkKvs2zRspDwbDTIg_zmP9jZQzEYyEiR46tXo0/edit?usp=sharing" target="_blank" ></a>
            <a class="derevo-item" id="derevo-item-5" href="https://docs.google.com/spreadsheets/d/1Ou3hH2Wv3R9JV1BQW0MNN9CgBXSGo13pAZU0donhq44/edit?usp=sharing" target="_blank" ></a>
            <a class="derevo-item" id="derevo-item-6" href="https://docs.google.com/spreadsheets/d/1Of0KUjC8aGsjm_hokDkfIjZdycrdCMulvokhRJdzh3s/edit?usp=sharing" target="_blank" ></a>
            <a class="derevo-item" id="derevo-item-7" href="https://docs.google.com/spreadsheets/d/1y6oMeNbYG_y4092THT6Yzs_x4HcO2nGVtfAF-CLeDWs/edit?usp=sharing" target="_blank" ></a>
            <a class="derevo-item" id="derevo-item-8" href="https://docs.google.com/spreadsheets/d/11p7QAYfxn2Lj5L4HDtk9naGiZfgeHMOuXPjq9bPS6Vc/edit?usp=sharing" target="_blank" ></a>
            <a class="derevo-item" id="derevo-item-9" href="https://docs.google.com/spreadsheets/d/1vtyXQd3YJja5XB0A56eby3wsj7J8UOk2GRpEUBoQf0I/edit?usp=sharing" target="_blank" ></a>
            <a class="derevo-item" id="derevo-item-10" href="" target="_blank" ></a>
            <a class="derevo-item" id="derevo-item-11" href="" target="_blank" ></a>
            <a class="derevo-item" id="derevo-item-12" href="" target="_blank" ></a>`
    
} else {

    derevoTpansform.innerHTML = `
    
            <a class="derevo-item" id="derevo-item-1" href="./DerevoKoloda.html"></a>
            <a class="derevo-item" id="derevo-item-2" href="https://docs.google.com/spreadsheets/d/1DeB6WmI6s3-lWcUriF1FX_bTs3Yusq_n6mac0kSg_HY/edit?usp=sharing" target="_blank"></a>
            <a class="derevo-item" id="derevo-item-3" href="https://docs.google.com/spreadsheets/d/1_A6PHsE6otu_skEWy6_Izcc7j64nyNRHsIux_-LW3UU/edit?usp=sharing" target="_blank"></a>

            <a class="derevo-item" id="derevo-item-4" href="https://docs.google.com/spreadsheets/d/1TOApJlkKvs2zRspDwbDTIg_zmP9jZQzEYyEiR46tXo0/edit?usp=sharing" target="_blank" ></a>
            <a class="derevo-item" id="derevo-item-5" href="https://docs.google.com/spreadsheets/d/1Ou3hH2Wv3R9JV1BQW0MNN9CgBXSGo13pAZU0donhq44/edit?usp=sharing" target="_blank" ></a>
            <a class="derevo-item" id="derevo-item-6" href="https://docs.google.com/spreadsheets/d/1Of0KUjC8aGsjm_hokDkfIjZdycrdCMulvokhRJdzh3s/edit?usp=sharing" target="_blank" ></a>
            <a class="derevo-item" id="derevo-item-7" href="https://docs.google.com/spreadsheets/d/1y6oMeNbYG_y4092THT6Yzs_x4HcO2nGVtfAF-CLeDWs/edit?usp=sharing" target="_blank" ></a>
            <a class="derevo-item" id="derevo-item-8" href="https://docs.google.com/spreadsheets/d/11p7QAYfxn2Lj5L4HDtk9naGiZfgeHMOuXPjq9bPS6Vc/edit?usp=sharing" target="_blank" ></a>
            <a class="derevo-item" id="derevo-item-9" href="https://docs.google.com/spreadsheets/d/1vtyXQd3YJja5XB0A56eby3wsj7J8UOk2GRpEUBoQf0I/edit?usp=sharing" target="_blank" ></a>
            <a class="derevo-item" id="derevo-item-10" href="" target="_blank" ></a>
            <a class="derevo-item" id="derevo-item-11" href="" target="_blank" ></a>
            <a class="derevo-item" id="derevo-item-12" href="" target="_blank" ></a>
    
    `

    
};
});
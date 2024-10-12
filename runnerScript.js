const setpointDuration = .25;

const songPath = 'bullettrain.mp3';


const volArr=[4, 3, 3, 2, 2, 3, 3, 4];
const speedArr=[2, 3, 3, 4, 4, 3, 3, 2];

const setPointsVol = [.44, .465, .5, .535, .56];
const setPointsSpeed = [.88, .93, 1, 1.07, 1.12];


const randomsForVol=[];
const randomsForSpeed=[];

let randomsForVolIter = 0;
let randomsForSpeedIter = 0;

for (let i=0; i<600; i++){
    randomsForVol.push(pickAmongFive());
    randomsForSpeed.push(pickAmongFive());
}

let presVolIntervalIter = 0;
let presSpeedIntervalIter = 0;

let presVolInterval = 0;
let presSpeedInterval = 0;

function redefineVolInterval(){
    presVolInterval = volArr[presVolIntervalIter];
}

function redefineSpeedInterval(){
    presSpeedInterval = speedArr[presSpeedInterval];
}

function pickAmongFive(){
    return Math.floor(Math.random() * 5);
}

function nextVolIntervalIter(){
    if (presVolIntervalIter < 7){
        presVolIntervalIter++;
    }
    else{
        presVolIntervalIter=0;
    }
}

function nextSpeedIntervalIter(){
    if (presSpeedIntervalIter < 7){
        presSpeedIntervalIter++;
    }
    else{
        presSpeedIntervalIter=0;
    }
}



function runner(){
    const songAudio = new Audio(songPath);
    
    let randomForVolVal = setPointsVol[randomsForVol[randomsForVolIter]];
    let randomForSpeedVal = setPointsSpeed[randomsForSpeed[randomsForSpeedIter]];



    let volIntervalIter = 0;
    let speedIntervalIter = 0;
    redefineSpeedInterval();
    redefineVolInterval();


    let volInterval = presVolInterval;
    let speedInterval = presSpeedInterval;


    songAudio.play();
    advanceVolume();
    advanceSpeed();

    function advanceVolume(){
          setTimeout(function(){
              songAudio.volume = randomForVolVal;
              volIntervalIter += volArr[presVolIntervalIter];
              advanceVolume();
          }, setpointDuration * volInterval * 1000);
          nextVolIntervalIter();
          redefineSpeedInterval();
          volInterval = presVolInterval;
          randomForVolVal = setPointsVol[randomsForVol[randomsForVolIter]];
          randomsForVolIter++;
    }

    function advanceSpeed(){
          setTimeout(function(){
              songAudio.playbackRate = randomForSpeedVal;
              speedIntervalIter += speedArr[presSpeedIntervalIter];
              advanceSpeed();
          }, setpointDuration * speedInterval * 1000);
          nextSpeedIntervalIter();
          redefineSpeedInterval();
          speedInterval = presSpeedInterval;
          randomForSpeedVal = setPointsSpeed[randomsForSpeed[randomsForSpeedIter]];
          randomsForSpeedIter++;
    }
}

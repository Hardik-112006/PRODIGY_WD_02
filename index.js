let milli = 0,sec = 0,min = 0,hr = 0;

function start(){
    timer = true;
    watch()
}

function stop(){
    timer = false;
    watch()
}

function reset(){
    location.reload()
}

function watch(){
    if(timer == true){
        milli = milli + 1;
        if(milli == 100){
            sec = sec + 1;
            milli = 0;
        }
          if(sec == 60){
          min = min + 1;
          sec = 0;
          }
          if(min == 60){
            hr = hr + 1;
            min = 0;
          }
         
    let getsec = sec;
    let getmin = min;
    let gethr = hr;

    if(sec<10){
        getsec = "0" + sec;
    }
     if(min<10){
        getmin = "0" + min;
    }
     if(hr<10){
        gethr = "0" + hr;
    }
   
          document.getElementById("milli").innerHTML = milli;
          document.getElementById("sec").innerHTML = getsec;
          document.getElementById("min").innerHTML = getmin;
          document.getElementById("hr").innerHTML = gethr;
          setTimeout(watch,10)
        }
}
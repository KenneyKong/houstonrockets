/*
function pointGuard() {
document.getElementById('posPG').style.display = "block";
}
*/

//point guards
function pointGuard() {
    const pgList = document.getElementById('posPG');
    if (pgList.style.display === "none") {
      pgList.style.display = "block";
    } else {
      pgList.style.display = "none";
    }
  }
  
  //shooting guards
  function shootingGuard() {
    const sgList = document.getElementById('posSG');
    if (sgList.style.display === "none") {
      sgList.style.display = "block";
    } else {
      sgList.style.display = "none";
    }
  }
  
  //small forward
  function smallForward() {
    const sfList = document.getElementById('posSF');
    if (sfList.style.display === "none") {
      sfList.style.display = "block";
    } else {
      sfList.style.display = "none";
    }
  }
  
  //power forward
  function powerForward() {
    const pfList = document.getElementById('posPF');
    if (pfList.style.display === "none") {
      pfList.style.display = "block";
    } else {
      pfList.style.display = "none";
    }
  }
  
  //center
  function center() {
    const ctList = document.getElementById('posC');
    if (ctList.style.display === "none") {
      ctList.style.display = "block";
    } else {
      ctList.style.display = "none";
    }
  }
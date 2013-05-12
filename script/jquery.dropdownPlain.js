window.onload=function() {
  document.getElementById("arrow").onclick=function(){
      var showDiv = document.getElementById('showDiv');
      showDiv.style.display = (showDiv.style.display  == 'none')?'block':'none';
  }
  document.getElementById('showDiv').style.display="none"; // not accessible by script until we set it
}
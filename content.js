;(function() {
  if( document.getElementById("contributions-calendar") ){
    var cal = document.getElementById("contributions-calendar");
    var rect = cal.getElementsByTagName("rect");
    for(var i=0; i < rect.length; i++){
      switch(rect[i].getAttribute("fill")){
        case "#1e6823":
          rect[i].setAttribute("fill", "#000066");
          break;
        case "#44a340":
          rect[i].setAttribute("fill", "#0078b5");
          break;
        case "#8cc665":
          rect[i].setAttribute("fill", "#8080fe");
          break;
        case "#d6e685":
          rect[i].setAttribute("fill", "#bfbffe");
          break;
        default:
          break;
      }
    }

    var ul = cal.getElementsByClassName("legend");
    var li = ul[0].childNodes;
    li[1].style.background = "#eee";
    li[3].style.background = "#bfbffe";
    li[5].style.background = "#8080fe";
    li[7].style.background = "#0078b5";
    li[9].style.background = "#000066";
  }
})();

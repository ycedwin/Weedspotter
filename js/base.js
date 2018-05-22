var snap = document.getElementById("snap");
snap.onchange=function(e){
  var file=e.target.files[0];
  var URL=window.URL|| window.webkitURL;
var fileURL=URL.createObjectURL(file);
var img= document.getElementById("showPhoto"); img.src=fileURL;
URL.revokeObjectURL(fileURL);}

var snap = document.getElementById("snap");

snap.onchange=function(e){
 var file=e.target.files[0];
 var URL=window.URL|| window.webkitURL;
 var fileURL=URL.createObjectURL(file);
 var img= document.getElementById("showPhoto");
 img.src=fileURL;
 URL.revokeObjectURL(fileURL);
};

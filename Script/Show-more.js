function showmoreless() {
if( document.getElementById("showmoreimages").innerHTML == "LOAD MORE PRODUCTS" ){
    document.getElementById("showmoreimages").innerHTML = "LOAD LESS PRODUCTS"
    var elems = document.getElementsByClassName('mosaic_more');
    for (var i=0;i<elems.length;i+=1){
        elems[i].style.display = 'flex';
    }

}
else{
    document.getElementById("showmoreimages").innerHTML = "LOAD MORE PRODUCTS"
    var elems = document.getElementsByClassName('mosaic_more');
    for (var i=0;i<elems.length;i+=1){
        elems[i].style.display = 'none';
    }
}
    
}
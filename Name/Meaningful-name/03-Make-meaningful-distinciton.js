//klass
//a1, a2, a3


//wrong
function copy(a1, a2){
  for(var i=0; i<a1.length; i++){
    a2[i] = a1[i];
  }
}

//better
function copy(source, destination){
  for(var i=0; i<source.length; i++){
    destination[i] = source[i];
  }
}

//Noisy words- Product, ProductInfo, ProductClass.
//Use pronounceable name.
//Use searchable name. MAX_CLASS_PER_STUDENT vs. 7.
//Avoid encoding.




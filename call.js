var get = function(url, callback){
  var xhr = mew XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState===4){
      callback(xhr.responseText, xhr.status);
    }
  };
  xhr.open('GET', url);
  xhr.send(null);
};

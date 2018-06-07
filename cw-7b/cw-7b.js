function capitalize(s){
  var s1 = '';
  var s2 = '';
  for(var i = 0; i < s.length; i++){
  letter = s[i];
  if (i % 2 != 0) {
  s1 += letter.toLowerCase();
  s2 += letter.toUpperCase();
  }
  else {
  s1 += letter.toUpperCase();
  s2 += letter.toLowerCase();
  }
  }
  return [s1, s2];
  }
function capitalize(s) {
  let s1 = "";
  let s2 = "";
  for(var i = 0; i < s.length; i++) {
      if (i % 2 == 0) {
      s1[i] += s1.toUpperCase();
      s2[i] += s1.toLowerCase();
      }
      else {
      s2[i].toLowerCase();
    }   
    return [s1, s2];
  }
}; 
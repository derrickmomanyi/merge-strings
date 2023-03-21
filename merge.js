function mergeStrings(first, second){
    let count = 0;
    
    for (let i = 0; i < first.length; i++) {
      if (first[i] == second[count]) {
        count++;
      } else {
        count = 0;
        if (first[i] == second[count]) count++;
      }
    }
  
    return first + second.slice(count);
  }


// let str1 = "abcde"
// let str2 = "cdefgh"
//     function mergeStrings(str1, str2){
//         let count = 0
//         for (let i = 0; i < str1.length; i++) {
//             if (str1[i] === str2[count]){
//                 count++
//             }
//             else {
//             count = 0;
//             if (str1[i] == str2[count]) count++;
//             }
            
//         }
//         return str1 + str2.slice(count)
      
//     }

 mergeStrings("abcde","cdefgh")
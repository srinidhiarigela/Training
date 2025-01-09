// function isPalindrome(str) {
//     let j = str.length - 1
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str[i] != str[j]) {
//             return false;
//         }
//         j--;
//     }
//     return true;
// }

// // let str1 = "racecar";
// // let str2 = "nitin";
// // let str3 = "Rama";

// // console.log(isPalindrome(str1));
// // console.log(isPalindrome(str2));
// // console.log(isPalindrome(str3));

// let inputStr=prompt("Enter a nmbr r strng to check palindrome");
// console.log(isPalindrome(inputStr));


//!
function isPalindrome(str){
    let revStr="";
    //console.log(str[i]);
    for(let i=str.length-1;i>=0;i--){
        revStr+=str[i];
    }
    //console.log(revStr);
    if(str == revStr){
        console.log("Palindrome");
    }else{
        console.log("Not a Palindrome");
    
    }
}

 isPalindrome("madam");
 isPalindrome("sir");
 isPalindrome("malayalam");


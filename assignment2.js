const str = "AlbERt eINstEiN";

function nameFormatter(oldName) {      
  /* 
    Split the string by space
    name.split
    Slice the first character and make it uppercase
    Slice the reset of the characters and make it lowercase
    Join the splitted array with space to get the final result
    Final result should be "Albert Einstein"                
    */
  
   var words = str.split(' ');
   var firstName = words[0];
   var lastName = words[1];
   var firstLetter = firstName.slice(-6,-5).toUpperCase();
   var FirstLetters =firstName.slice(1).toLowerCase(); 
   var FirstName = firstLetter.concat(FirstLetters);
   
   
   var lastNameFirstLetter = lastName.slice(-8,-7).toUpperCase();
   var lastNameRestLetter = lastName.slice(1).toLowerCase();
   var LastName = lastNameFirstLetter.concat(lastNameRestLetter);
   
   var FullName = [FirstName,LastName];
   var Name = FullName.join(' ');


    return Name;
}
console.log(nameFormatter(str));
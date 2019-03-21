/*
get a random number less than 10,
wait three seconds
write the number to the hard drive
Then, once all that is done, console log "I'm done!"

CONSTRAINTS
- No using setTimeout (must use waitOneSecond)
- No editing any file except main.js
*/

var getNumLessThanTen = require("./getNumLessThan");
var waitOneSecond = require("./waitOneSecond");
var writeToFile = require("./writeToFile");

getNumLessThanTen((err, randomNumber) => {
  if(err) {
    console.log(err);
  } else {
    waitOneSecond((err, result) => {
      if(err) {
        console.log(err);
      } else {
        console.log(result);
        waitOneSecond((err, result) => {
          if(err) {
            console.log(err);
          } else {
            console.log(result);
            waitOneSecond((err, result) => {
              if(err) {
                console.log(err);
              } else {
                console.log(result);
                writeToFile(randomNumber, (err, result) => {
                  if (err) {
                    console.log(err)
                  } else {
                    console.log(result);
                  }
                })
              }
            })
          }
        })
      }
    })
  }
});


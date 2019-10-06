/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(focus, knowsProgramming, config) {

  //from scratch to JS ninja level it will take 1300 hours
  //if student knows programming, it will take 800 hours
  
  return (knowsProgramming ? Math.ceil(800 / config[focus]) : Math.ceil(1300 / config[focus]));
}
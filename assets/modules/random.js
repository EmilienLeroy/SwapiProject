/**
 * helper to get random number
 * @param {int} min 
 * @param {int} max 
 */
function getRandom(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export { getRandom }
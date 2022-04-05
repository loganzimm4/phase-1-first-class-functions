function playMusic() {
    console.log('We are jamming out today!');
}
function playGames() {
    console.log("Let's shoot some bad guys!");
}
function snackTime() {
    console.log('Time for an afternoon snack!');
}
function monday() {
    afterSchoolFun(playMusic);
}
function receivesAFunction(activity) {
    snackTime();
    activity();
}
function returnsANamedFunction() {
    return receivesAFunction;
}
const returnsAnAnonymousFunction = () => {
    return () => {
        
    }
}

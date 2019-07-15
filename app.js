(function calcAge() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var age;

    age = year - 1999;
    if(month == 0){
        if( day < 11){
            age = age-1;
            return document.getElementById('age') = age;
        }
    }
    return document.getElementById('age').innerHTML = age;

})();


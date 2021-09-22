// Code your solution in this file!
const returnFirstTwoDrivers = function(driver){
    return driver.slice(0,2);
}

const returnLastTwoDrivers = function(driver) {
    return driver.slice(driver.length-2, driver.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(integer){
    return function () {return integer*integer};
}

const fareDoubler = function(fare){
    return fare*2;
}

function fareTripler(fare){
    return fare*3;
}

function selectDifferentDrivers(arrayOfDrivers, driverFunction){
    return driverFunction(arrayOfDrivers);
}
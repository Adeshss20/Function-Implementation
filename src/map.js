const map = (arr,task) => {
    if (task=="identity") {
        return identity(arr);        
    } else {
        return cube(arr,0);
    }
}

function identity(arr) {
    return arr;
}

function cube(arr,index) {

    if (index<=arr.length-1) {
        arr[index]=Math.pow(arr[index],3);
        cube(arr,index+1);
    }
    return arr;
}

module.exports = map;
const min = (arr,index) => {
    var res;
    if (arr.length==1) {
        return arr[0];    
    }
    if(index>=arr.length-2)
    {
        if (arr[index]<arr[index+1]) {
            return arr[index];
        }
        else {
            return arr[index+1];
        }
    }
    res=min(arr,index+1);
    
    if (res<arr[index]) {
        return res;
    } else {
        return arr[index];
    }
}
module.exports = min;
function CreateObject(arr) {
    // Write your code here
    d={}
    for(let i=0;i<arr.length;i+=2)
    {
        d[arr[i]]=arr[i+1],arr[i+2]
    }
    return d
}
module.exports = CreateObject;

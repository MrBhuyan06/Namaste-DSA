





var singleNumber = function(nums) {
    let frequencyObj = {}


    for ( let i = 0 ; i < nums.length ; i++){
        console.log(nums)
        frequencyObj[nums[i]] = (frequencyObj[nums[i]] || 0) + 1
        console.log(frequencyObj)
    }
    console.log("frequencyObj", frequencyObj)
    for(let key in frequencyObj){
        if(frequencyObj[key] == 1){
            return  key
        }
    }
};

let nums = [4,1,2,1,2]


console.log(singleNumber(nums))
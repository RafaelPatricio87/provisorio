let maxArea = function(height) {
  let left = 0
  let right = height.length - 1
  let area = 0
  
  while(left <= right){

    let current = Math.min(height[left], height[right]) * (right - left)
   if(current > area){
    area = current
   }
    if(height[right] <= height[left]){
      right--
    }else{
      left++
    } 
 
  }
   return area
  
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
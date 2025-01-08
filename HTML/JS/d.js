var intersect = function(nums1, nums2) {
  let num1map= new Map()
  let num2map= new Map()
  let result = [];
  for(let i =0 ; i<nums1.length;i++){
      if(num1map.has(nums1[i])){
          num1map.set(nums1[i],num1map.get(nums1[i])+1)
      }else{
          num1map.set(nums1[i],1)
      }
  }
  
  for(let i =0 ; i<nums2.length;i++){
      if(num1map.has(nums2[i])){
          if(num1map.get(nums2[i])>0){
               num1map.set(nums2[i],num1map.get(nums2[i])-1)
               result.push(nums2[i])
      }
  }
  }
  return result
};

n1 = [1,2,2,4]
n2 = [2,2]
console.log(intersect(n1,n2))
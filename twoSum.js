// Sorted Two Sum
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// Given a sorted array of integers and a target, return a pair of indices where the corresponding values in the array add up to the target.

// Input: Sorted Array of Integers, Target Integer
// Output: Two element Array of Integers
// Example
// Input: [-5, 1, 3, 6, 7], -2      =>	Output: [0,2]
// Input: [1, 9, 10], 8			=>	Output: [-1,-1]
// Constraints
// Time Complexity: O(N)
// Auxiliary Space Complexity: O(1)

// May not use a hash to store values because that breaks the space complexity.


function twoSum(input, target){
  var i = 0,
      j = input.length - 1,
      sum;
  while(i < j && sum !== target){

    if(sum < target){
      i++;
    }else{
      j--;
    }
    sum = input[i] + input[j];
  }
  if(sum === target){
    return [i, j];
  }else{
    return [-1, 1];
  }
}


twoSum([-5, 1, 3, 6, 7], -2);

// Solution
// Initiate two indices i = 0, and j = length of array -1
// While i < j and sum of input[i] + input[j] does not equal to target
// If the sum is less than target increment i
// If the sum is greater than target decrement j
// After the while loop, if the sum does not equal to the target
// return [-1, -1],
// Otherwise return [i, j]
// Notes
// The sorted nature of the input allows us to perform the algorithm with constant auxiliary space.

/* Given
  function Tree (val){
    this.val = val;
    this.left = this.right = null;
  }
*/


let levelOrder = function(root) {
  //checks if root exists
  if (!root) return [];
  //Note ** arrays as queues are simple but inefficient
  //Initialize array (FIFO)
  var arr = [];
  arr.push(root);
  
  let result = [];
  
  //outter loop run until arr is empty
  while (arr.length > 0) {
    let row = [];
    // keep track of when row ends
    let rowSize = arr.length;
      
    while (rowSize > 0) {
      //take out bottom of the arr
      let curr = arr.shift();
      
      //check if there are children
      if (curr.left !== null) {
        arr.push(curr.left);
      }
      if (curr.right !== null) {
        arr.push(curr.right);
      }
            
            row.push(curr.val);
            rowSize--;
        }
        
        result.push(row);
    }
    
    return result;
};

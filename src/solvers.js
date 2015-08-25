/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


// board = 5x5
// initialize with a solution counter
// 1) find a spot that's 0. put a 1 there. 
// 1a)  increase the queen counter++
// 2) set the rest of the values in the 0 row to X.
// 3) set the rest of the values in the 0 column to X. 
// 4) set the rest of the right-diagonal squares to X
// 5) set the rest of the left diagonal squares to X.
// 6) find the next available spot that's 0 (repeat steps 1-5)
// 7) check if queen counter === n then we can exit and solution++, then go to the next cell


// at the end, replace all X with 0s

var j = new Board({n : 4});

j.set(0, [1, 0,0,0]);

j.set(1, [0,0,0,0]);

j.set(2, [0, 0, 1, 0]);

j.rows();

j.hasMajorDiagonalConflictAt(0);







window.findNRooksSolution = function(n) {

  // initialize with a solution counter
// 1) find a spot that's 0. put a 1 there. 
// 1a)  increase the queen counter++
// 2) set the rest of the values in the 0 row to X.
// 3) set the rest of the values in the 0 column to X. 
// 4) set the rest of the right-diagonal squares to X
// 5) set the rest of the left diagonal squares to X.
// 6) find the next available spot that's 0 (repeat steps 1-5)
// 7) check if queen counter === n then we can exit and solution++, then go to the next cell

  // debugger;
  var solution = new Board({n: n});
  var rows = solution.rows();
  var counter = 0;
  var inner = function(board, rowIndex) {
    // debugger;
    if (counter === solution.n || rowIndex === rows.length) {
      console.log(solution.rows());
      return;
    }
    // set counter to 0. 
    // for each column in a row
    for (var colIndex = 0; colIndex <= rows.length - 1; colIndex++) {
      // toggle the cell
      solution.togglePiece(rowIndex, colIndex);
      // increment the counter by one 
      counter++;
        // if there is a conflict
      if (solution.hasAnyRooksConflicts()) {
        solution.togglePiece(rowIndex, colIndex);
        counter--;
      } else {
        inner(solution, rowIndex + 1);
      }
          // decrement the counter 
          // toggle it off.
        // if there is no conflict
          // go to the next row and repeat the steps <-- recursive piece
    }

  }
  inner(solution, 0);
  // pass in the outputted board as an argument

  console.log(solution.rows());
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = undefined; //fixme
  var solutionCount = 0;

  // once the rook counter === n, then increment up the solution count 
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

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
  console.log(rows);
  var inner = function(rowIndex, colIndex) {
    debugger;
    var counter = 0;
    for (var i = rowIndex; i < rows.length; i++) {
      for (var j = colIndex; j < rows.length; j++) {
        // if counter is equal to end, problem is solved.
        if (counter === solution.n) {
          console.log(solution.rows());
          return;
        }
        if (rows[i][j] === 0) {
          // toggle  to the next piece over
          solution.togglePiece(i, j);
          counter++;
          // check for conflict
            // if true, toggle piece, decrease counter, check to see if we're at end of board.
          if (solution.hasAnyRooksConflicts()) {
            solution.togglePiece(i, j); // turns the piece back to 0
            counter--;
            if (j >= rows.length - 1) {
              j = 0;
              if (solution._isInBounds(i + 1, j)) {
                break;
              }
            }
          // if no conflict...
          } else {
              // check to see if we are at last column.
            if (j >= rows.length - 1) {
              // if at last column, reset j
              j = 0;
              // check to see if we are in bounds on the next row.
              if (solution._isInBounds(i + 1, j)) {
                // if true, run operation on new values.
                continue;
              }
            }
            if (solution._isInBounds(i, j + 1)) {
              continue;
            }
          } 
        } 
      }
    }
  }

  inner(0, 0);

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

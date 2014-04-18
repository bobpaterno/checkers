(function(){
  'use strict';


  $(document).ready(init);

  var currPlayer;

  function init() {
    currPlayer = 'player1';
    addSpaces();
    setupBoard();
    getYdir();

    $('#board').on('click','.piece', selectPiece);
    $('#board').on('click','td:not(.piece)', movePiece);
  }

  function movePiece() {
debugger;
    if($(this).hasClass('validSpace') && $('.selected').length) {
        isAdjacent($(this).data('x'), $(this).data('y'));

    }
  }

  function selectPiece() {
debugger;
    if(isSelected()) {
      $('.selected').removeClass('selected');
    }
    if($(this).hasClass('piece')) {
      if($(this).hasClass(currPlayer)) {
        $(this).addClass('selected');
      }
    }

  }

  function isAdjacent(x, y) {
    var currXY = getCurrPiecePos();
    var offX = Math.abs(currXY[0] - x);
    var offY = currXY[1] + y;

    if(offX === 1 && offY === 1) {
      if(currPlayer === 'player1') {
        return (offY > 0)?true : false;
      }
      else {
        return (offY < 0)?true : false;
      }
    }

    return false;
  }


  function getCurrPiecePos() {
    var xy=[];
    xy[0] = $('.selected').data('x');
    xy[1] = $('.selected').data('y');
    return xy;
  }

  function getYdir() {
    return $('.selected').hasClass('player1')? 1 : -1;
  }

  function isSelected() {
    return ($('.selected').length > 0);
  }

  function setupBoard() {
    var spaces = $('.validSpace');
    for(var i=0; i<12; i++) {
      $(spaces[i]).addClass('player2');
      $(spaces[i]).addClass('piece');
    }

    for(i=20; i<32; i++) {
      $(spaces[i]).addClass('player1');
      $(spaces[i]).addClass('piece');
    }
  }

  function addSpaces() {
    $('tr:nth-child(2n) td:nth-child(2n+1)').addClass('validSpace');
    $('tr:nth-child(2n-1) td:nth-child(2n)').addClass('validSpace');
  }


})();

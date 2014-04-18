(function(){
  'use strict';


  $(document).ready(init);


  function init() {
    addSpaces();
    setupBoard();
    getYdir();

    $('#board').on('click','.piece.current', selectPiece);
    $('#board').on('click','td:not(.piece)', checkSpace);
  }

  function checkSpace() {
    if($(this).hasClass('validSpace') && $('.selected').length) {
        if(isAdjacent($(this).data('x'), $(this).data('y'))) {
          move(this);
        }

    }
  }

  function move(curr) {
    if($('.selected').hasClass('player1')){
      $(curr).addClass('player1 piece');
      $('.selected').removeClass('player1 piece selected current');
      $('.player1').removeClass('current');
      $('.player2').addClass('current');
    } else {
      $(curr).addClass('player2 piece');
      $('.selected').removeClass('player2 piece selected current');
      $('.player2').removeClass('current');
      $('.player1').addClass('current');
    }

  }

  function selectPiece() {
    if(isSelected()) {
      $('.selected').removeClass('selected');
    }
    $(this).addClass('selected');

  }

  function isAdjacent(x, y) {
debugger;
    var currXY = getCurrPiecePos();
    var offX = Math.abs(currXY[0] - x);
    var offY = currXY[1]-y;

    if(offX === 1 && Math.abs(offY) === 1) {
      if($('.selected').hasClass('player1')) {
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
      $(spaces[i]).addClass('player2 piece');
    }

    for(i=20; i<32; i++) {
      $(spaces[i]).addClass('player1 piece current');
    }
  }

  function addSpaces() {
    $('tr:nth-child(2n) td:nth-child(2n+1)').addClass('validSpace');
    $('tr:nth-child(2n-1) td:nth-child(2n)').addClass('validSpace');
  }


/*
  function move(){
    if ($('.selected').length > 0){
      if($('.selected').hasClass('player1')){
        $(this).addClass('player1 piece');
        $('.selected').removeClass('player1 piece selected current');
        $('.player1').removeClass('current');
        $('.player2').addClass('current');
      } else {
        $(this).addClass('player2 piece');
        $('.selected').removeClass('player2 piece selected current');
        $('.player2').removeClass('current');
        $('.player1').addClass('current');
      }
    }
  }

  function selectPiece(){
    if ($('.selected').length > 0){
      $('.selected').removeClass('selected');
    }
    $(this).addClass('selected');
  }
*/

})();

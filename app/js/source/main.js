(function(){
  'use strict';


  $(document).ready(init);

  var currPlayer;

  function init() {
    currPlayer = 'player1';
    addSpaces();
    setupBoard();

    $('#board').on('click','.validSpace', selectPiece);
    $('#board').on('click','td:not(.piece)', movePiece);
  }

  function movePiece() {
    // case where user clicks on a white space
    // rather than make them re-select the same piece again...just leave it selected
    if($(this).hasClass('validSpace')) {
      $('.selected').removeClass('selected');
    }
  }

  function selectPiece() {
    if(isSelected()) {
      $('.selected').removeClass('selected');
    }
    if($(this).hasClass('piece')) {
      if($(this).hasClass(currPlayer)) {
        $(this).addClass('selected');
      }
    }
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

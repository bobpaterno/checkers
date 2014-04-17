(function(){
  'use strict';

  $(document).ready(init);

  function init() {
    addSpaces();
    setupBoard();
    $('.validSpace').click(selectPiece);
  }

  function selectPiece() {
    if(isSelected()) {
      $('.selected').removeClass('selected');
    }
    $(this).addClass('selected');
  }

  function isSelected() {
    if($('.selected').length > 0) {
      return true;
    }
    return false;
  }

  function setupBoard() {
    var spaces = $('.validSpace');
    for(var i=0; i<12; i++) {
      $(spaces[i]).addClass('player2');
    }

    for(i=20; i<32; i++) {
      $(spaces[i]).addClass('player1');
    }
  }

  function addSpaces() {
    $('tr:nth-child(2n) td:nth-child(2n+1)').addClass('validSpace');
    $('tr:nth-child(2n-1) td:nth-child(2n)').addClass('validSpace');
  }



})();

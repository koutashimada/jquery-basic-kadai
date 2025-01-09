/*
change-color">文字色変化</button>
  <button id="change-text">文字内容変化</button>
  <button id="fade-out">フェードアウト</button>
  <button id="fade-in">フェードイン</button>
  */

  $('#change-color').on('click',function(){
    $('#target').css('color','red')
  });

  $('#change-text').on('click',function(){
    $('#target').text('こんばんは')
  });

  $('#fade-out').on('click',function(){
    $('#target').fadeOut()
  });
  $('#fade-in').on('click',function(){
    $('#target').fadeIn()
  });
  /*
  $('#change-text')
  $('#fade-out')
  $('#fade-in')
  */
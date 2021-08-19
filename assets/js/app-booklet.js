$(function() {
  console.log('booklet start ...')
  $('#birthday-book').booklet({
    closed: true,
    covers: true,
    next: '#btn-next',
    prev: '#btn-previous',
    shadows: false,
    autoCenter: true,
  });
});

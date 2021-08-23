$(document).ready(function() {
  startLoading();
});

function startLoading() {
  console.log('Start the loading animation ...');

  showLoadingAnimation();
}
function showLoadingAnimation() {
  let mainContainerEl = $('#main-container');
  let loadingContainerEl = $('#loading-container');

  // first, we need to hide the main container
  mainContainerEl.hide();

  // then load the whole page after timeout
  setTimeout(function() {
    console.log('Loading finish ...');
    loadingContainerEl.fadeOut();
    mainContainerEl.show();
  }, 3000);
}

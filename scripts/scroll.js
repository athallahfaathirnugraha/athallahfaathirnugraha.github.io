function getScrollP() {
  return window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
}

function getScroll() {
  return window.pageYOffset;
}

function getMiddleScroll() {
  return getScroll() + getViewportHeight() / 2;
}

function getBottomScroll() {
  return getScroll() + getViewportHeight();
}

function getPageHeight() {
  const body = document.body;
  const html = document.documentElement;
  
  return Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
}

function getViewportHeight() {
  return window.innerHeight;
}

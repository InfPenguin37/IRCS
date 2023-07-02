function changeMarginTop(containerId, newMarginTop) {
    var container = document.getElementById(containerId);
    if (container) {
        container.style.marginTop = newMarginTop;
    }
}
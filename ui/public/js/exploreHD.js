var setDefault = document.getElementById('set-default');
var dialog = document.getElementById('default-dialog');

setDefault.addEventListener('click', function() {
    dialog.showModal();
});

dialog.querySelector('.close').addEventListener('click', function() {
    dialog.close();
});

dialog.querySelector('.set').addEventListener('click', function() {
    // TODO: Set the settings
    dialog.close();
});

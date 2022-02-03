// exploreHD setup
var exploreHD = document.getElementsByClassName('explorehd-wrapper');

for (let i = 0; i < exploreHD.length; i++) {
    let ehd = exploreHD[i];
    let slider = ehd.querySelector('#bitrate-slider');
    let vbr = ehd.querySelector('#vbr-slider-' + i);
    console.log(vbr)
    let bitrate = ehd.querySelector('#bitrate-text');
    let h264Slider = ehd.querySelector('#gop-slider-' + i);
    let h264Label = ehd.querySelector('#gop-slider-label');
    vbr.onclick = function() {
        slider.disabled = vbr.checked;
        if (vbr.checked) {
            h264Label.classList.remove('is-checked');
            h264Slider.checked = false;
        }
        h264Slider.disabled = vbr.checked;
        bitrate.style.color = vbr.checked ? '#0000005A' : '#0000008A';
    }
}

// Dialog Setup
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

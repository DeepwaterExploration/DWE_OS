function stringToHTML(str) {
    var dom = document.createElement('div');
    dom.innerHTML = str;
    return dom.firstChild;
}

function createDevice(device, index) {
    let req = $.ajax({
        url: '/device',
        type: 'get', 
        data: {
            device, 
            index
        }, 
        success: function(res) {
            var ehd = stringToHTML(res);
            document.querySelector('#device-wrapper').appendChild(ehd);
            componentHandler.upgradeDom();

            let slider = ehd.querySelector('#bitrate-slider');
            let vbr = ehd.querySelector('#vbr-slider-' + index);
            let bitrate = ehd.querySelector('#bitrate-text');
            let h264Slider = ehd.querySelector('#gop-slider-' + index);
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
        }, 
        error: function() {
            console.error('Error getting /device');
        }
    });
    return req;
}

var devices = [
    '/dev/video2',
    '/dev/video4',
    '/dev/video6',
];
let requests = [];
for (let i = 0; i < devices.length; i++) {
    let device = devices[i];
    requests.push(createDevice(device, i));
}

$.when(...requests).done(function() {
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
})

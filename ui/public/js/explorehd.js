function stringToHTML(str) {
    var dom = document.createElement('div');
    dom.innerHTML = str;
    return dom.firstChild;
}

var deviceIndex = 0;

function createDevice(device) {
    let req = $.ajax({
        url: '/device',
        type: 'get', 
        data: {
            device, 
            index: deviceIndex
        }, 
        success: function(res) {
            var ehd = stringToHTML(res);
            document.querySelector('#device-wrapper').appendChild(ehd);
            componentHandler.upgradeDom();

            let slider = ehd.querySelector('#bitrate-slider');
            let vbr = ehd.querySelector('#vbr-slider-' + deviceIndex);
            let bitrate = ehd.querySelector('#bitrate-text');
            let h264Slider = ehd.querySelector('#gop-slider-' + deviceIndex);
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
    deviceIndex++;
    return req;
}

var devices = [
    '/dev/video2',
    '/dev/video4',
    '/dev/video6',
];
let requests = [];
for (let device of devices) {
    requests.push(createDevice(device));
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

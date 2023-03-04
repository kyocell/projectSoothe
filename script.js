const musicBtn = document.querySelector('.musicBtn');
const audioElementMaster = {
    1: {
        'name': 'White Noise',
        'audioSrc': 'sdad',
    }, 
    2: {
        'name': 'Pink Noise',
        'audioSrc': 'asd',
    },
    3: {
        'name': 'Brown Noise',
        'audioSrc': 'sda',
    },
    4: {
        'name': 'Table Fan',
        'audioSrc': 'sad',
    },
    5: {
        'name': 'Keyboard Typing',
        'audioSrc': 'sad',
    },
    6: {
        'name': 'Pen Writing',
        'audioSrc': 'sad',
    },
    7: {
        'name': 'Summer Night',
        'audioSrc': 'sad',
    },
    8: {
        'name': 'Summer Morning',
        'audioSrc': 'sad',
    },
    9: {
        'name': 'Windy Day',
        'audioSrc': 'sad',
    },
    10: {
        'name': 'Thunder Storm',
        'audioSrc': 'sad',
    },
    11: {
        'name': 'Rain under umbrella',
        'audioSrc': 'sad',
    },
    12: {
        'name': 'Heavy Rain',
        'audioSrc': 'sad',
    },
    13: {
        'name': 'Cafe Ambience',
        'audioSrc': 'sad',
    },
    14: {
        'name': 'Crackling Fireplace',
        'audioSrc': 'sad',
    },
    15: {
        'name': 'Wild Sea Shore',
        'audioSrc': 'sad',
    },
    16: {
        'name': 'Calm Brook',
        'audioSrc': 'sad',
    },

}
let audioObjectStateHandler = {};

const masterVolumeSliderInput = document.querySelector('.masterVolumeSlider');

// masterVolumeSliderInput.oninput = function () {

// }

function playAudioConstructor(className) {
    let hoveredElementClassNumber = className.substring(10, className.length);
    let hoveredElementAudioSource = audioElementMaster[hoveredElementClassNumber]['audioSrc'];

    createAudioObject(hoveredElementAudioSource, hoveredElementClassNumber)
}

function createToolTip(className) {
    let hoveredElementClassNumber = className.substring(10, className.length);
    tippy(''+className, {
        'content': audioElementMaster[hoveredElementClassNumber]['name'],
        'arrow': true,
    })
}

function createAudioObject(audioSource, activeAudioClassNumber) {
    if (checkElementExistence(activeAudioClassNumber)) {
        let fetchedActiveClassNumber = audioObjectStateHandler?.[activeAudioClassNumber]?.['activeClassNumber'];
        let fetchedAudioState = audioObjectStateHandler?.[activeAudioClassNumber]?.['audioState'];
        let fetchedAudioObject = audioObjectStateHandler?.[activeAudioClassNumber]?.['audioObject'];

        console.log(fetchedActiveClassNumber);
        console.log(fetchedAudioState);
        console.log(fetchedAudioObject);    
    
        if(fetchedAudioState == 3) {

            console.log('set audio level max-1, second click on element, set vol to 0.75');
            fetchedAudioState = fetchedAudioState-1;
            audioObjectStateHandler[activeAudioClassNumber]['audioState'] = fetchedAudioState;
            console.log(fetchedAudioState, audioObjectStateHandler);

        } else if (fetchedAudioState == 2) {

            console.log('set audio level to 0.50, third click on element');
            fetchedAudioState = fetchedAudioState-1;
            audioObjectStateHandler[activeAudioClassNumber]['audioState'] = fetchedAudioState;

        } else if (fetchedAudioState == 1) {

            console.log('set audio level to 0.25, fourth click on element');
            fetchedAudioState = fetchedAudioState-1;
            audioObjectStateHandler[activeAudioClassNumber]['audioState'] = fetchedAudioState;

        } else if (fetchedAudioState == 0) {

            console.log('set audio level to 0.10, fifth click on element');
            fetchedAudioState = fetchedAudioState-1;
            audioObjectStateHandler[activeAudioClassNumber]['audioState'] = fetchedAudioState;

        } else {

            console.log('Delete audio object');
            console.log('audio level after decrement sixth click on element');
            console.log(audioObjectStateHandler?.[activeAudioClassNumber]);
            console.log(delete audioObjectStateHandler?.[activeAudioClassNumber]);
            console.log(delete audioObjectStateHandler?.[activeAudioClassNumber]?.['audioObject']);
            console.log(audioObjectStateHandler);

        }
    } else {
        let newAudio = new Audio(audioSource);
        newAudio.loop = true;
        newAudio.play();
        audioObjectStateHandler[activeAudioClassNumber] = {
            'flag': true,
            'audioObject': newAudio,
            'activeClassNumber': parseInt(activeAudioClassNumber),
            'audioState': 3,
        }
        console.log(audioObjectStateHandler);
    }
}

function checkElementExistence(activeAudioClassNumber) {
    if(audioObjectStateHandler[activeAudioClassNumber]?.['activeClassNumber'] == activeAudioClassNumber) {
        return 1
    } else {
        return 0
    }
}

VANTA.FOG({
    el: "#vantajs",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0xdcdcdc,
    midtoneColor: 0xd7d7d7,
    lowlightColor: 0xc9c8cf,
    baseColor: 0x898383,
    blurFactor: 0.68,
    speed: 1.20,
    zoom: 1.60
})
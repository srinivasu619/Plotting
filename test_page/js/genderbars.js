var progressbaroptions1 = {
    color: '#81a4e3',
    strokeWidth: 7,
    trailWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: {
        color: '#81a4e3',
        width: 7
    },
    to: {
        color: '#81a4e3',
        width: 7
    },
    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value + '%');
        }

    }
}
var progressbaroptions2 = {
    color: '#e85f71',
    strokeWidth: 7,
    trailWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: {
        color: '#e85f71',
        width: 7
    },
    to: {
        color: '#e85f71',
        width: 7
    },
    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value + '%');
        }

    }
}
var bar = new ProgressBar.Circle(litMale,progressbaroptions1);
bar.text.style.fontFamily = '"Abel", Helvetica, sans-serif';
bar.text.style.fontSize = '14px';
bar.text.style.letterSpacing = '1px';

bar.animate(0.91);
var bar = new ProgressBar.Circle(illMale,progressbaroptions2);
bar.text.style.fontFamily = '"Abel", Helvetica, sans-serif';
bar.text.style.fontSize = '14px';
bar.text.style.letterSpacing = '1px';

bar.animate(0.09);
var bar = new ProgressBar.Circle(litFemale, progressbaroptions1);
bar.text.style.fontFamily = '"Abel", Helvetica, sans-serif';
bar.text.style.fontSize = '14px';
bar.text.style.letterSpacing = '1px';

bar.animate(0.86);
var bar = new ProgressBar.Circle(illFemale,progressbaroptions2);
bar.text.style.fontFamily = '"Abel", Helvetica, sans-serif';
bar.text.style.fontSize = '14px';
bar.text.style.letterSpacing = '1px';

bar.animate(0.14);
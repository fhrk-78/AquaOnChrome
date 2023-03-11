function runLine() {
    let codearea = document.getElementById('codearea');
    let debugarea = document.getElementById('debugarea');
    let loadinganimation = document.getElementsByClassName('loading');
    let codeinputs = document.getElementById('codeinput');
    var codes = '';
    var isthiserror = 0;

    loadinganimation[0].classList.remove('complete');

    const datasss = codeinputs.value.split(' ');

    console.log(datasss);

    if (datasss[0] == 'outf') {
        debugarea.insertAdjacentHTML('beforeend', datasss[1] + '<br>');
    } else {
        isthiserror = 1;
    }

    if (isthiserror == 0) {
        codearea.insertAdjacentHTML('beforeend', '<div class="output">' + codeinputs.value + ' - <span style="color: green;">Success</span></div>');
    } else {
        codearea.insertAdjacentHTML('beforeend', '<div class="output errorput">' + codeinputs.value + ' - <span style="color: red;">Error</span></div>');
    }
    codeinputs.value = '';

    loadinganimation[0].classList.add('complete');
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.rungo').addEventListener('click', runLine);
});
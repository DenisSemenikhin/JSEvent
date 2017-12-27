function createSelect(data, option){    
    const select = document.createElement('select');    
    select.size = data.length < option.maxSize ? data.length : option.maxSize;
    
    fillSelect(select, data);
    return select;
}

function fillSelect(select, data) {
    var id = 1
    data.forEach((elem) => {
        select.add(new Option(elem.name + " " + elem.code, id++));
    });
}

function refreshSelect(select, data) {
    cleanElement(select);
    fillSelect(select, data);
}

function cleanElement(elem) {
    while (elem.firstChild)
        elem.removeChild(elem.firstChild);
}

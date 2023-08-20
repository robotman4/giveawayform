function createMenu() {
    var div = document.createElement("div")
    var navbar = '<nav class="navbar navbar-expand-lg navbar-light bg-light">' +
    '<div class="container-fluid">' +
        '<a class="navbar-brand" href=".">Bamilla</a>' +
    '</div>' +
    '</nav>'

    div.innerHTML = navbar
    document.getElementById("main").appendChild(div)
}

function createContent(html="") {
    var div = document.createElement("div")
    div.id = "content"
    document.getElementById("main").appendChild(div)
    content = document.getElementById("content")
    content.innerHTML = html
}

function urlAddPath(selection) {
    window.history.pushState("#selection", "x", window.location.origin + "#" + selection);
    window.history.pushState
    window.addEventListener("popstate", historyListener, false);
}

function historyListener(event) {
    drawHome()
}

function drawAbout() {
    var html = '<div class="px-2 mt-2">' +
                    '<h1 class="mb-3">About</h1>' +
                    'This is made for fun.<br>' +
                    'For any questions please create an issue on <a href="https://github.com/felipgit/stitchmath" target="_blank" class="link-light">GitHub</a>.' +
                    '<div class="d-grid gap-2 px-2 mt-2">' +
                        '<a class="w-100 btn-lg btn btn-light rounded-pill" href="https://github.com/felipgit/stitchmath" target="_blank"><i class="fab fa-github"></i> GitHub</a>' +
                        '<button type="button" class="w-100 btn-lg btn btn-light rounded-pill" onclick="drawHome();return false;">Home</button>' +
                    '<div>' +
                '</div>'
    createContent(html)
    urlAddPath("About")
}

function drawHome() {
    var html = '<div class="d-grid gap-2 px-2 mt-2">' +
                    '<form>' +
                        '<label for="email" class="form-label">Email address</label>' +
                        '<div class="input-group mb-3 rounded-pill bg-white">' +
                            '<span class="input-group-icon" id="icon-email"><i class="fa fa-lg fa-envelope"></i></span>' +
                            '<input type="mail" class="form-control form-control-lg input-custom" aria-describedby="icon-email" id="email">' +
                        '</div>' +
                        '<label for="ravelry" class="form-label">Ravelry username</label>' +
                        '<div class="input-group mb-3 rounded-pill bg-white">' +
                            '<span class="input-group-icon" id="icon-ravelry"><i class="fa fa-lg fa-ravelry"></i></span>' +
                            '<input type="text" class="form-control form-control-lg input-custom" aria-describedby="icon-ravelry" id="ravelry">' +
                        '</div>' +
                        '<label for="pattern" class="form-label">Select pattern</label>' +
                        '<div class="container">' +
                            '<div class="row">' +
                                '<div class="col-6 col-md-3">' +
                                    '<div class="form-check p-0 item-selector">' +
                                        '<input class="form-check-input" type="radio" name="itemListRadio" id="AdventureLinesTank" value="AdventureLinesTank" hidden>' +
                                        '<label class="form-check-label label-pattern AdventureLinesTank" for="AdventureLinesTank"></label>' +
                                        // '<label class="form-check-label" for="AdventureLinesTank">Adventure Lines Tank</label>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="col-6 col-md-3">' +
                                    '<div class="form-check p-0 item-selector">' +
                                        '<input class="form-check-input" type="radio" name="itemListRadio" id="AdventureLaceTee" value="AdventureLaceTee" hidden>' +
                                        '<label class="form-check-label label-pattern AdventureLaceTee" for="AdventureLaceTee"></label>' +
                                        // '<label class="form-check-label label-pattern" for="AdventureLaceTee">Adventure Lace Tee</label>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="col-6 col-md-3">' +
                                    '<div class="form-check p-0 item-selector">' +
                                        '<input class="form-check-input" type="radio" name="itemListRadio" id="PalmhusTee" value="PalmhusTee" hidden>' +
                                        '<label class="form-check-label label-pattern PalmhusTee" for="PalmhusTee"></label>' +
                                        // '<label class="form-check-label label-pattern" for="PalmhusTee">Palmhus Tee</label>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="col-6 col-md-3">' +
                                    '<div class="form-check p-0 item-selector">' +
                                        '<input class="form-check-input" type="radio" name="itemListRadio" id="TangramAdventureShawl" value="TangramAdventureShawl" hidden>' +
                                        '<label class="form-check-label label-pattern TangramAdventureShawl" for="TangramAdventureShawl"></label>' +
                                        // '<label class="form-check-label label-pattern" for="TangramAdventureShawl">Tangram Adventure Shawl</label>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="p-0">&nbsp;</div>' +
                        '<label for="destination" class="form-label">Where to?</label>' +
'<div class="container p-1">' +
    '<div class="row">' +
        '<div class="col">' +
            '<input type="radio" class="btn-check" name="itemSendTo" id="success-outlined" autocomplete="off">' +
            '<label class="w-100 btn btn-light rounded-pill" for="success-outlined">Email</label>' +
        '</div>' +
        '<div class="col">' +
            '<input type="radio" class="btn-check" name="itemSendTo" id="danger-outlined" autocomplete="off">' +
            '<label class="w-100 btn btn-light rounded-pill" for="danger-outlined">Ravelry</label>' +
        '</div>' +
    '</div>' +
'</div>' +

'<div class="p-1">&nbsp;</div>' +

                        '<button type="submit" class="w-100 btn-lg btn btn-light rounded-pill">Get a free pattern</button>' +
                        '<div id="disclaimer" class="form-text-light">We will never share your details with anyone else.</div>' +
                    '</form>' +
                '<div>'
    createContent(html)
    urlAddPath("Home")
}

function main() {
    createMenu()
    drawHome()
}

var operators = []
var locked = false
main()

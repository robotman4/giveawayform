function createMenu() {
    var div = document.createElement("div")
    var navbar = '<!-- GENERATED MENU -->' +
    '<nav class="navbar navbar-expand-lg navbar-light bg-light">' +
        '<div class="container-fluid">' +
            '<a class="navbar-brand" href="https://www.bamilla.com/patterns/"><img style="height: 25px;" src="https://www.bamilla.com/favicon.ico"> Bamilla</a>' +
        '</div>' +
    '</nav>'

    div.innerHTML = navbar
    document.getElementById("main").appendChild(div)
}

function createContent(html="") {
    removeContentDivs()
    var div = document.createElement("div")
    div.id = "content"
    document.getElementById("main").appendChild(div)
    content = document.getElementById("content")
    content.innerHTML = html
}

function removeContentDivs() {
    var contentDivs = document.querySelectorAll("#content")
    for (var i = 0; i < contentDivs.length; i++) {
        var div = contentDivs[i]
        div.parentNode.removeChild(div)
    }
}

function drawThanks() {
    var html = '<!-- GENERATED THANKS -->' +
        '<div class="d-grid gap-2 px-2 mt-2" align="center">' +
            '<h2>Thank You!</h2>' +
            '<div>Your free pattern is getting ready! :)</div>' +
        '</div>'
    createContent(html)
}

function drawAbout() {
    var html = '<!-- GENERATED ABOUT -->' +
        '<div class="d-grid gap-2 px-2 mt-2" align="center">' +
            '<a class="btn btn-light rounded-pill" href="#" onclick="drawForm();return false;"><h2>Go back to giveaway</h2></a>' +
            '<h2>GDPR Compliance Notice</h2>' +
            '<div>Thank you for participating in our giveaway! We want to assure you that we take your privacy seriously and are committed to protecting your personal information.</div>' +
            '<div><b>Data Storage:</b> We will store your records, including your contact details, until the items that have been requested in the giveaway has been successfully delivered. This storage is necessary to ensure a smooth delivery process and to provide you with any necessary updates regarding your selection.</div>' +
            '<div><b>Communication:</b> We may contact you if there are any issues with the details you provided during the giveaway, such as delivery address discrepancies or other relevant matters. Our aim is to ensure that you receive your prize without any hitches.</div>' +
            '<div><b>Data Deletion:</b> Once the giveaway is complete, and items have been delivered, all records related to the giveaway will be promptly and securely destroyed to protect your privacy. We will not retain your data beyond this point.</div>' +
            '<div>And now, for a knitting joke to lighten the mood:</div>' +
            '<div><b>Knitting Joke:</b> Why did the knitter bring a ladder to the yarn store? Because they heard the prices were through the roof!</div>' +
            '<div>Thank you for being a part of our giveaway, and happy knitting! If you have any questions or concerns about your data or this disclaimer, please do not hesitate to <a class="link-light" href="mailto:giveaway@bamilla.com">contact us</a>.</div>' +
            '<h2>Contributions</h2>' +
            '<div>Thanks to github, chatgpt, jsfiddle and people at stackoverflow.</div>' +
            '<a class="btn btn-light rounded-pill" href="#" onclick="drawForm();return false;"><h2>Go back to giveaway</h2></a>' +
            '</div>'
    createContent(html)
}

function drawForm() {
    var html = '<!-- GENERATED FORM -->' +
    '<div class="d-grid gap-2 px-2 mt-2">' +
        '<form id="freepattern202308">' +
            '<input type="hidden" id="token" name="token" value="">' +
            '<label for="email" class="form-label">Email address</label>' +
            '<div class="input-group mb-3 rounded-pill bg-white">' +
                '<span class="input-group-icon" id="icon-email"><i class="fa fa-lg fa-envelope"></i></span>' +
                '<input type="email" class="form-control form-control-lg input-custom" aria-describedby="icon-email" id="emailAddress" name="emailAddress" required>' +
            '</div>' +
            '<label for="pattern" class="form-label">Select pattern</label>' +
            '<div class="container">' +
                '<div class="row">' +
                    '<div class="col-6 col-md-3">' +
                        '<div class="form-check p-0 item-selector">' +
                            '<input class="form-check-input" type="radio" name="itemList" id="Adventure Lines Tank" value="Adventure Lines Tank" hidden required>' +
                            '<label class="form-check-label label-pattern AdventureLinesTank" for="Adventure Lines Tank"></label>' +
                        '</div>' +
                    '</div>' +
                    '<div class="col-6 col-md-3">' +
                        '<div class="form-check p-0 item-selector">' +
                            '<input class="form-check-input" type="radio" name="itemList" id="Adventure Lace Tee" value="Adventure Lace Tee" hidden>' +
                            '<label class="form-check-label label-pattern AdventureLaceTee" for="Adventure Lace Tee"></label>' +
                        '</div>' +
                    '</div>' +
                    '<div class="col-6 col-md-3">' +
                        '<div class="form-check p-0 item-selector">' +
                            '<input class="form-check-input" type="radio" name="itemList" id="Palmhus Tee" value="Palmhus Tee" hidden>' +
                            '<label class="form-check-label label-pattern PalmhusTee" for="Palmhus Tee"></label>' +
                        '</div>' +
                    '</div>' +
                    '<div class="col-6 col-md-3">' +
                        '<div class="form-check p-0 item-selector">' +
                            '<input class="form-check-input" type="radio" name="itemList" id="Tangram Adventure Shawl" value="Tangram Adventure Shawl" hidden>' +
                            '<label class="form-check-label label-pattern TangramAdventureShawl" for="Tangram Adventure Shawl"></label>' +
                        '</div>' +
                    '</div>' +
                    '<div class="col-6 col-md-3">' +
                        '<div class="form-check p-0 item-selector">' +
                            '<input class="form-check-input" type="radio" name="itemList" id="Simple Adventure Socks SV" value="Simple Adventure Socks SV" hidden>' +
                            '<label class="form-check-label label-pattern SimpleAdventureSocksSV" for="Simple Adventure Socks SV"></label>' +
                        '</div>' +
                    '</div>' +
                    '<div class="col-6 col-md-3">' +
                        '<div class="form-check p-0 item-selector">' +
                            '<input class="form-check-input" type="radio" name="itemList" id="Simple Adventure Socks EN" value="Simple Adventure Socks EN" hidden>' +
                            '<label class="form-check-label label-pattern SimpleAdventureSocksEN" for="Simple Adventure Socks EN"></label>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<div class="p-0">&nbsp;</div>' +
            '<label for="destination" class="form-label">Send to</label>' +
            '<div class="container p-1">' +
                '<div class="row">' +
                    '<div class="col">' +
                        '<input type="radio" class="btn-check" name="deliveryMethod" id="email" value="email" autocomplete="off" required>' +
                        '<label class="w-100 btn btn-outline-light rounded-pill" for="email">Email</label>' +
                    '</div>' +
                    '<div class="col">' +
                        '<input type="radio" class="btn-check" name="deliveryMethod" id="ravelry" value="ravelry" autocomplete="off">' +
                        '<label class="w-100 btn btn-outline-light rounded-pill " for="ravelry">Ravelry</label>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<label id="hiddenRavelryLabel" for="ravelry" class="form-label" hidden>Ravelry username</label>' +
            '<div id="hiddenRavelryInput" class="input-group mb-3 rounded-pill bg-white" hidden>' +
                '<span class="input-group-icon" id="icon-ravelry"><i class="fa fa-lg fa-ravelry"></i></span>' +
                '<input type="text" class="form-control form-control-lg input-custom" aria-describedby="icon-ravelry" id="ravelryUser" name="ravelryUser">' +
            '</div>' +
            '<div class="p-1">&nbsp;</div>' +
            '<button type="submit" class="w-100 btn-lg btn btn-light rounded-pill">Get your free pattern</button>' +
            '<div class="form-text-light" align="center">We will never share your details with anyone else.</div>' +
            '<div class="form-text-light" align="center">More information can be found <a class="link-light" href="#" onclick="drawAbout();return false;">here</a>.</div>' +
        '</form>' +
    '<div>'
    createContent(html)
}

function drawFormOneSock() {
    var html = '<!-- GENERATED FORM -->' +
    '<div class="d-grid gap-2 px-2 mt-2">' +
        '<form id="partille_socks">' +
            '<label for="email" class="form-label">Email address or Ravelry user</label>' +
            '<div class="input-group mb-3 rounded-pill bg-white">' +
                '<span class="input-group-icon" id="icon-email"><i class="fa fa-lg fa-user"></i></span>' +
                '<input type="email" class="form-control form-control-lg input-custom" aria-describedby="icon-email" id="emailAddress" name="emailAddress" required>' +
            '</div>' +
            '<label for="pattern" class="form-label">Your free pattern</label>' +
            '<div class="container">' +
                '<div align="center" class="form-check p-0 item-selector">' +
                    '<input class="form-check-input" type="radio" name="itemList" id="Simple Adventure Socks EN" value="Simple Adventure Socks EN" hidden checked>' +
                    '<label class="form-check-label label-patternOneSock SimpleAdventureSocksENLG" for="Simple Adventure Socks EN"></label>' +
                '</div>' +
            '</div>' +
            '<div class="p-0">&nbsp;</div>' +
            '<div class="container p-1">' +
            '<input type="hidden" name="deliveryMethod" id="email" value="email" autocomplete="off" checked>' +
            '</div>' +
            '<div class="p-1">&nbsp;</div>' +
            '<button type="submit" class="w-100 btn-lg btn btn-light rounded-pill">Get your free pattern</button>' +
            '<div class="form-text-light" align="center">We will never share your details with anyone else.</div>' +
            '<div class="form-text-light" align="center">More information can be found <a class="link-light" href="#" onclick="drawAbout();return false;">here</a>.</div>' +
        '</form>' +
    '<div>'
    createContent(html)
}

// Function to handle radio button clicks
function toggleRavelry() {
    const emailRadio = document.getElementById("email")
    const ravelryRadio = document.getElementById("ravelry")
    const hiddenRavelryLabel = document.getElementById("hiddenRavelryLabel")
    const hiddenRavelryInput = document.getElementById("hiddenRavelryInput")
    const hiddenRavelryInputField = document.getElementById("ravelryUser")

    // Add event listeners to the radio buttons
    emailRadio.addEventListener("click", toggleRavelry);
    ravelryRadio.addEventListener("click", toggleRavelry);

    if (this === ravelryRadio) {
        // If "ravelry" is clicked, show the hidden input
        hiddenRavelryLabel.removeAttribute("hidden")
        hiddenRavelryInput.removeAttribute("hidden")
        hiddenRavelryInputField.setAttribute("required", "required");
    } else if (this === emailRadio && !hiddenRavelryLabel.hasAttribute("hidden")) {
        // If "email" is clicked and the hidden input is shown, hide it
        hiddenRavelryLabel.setAttribute("hidden", "true")
        hiddenRavelryInput.setAttribute("hidden", "true")
        hiddenRavelryInputField.removeAttribute("required")
    }
}

function loadScript() {
    document.getElementById("freepattern202308").addEventListener("submit", async function(event) {
        event.preventDefault() // Prevent the form from submitting traditionally

        let collectionName = "freepattern202308"
        const pb = new PocketBase('https://givedata.bamilla.com')

        const itemListRadioButtons = document.getElementsByName("itemList")
        let selectedItemValue = ""
        const itemDeliveryRadioButtons = document.getElementsByName("deliveryMethod")
        let selectedDeliveryValue = ""

        // Iterate through the radio buttons to find the selected one
        for (let i = 0; i < itemListRadioButtons.length; i++) {
            if (itemListRadioButtons[i].checked) {
                selectedItemValue = itemListRadioButtons[i].value
                break; // Exit the loop once a checked radio button is found
            }
        }

        // Iterate through the radio buttons to find the selected one
        for (let i = 0; i < itemDeliveryRadioButtons.length; i++) {
            if (itemDeliveryRadioButtons[i].checked) {
                selectedDeliveryValue = itemDeliveryRadioButtons[i].value
                break; // Exit the loop once a checked radio button is found
            }
        }

        // Create a JavaScript object with the form data
        const formData = {
            token: document.getElementById("token").value,
            email: document.getElementById("emailAddress").value,
            ravelry: document.getElementById("ravelryUser").value,
            pattern: selectedItemValue,
            delivery: selectedDeliveryValue
        }

        try {
            const response = await pb.collection('freepattern202308').create(formData)
            if (response && response.collectionId) {
                // Successful submission
                // You can optionally reset the form here if needed
                document.getElementById("freepattern202308").reset()
                drawThanks()
            } else {
                // Handle non-200 responses with error messages
                if (response && response.code && response.message) {
                    // Display the specific error message from the response
                    alert(`Error ${response.code}: ${response.message}`)
                } else {
                    // Generic error message for unknown response format
                    alert("An error occurred. Please try again later. (2)")
                }
            }
        } catch (error) {
            // Handle network or other errors
            if (error.data.code === 400) {
                alert(`Error ${error.data.code}: Looks like your code, email or ravelry has already been used. ${error.data.message}`)
            } else if (error.data.code === 403 || error.data.code === 404) {
                // Handle specific error codes (400, 403, 404)
                alert(`Error ${error.data.code}: ${error.data.message}`)
            } else {
                // Handle all other errors
                alert("An error occurred. Please try again later. (fatal)")
            }
        }
    })
}

function loadScriptPartilleSocks() {
    document.getElementById("partille_socks").addEventListener("submit", async function(event) {
        event.preventDefault() // Prevent the form from submitting traditionally

        let collectionName = "partille_socks"
        const pb = new PocketBase('https://givedata.bamilla.com')

        const itemListRadioButtons = document.getElementsByName("itemList")
        let selectedItemValue = ""
        const itemDeliveryRadioButtons = document.getElementsByName("deliveryMethod")
        let selectedDeliveryValue = ""

        // Iterate through the radio buttons to find the selected one
        for (let i = 0; i < itemListRadioButtons.length; i++) {
            if (itemListRadioButtons[i].checked) {
                selectedItemValue = itemListRadioButtons[i].value
                break; // Exit the loop once a checked radio button is found
            }
        }

        // Iterate through the radio buttons to find the selected one
        for (let i = 0; i < itemDeliveryRadioButtons.length; i++) {
            if (itemDeliveryRadioButtons[i].checked) {
                selectedDeliveryValue = itemDeliveryRadioButtons[i].value
                break; // Exit the loop once a checked radio button is found
            }
        }

        // Create a JavaScript object with the form data
        const formData = {
            contact: document.getElementById("emailAddress").value,
            pattern: selectedItemValue,
            delivery: "email"
        }

        try {
            const response = await pb.collection(collectionName).create(formData)
            if (response && response.collectionId) {
                // Successful submission
                // You can optionally reset the form here if needed
                document.getElementById(collectionName).reset()
                drawThanks()
            } else {
                // Handle non-200 responses with error messages
                if (response && response.code && response.message) {
                    // Display the specific error message from the response
                    alert(`Error ${response.code}: ${response.message}`)
                } else {
                    // Generic error message for unknown response format
                    alert("An error occurred. Please try again later. (2)")
                }
            }
        } catch (error) {
            // Handle network or other errors
            if (error.data.code === 400) {
                alert(`Error ${error.data.code}: Looks like your code, email or ravelry has already been used. ${error.data.message}`)
            } else if (error.data.code === 403 || error.data.code === 404) {
                // Handle specific error codes (400, 403, 404)
                alert(`Error ${error.data.code}: ${error.data.message}`)
            } else {
                // Handle all other errors
                alert("An error occurred. Please try again later. (fatal)")
            }
        }
    })
}

function loadToken() {
    // Get the URL parameters
    const urlParams = new URLSearchParams(window.location.search)

    // Retrieve the value of the "code" parameter
    const code = urlParams.get('code');

    // Set the token in form
    document.getElementById("token").value = code
}

function main() {
    createMenu()
    document.addEventListener('DOMContentLoaded', function() {
        const currentPath = window.location.pathname;
        // Execute functions depending on the current URL path
        switch (currentPath) {
            case '/festival/':
                drawForm()
                loadScript()
                loadToken()
                toggleRavelry()
                break;
            case '/partille-socks/':
                drawFormOneSock()
                loadScriptPartilleSocks()
                break;
            default:
                console.log("default")
                break;
        }
    });
}

main()

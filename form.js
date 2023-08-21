function createMenu() {
    var div = document.createElement("div")
    var navbar = '<!-- GENERATED MENU -->' +
    '<nav class="navbar navbar-expand-lg navbar-light bg-light">' +
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

function drawThanks() {
    var html = '<!-- GENERATED THANKS -->' +
        '<div class="d-grid gap-2 px-2 mt-2" align="center">' +
            '<h2>Thank You!</h2>' +
            '<div>Your free pattern is getting ready! :)</div>' +
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
            '<label for="ravelry" class="form-label">Ravelry username</label>' +
            '<div class="input-group mb-3 rounded-pill bg-white">' +
                '<span class="input-group-icon" id="icon-ravelry"><i class="fa fa-lg fa-ravelry"></i></span>' +
                '<input type="text" class="form-control form-control-lg input-custom" aria-describedby="icon-ravelry" id="ravelryUser" ename="ravelryUser">' +
            '</div>' +
            '<label for="pattern" class="form-label">Select pattern</label>' +
            '<div class="container">' +
                '<div class="row">' +
                    '<div class="col-6 col-md-3">' +
                        '<div class="form-check p-0 item-selector">' +
                            '<input class="form-check-input" type="radio" name="itemList" id="Adventure Lines Tank" value="Adventure Lines Tank" hidden required>' +
                            '<label class="form-check-label label-pattern AdventureLinesTank" for="Adventure Lines Tank"></label>' +
                            // '<label class="form-check-label" for="Adventure Lines Tank">Adventure Lines Tank</label>' +
                        '</div>' +
                    '</div>' +
                    '<div class="col-6 col-md-3">' +
                        '<div class="form-check p-0 item-selector">' +
                            '<input class="form-check-input" type="radio" name="itemList" id="Adventure Lace Tee" value="Adventure Lace Tee" hidden>' +
                            '<label class="form-check-label label-pattern AdventureLaceTee" for="Adventure Lace Tee"></label>' +
                            // '<label class="form-check-label label-pattern" for="Adventure Lace Tee">Adventure Lace Tee</label>' +
                        '</div>' +
                    '</div>' +
                    '<div class="col-6 col-md-3">' +
                        '<div class="form-check p-0 item-selector">' +
                            '<input class="form-check-input" type="radio" name="itemList" id="Palmhus Tee" value="Palmhus Tee" hidden>' +
                            '<label class="form-check-label label-pattern PalmhusTee" for="Palmhus Tee"></label>' +
                            // '<label class="form-check-label label-pattern" for="Palmhus Tee">Palmhus Tee</label>' +
                        '</div>' +
                    '</div>' +
                    '<div class="col-6 col-md-3">' +
                        '<div class="form-check p-0 item-selector">' +
                            '<input class="form-check-input" type="radio" name="itemList" id="Tangram Adventure Shawl" value="Tangram Adventure Shawl" hidden>' +
                            '<label class="form-check-label label-pattern TangramAdventureShawl" for="Tangram Adventure Shawl"></label>' +
                            // '<label class="form-check-label label-pattern" for="Tangram Adventure Shawl">Tangram Adventure Shawl</label>' +
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
            '<div class="p-1">&nbsp;</div>' +
            '<button type="submit" class="w-100 btn-lg btn btn-light rounded-pill">Get your free pattern</button>' +
            '<div id="disclaimer" class="form-text-light" align="center">We will never share your details with anyone else.</div>' +
        '</form>' +
    '<div>'
    createContent(html)
}

function loadScript() {
    document.getElementById("freepattern202308").addEventListener("submit", async function(event) {
        event.preventDefault() // Prevent the form from submitting traditionally

        let collectionName = "freepattern202308"
        const pb = new PocketBase('http://node3.felip.se:8090')

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
            // token: "0000001",
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
                // alert("Your free pattern is getting ready!")
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
            if (error.data.code === 400 || error.data.code === 403 || error.data.code === 404) {
                // Handle specific error codes (400, 403, 404)
                alert(`Error ${error.data.code}: ${error.data.message}`);
            } else {
                // Handle all other errors
                alert("An error occurred. Please try again later. (fatal)")
            }
        }
    });
}

function loadToken() {
    document.addEventListener("DOMContentLoaded", function() {
        // Get the URL parameters
        const urlParams = new URLSearchParams(window.location.search);
    
        // Loop through all parameters in the URL
        urlParams.forEach(function(value, key) {
            // Check if the parameter key matches your criteria (e.g., it's the random code)
            if (key === "code") {
                // Set the value of the hidden input
                document.getElementById("token").value = value;
            }
        });
    });
}

function main() {
    createMenu()
    drawForm()
    loadScript()
    loadToken()
}

main()

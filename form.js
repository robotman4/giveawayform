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

function historyListener(event) {
    drawHome()
}

function drawHome() {
    var html = '<!-- GENERATED HTML -->' +
    '<div class="d-grid gap-2 px-2 mt-2">' +
        '<form id="freepattern202308">' +
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
                            '<input class="form-check-input" type="radio" name="itemList" id="AdventureLinesTank" value="AdventureLinesTank" hidden required>' +
                            '<label class="form-check-label label-pattern AdventureLinesTank" for="AdventureLinesTank"></label>' +
                            // '<label class="form-check-label" for="AdventureLinesTank">Adventure Lines Tank</label>' +
                        '</div>' +
                    '</div>' +
                    '<div class="col-6 col-md-3">' +
                        '<div class="form-check p-0 item-selector">' +
                            '<input class="form-check-input" type="radio" name="itemList" id="AdventureLaceTee" value="AdventureLaceTee" hidden>' +
                            '<label class="form-check-label label-pattern AdventureLaceTee" for="AdventureLaceTee"></label>' +
                            // '<label class="form-check-label label-pattern" for="AdventureLaceTee">Adventure Lace Tee</label>' +
                        '</div>' +
                    '</div>' +
                    '<div class="col-6 col-md-3">' +
                        '<div class="form-check p-0 item-selector">' +
                            '<input class="form-check-input" type="radio" name="itemList" id="PalmhusTee" value="PalmhusTee" hidden>' +
                            '<label class="form-check-label label-pattern PalmhusTee" for="PalmhusTee"></label>' +
                            // '<label class="form-check-label label-pattern" for="PalmhusTee">Palmhus Tee</label>' +
                        '</div>' +
                    '</div>' +
                    '<div class="col-6 col-md-3">' +
                        '<div class="form-check p-0 item-selector">' +
                            '<input class="form-check-input" type="radio" name="itemList" id="TangramAdventureShawl" value="TangramAdventureShawl" hidden>' +
                            '<label class="form-check-label label-pattern TangramAdventureShawl" for="TangramAdventureShawl"></label>' +
                            // '<label class="form-check-label label-pattern" for="TangramAdventureShawl">Tangram Adventure Shawl</label>' +
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
        event.preventDefault(); // Prevent the form from submitting traditionally

        let collectionName = "freepattern202308";
        const pb = new PocketBase('http://node3.felip.se:8090');

        const itemListRadioButtons = document.getElementsByName("itemList");
        let selectedItemValue = "";
        const itemDeliveryRadioButtons = document.getElementsByName("deliveryMethod");
        let selectedDeliveryValue = "";

        // Iterate through the radio buttons to find the selected one
        for (let i = 0; i < itemListRadioButtons.length; i++) {
            if (itemListRadioButtons[i].checked) {
                selectedItemValue = itemListRadioButtons[i].value;
                break; // Exit the loop once a checked radio button is found
            }
        }

        // Iterate through the radio buttons to find the selected one
        for (let i = 0; i < itemDeliveryRadioButtons.length; i++) {
            if (itemDeliveryRadioButtons[i].checked) {
                selectedDeliveryValue = itemDeliveryRadioButtons[i].value;
                break; // Exit the loop once a checked radio button is found
            }
        }

        // Create a JavaScript object with the form data
        const formData = {
            token: "0000001",
            email: document.getElementById("emailAddress").value,
            ravelry: document.getElementById("ravelryUser").value,
            pattern: selectedItemValue,
            delivery: selectedDeliveryValue
        };

        console.log(formData)

        const record = await pb.collection('freepattern202308').create(formData);

    //     // Make an HTTP POST request to the Pocketbase API endpoint
    //     fetch('YOUR_POCKETBASE_API_ENDPOINT', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(formData),
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         // Handle the response from Pocketbase (e.g., display a success message)
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         // Handle any errors that occur during the request
    //         console.error('Error:', error);
    //     });
    });
}

function main() {
    createMenu()
    drawHome()
    loadScript()
}

main()

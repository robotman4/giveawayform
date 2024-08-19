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

function generateRandomString(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let randomString = ''

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length)
        randomString += charset.charAt(randomIndex)
    }

    return randomString
}

function drawForm() {
    var html = '<!-- GENERATED FORM -->' +
    '<div class="d-grid gap-2 px-2 mt-2">' +
        '<form id="freepattern202308_codes">' +
            '<label for="code" class="form-label">Code</label>' +
            '<div class="input-group mb-3 rounded-pill bg-white">' +
                '<span class="input-group-icon" id="icon-email"><i class="fa fa-lg fa-code"></i></span>' +
                '<input type="text" class="form-control form-control-lg input-custom" aria-describedby="icon-email" id="code" name="code">' +
            '</div>' +
            '<label for="created" class="form-label">Created</label>' +
            '<div class="input-group mb-3 rounded-pill bg-white">' +
                '<span class="input-group-icon" id="icon-star"><i class="fa fa-lg fa-star"></i></span>' +
                '<input type="text" class="form-control form-control-lg input-custom" aria-describedby="icon-star" id="created" name="created" disabled>' +
            '</div>' +
            '<div align="center">' +
                '<div id="qrcode"></div>' +
            '</div>' +
            '<div class="p-1">&nbsp;</div>' +
            '<button type="submit" class="w-100 btn-lg btn btn-light rounded-pill">Generate New</button>' +
        '</form>' +
    '<div>'
    createContent(html)
}

function generateQRCode(link) {
    // Select the HTML element where you want to display the QR code
    var qrCodeContainer = document.getElementById("qrcode")

    // Empty the content before adding new
    qrCodeContainer.innerHTML = ""

    // Create a new QRCode instance with the link
    var qrcode = new QRCode(qrCodeContainer, {
        text: link,
        width: 256,
        height: 256,
    })
}

function loadScript() {
    document.getElementById("freepattern202308_codes").addEventListener("submit", async function(event) {
        event.preventDefault() // Prevent the form from submitting traditionally

        let collectionName = "freepattern202308_codes"
        const pb = new PocketBase('https://givedata.bamilla.com')

        // Create a JavaScript object with the form data
        const formData = {
            token: generateRandomString(64)
        }

        try {
            const response = await pb.collection('freepattern202308_codes').create(formData)
            if (response && response.collectionId) {
                // Create a Date object from the UTC string
                const utcDate = new Date(response.created)
                // Get the local time offset in minutes
                const offsetMinutes = utcDate.getTimezoneOffset()
                // Adjust the date to the local time zone
                utcDate.setMinutes(utcDate.getMinutes() - offsetMinutes)
                // Convert the adjusted date back to an ISO string with 'Z' to indicate UTC
                const localTimeString = utcDate.toISOString().replace("T", " ").replace("Z", " ")
                document.getElementById("created").value = localTimeString
                document.getElementById("code").value = response.token
                generateQRCode(`https://giveaway.bamilla.com/festival/?code=${response.token}`)
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
                alert(`Error ${error.data.code}: Looks like an old code.`)
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

function main() {
    drawForm()
    loadScript()
}

main()

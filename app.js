fetch("https://ipgeolocation.abstractapi.com/v1/?api_key=988347346abd482f8b13e2467d03d81b")
.then((reponse) => {
    return reponse.json();
})
.then ((data) => {
    console.log(data);

    let address = data.ip_address;
    let addressResult = document.querySelector("#address-result");
    addressResult.innerHTML = `${address}`;

    location = data.location;
    let locationResult = document.querySelector("#location-result");
    locationResult.innerHTML = `${location}`;

    let timezone = data.timezone.edt;
    let timezoneResult = document.querySelector("#timezone-result");
    timezoneResult.innerHTML = `${timezone}`;

    let isp = data.connection.isp_name;
    let ispResult = document.querySelector("#isp-result");
    ispResult.innerHTML = `${isp}`
})


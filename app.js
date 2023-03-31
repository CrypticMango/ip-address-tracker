fetch("https://ipgeolocation.abstractapi.com/v1/?api_key=988347346abd482f8b13e2467d03d81b")
.then((reponse) => {
    return reponse.json();
})
.then ((data) => {
    console.log(data);

    let address = data.ip_address;
    let addressResult = document.querySelector("#address-result");
    addressResult.innerHTML = `${address}`;

    let location = data.city;
    let region = data.region_iso_code;
    let postalCode = data.postal_code;
    let locationResult = document.querySelector("#location-result");
    locationResult.innerHTML = `${location + ", " + region + " "+ postalCode}`;

    let timezone = data.timezone.abbreviation;
    let offset = data.timezone.gmt_offset;
    let timezoneResult = document.querySelector("#timezone-result");
    timezoneResult.innerHTML = `${timezone + offset + ":00"}`;

    let isp = data.connection.isp_name;
    let ispResult = document.querySelector("#isp-result");
    ispResult.innerHTML = `${isp}`;
})


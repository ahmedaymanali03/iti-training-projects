const xhr = new XMLHttpRequest();

xhr.open('GET', 'rockbands.json', true);

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const rockBands = JSON.parse(xhr.responseText);

        const bandsDropdown = document.getElementById("bands");
        const artistsDropdown = document.getElementById("artists");

        for (const band in rockBands) {
            const option = document.createElement("option");
            option.value = band;
            option.textContent = band.charAt(0).toUpperCase() + band.slice(1);
            bandsDropdown.appendChild(option);
        }

        bandsDropdown.addEventListener("change", function() {
            const selectedBand = this.value;
            artistsDropdown.innerHTML = '<option value="">--Select an Artist--</option>';

            if (selectedBand) {
                rockBands[selectedBand].forEach(artist => {
                    const option = document.createElement("option");
                    option.value = artist.value;
                    option.textContent = artist.name;
                    artistsDropdown.appendChild(option);
                });
            }
        });

        artistsDropdown.addEventListener("change", function() {
            const artistLink = this.value;
            if (artistLink) {
                window.open(artistLink, '_blank');
            }
        });
    }
};

xhr.send();

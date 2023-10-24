document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generateButton");
    const output = document.getElementById("output");

    generateButton.addEventListener("click", function () {
        // Clear the output area
        output.innerHTML = "";

        // Generate fake data and display it
        for (let i = 0; i < 10; i++) { // Generates 5 records for demonstration
            const fakeData = {
                title: faker.name.prefix(),
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                birthdate: faker.date.past().toDateString(),
                ID: faker.random.uuid(),
                gender: faker.random.arrayElement(["Male", "Female"]),
                mobileNo: faker.phone.phoneNumber(),
                email: faker.internet.email(),
            };

            // Create a new div for each data record
            const dataDiv = document.createElement("div");
            dataDiv.classList.add("data-record");

            // Populate the div with the data
            for (const key in fakeData) {
                const dataItem = document.createElement("p");
                dataItem.innerHTML = `<strong>${key}:</strong> ${fakeData[key]}`;
                dataDiv.appendChild(dataItem);
            }

            output.appendChild(dataDiv);
        }
    });
});

// Show the personality based on blood type
function showBloodTypeInfo() {
    const bloodType = document.getElementById("bloodType").value;
    const outputDiv = document.getElementById("bloodInfo");

    if (bloodType === "") {
        outputDiv.style.display = "none"; // Hide if no option is selected
    } else {
        let info = "";
        let className = "";

        switch (bloodType) {
            case "O+":
                info = "O+ is known for being outgoing, social, and energetic. O+ individuals are natural leaders.";
                className = "Oplus";
                break;
            case "O-":
                info = "O- is considered a universal donor. People with this blood type are often empathetic and resilient.";
                className = "Ominus";
                break;
            case "A+":
                info = "A+ people are reliable, calm, and perfectionists. They enjoy planning and being organized.";
                className = "Aplus";
                break;
            case "A-":
                info = "A- individuals are known to be highly intelligent, thoughtful, and reserved.";
                className = "Aminus";
                break;
            case "B+":
                info = "B+ people are creative, passionate, and flexible. They love adventure and new experiences.";
                className = "Bplus";
                break;
            case "B-":
                info = "B- individuals are independent and have a strong sense of responsibility. They are curious and always eager to learn.";
                className = "Bminus";
                break;
            case "AB+":
                info = "AB+ is a rare blood type. AB+ people are known to be balanced, friendly, and highly social.";
                className = "ABplus";
                break;
            case "AB-":
                info = "AB- individuals are unique and possess a mix of traits from both A and B blood types. They are highly adaptable.";
                className = "ABminus";
                break;
            default:
                info = "Please select a valid blood type.";
        }

        outputDiv.style.display = "block"; // Show the info div
        outputDiv.innerHTML = `<strong>Your Blood Type Personality:</strong> <p>${info}</p>`;
        outputDiv.className = "output " + className; // Add color class for the selected blood type
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        // Printable HTML/ PDF File
        let printableHTML = `
            <html>
            <head>
                <title>Printable School ID Form</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        padding: 20px;
                        line-height: 1.6;
                    }
                    h2 {
                        text-align: center;
                        margin-bottom: 20px;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                    }
                    td {
                        padding: 10px;
                        border: 1px solid #ccc;
                        vertical-align: top;
                    }
                    td.label {
                        font-weight: bold;
                        width: 30%;
                    }
                </style>
            </head>
            <body>
                <h2>School ID Registration</h2>
                <table>
        `;

        const fieldLabels = {
            lastname: "Last Name",
            firstname: "First Name",
            gender: "Gender",
            course: "Course",
            yearlevel: "Year Level",
            email: "Email",
            birthdate: "Birthdate",
            address: "Address",
            guardian: "Guardian Name",
            contact: "Contact Number"
        };

        for (const [key, value] of formData.entries()) {
            if (key === "picture") continue;
            const label = fieldLabels[key] || key;
            printableHTML += `
                <tr>
                    <td class="label">${label}</td>
                    <td>${value}</td>
                </tr>
            `;
        }

        printableHTML += `
                </table>
                <p style="margin-top: 30px; font-style: italic;">*This is a system-generated form for School ID Registration.</p>
            </body>
            </html>
        `;

        const win = window.open('', '_blank');
        win.document.write(printableHTML);
        win.document.close();
        win.focus();
        win.print();
    });
});
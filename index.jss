function addContact() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;

    var table = document.getElementById("contactTable");
    var row = table.insertRow(table.rows.length);
    var nameCell = row.insertCell(0);
    var phoneCell = row.insertCell(1);

    nameCell.innerHTML = name;
    phoneCell.innerHTML = phone;

     document.getElementById("contactForm").reset();
     }

     document.getElementById("contactForm").addEventListener('submit', function(e) {
    e.preventDefault();
    addContact();
});
const form = document.getElementById("myForm"); 
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const age = ageInput.value.trim();

    if (!name || !age) {
        alert('Please enter valid details.');
        return; 
    }
    function verifyData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const ageNum = parseInt(age);

                if (ageNum > 18) {
                    resolve(`Welcome, ${name}. You can vote.`);
                } else {
                    reject(`Oh sorry ${name}. You aren't old enough.`);
                }
            }, 4000); 
        });
    }
    verifyData()
        .then((message) => alert(message))
        .catch((message) => alert(message));
});
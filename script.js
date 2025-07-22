const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        let response = await fetch("https://74ev5kzqj45dve3cdyzqjhtgym0nvhbf.lambda-url.ap-south-1.on.aws/");
        let data = await response.json();
        counter.innerHTML = `Views: ${data.views}`;
    } catch (err) {
        console.error("Error fetching views:", err);
        counter.innerHTML = "Views: Error";
    }
}

updateCounter();

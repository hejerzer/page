const webhookURL = "https://discord.com/api/webhooks/1438988749999702086/t8-D5EEkI-ioy28Itu0BcYAEbGE7WJRyhN1pt1W2zmR3-IN6OkiByiJQBLqF5_D-4ssp";

async function sendWebhook(message) {
  try {
    const response = await fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content: message
      })
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    console.log("Message sent successfully!");
  } catch (err) {
    console.error("Error sending webhook:", err);
  }
}

document.getElementById("questionnaire").addEventListener("submit", async function(e) {
    e.preventDefault();

    const form = new FormData(this);
    const name = form.get("name");
    const q1 = form.get("1");
    const q2 = form.get("2");
    const q3 = form.get("3");
    const q4 = form.get("4");
    const q5 = form.get("5");
    const q6 = form.get("6");
    const q7 = form.get("7");
    const q8 = form.get("8");

    const message = `
**New Questionnaire Submission**
**Name:** ${name}
**1:** ${q1}
**2:** ${q2}
**3:** ${q3}
**4:** ${q4}
**5:** ${q5}
**6:** ${q6}
**7:** ${q7}
**8:** ${q8}
`;

    await sendWebhook(message);

    const result = document.getElementById("result");
    result.textContent = "Thank you, " + name + "! Your response has been recorded.";
    result.style.marginTop = "20px";
    result.style.textAlign = "center";
    result.style.fontSize = "18px";
    result.style.color = "#222";
    result.style.opacity = "0";
    
    setTimeout(() => {
        result.style.transition = "0.3s";
        result.style.opacity = "1";
    }, 50);

    this.reset();
});

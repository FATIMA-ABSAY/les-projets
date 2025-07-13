function convertTime() {
      const fromZone = document.getElementById("from").value;
      const toZone = document.getElementById("to").value;
      const timeInput = document.getElementById("timeInput").value;

      if (!timeInput) {
        document.getElementById("result").innerText = "⛔ Veuillez entrer une heure.";
        return;
      }

      const [hours, minutes] = timeInput.split(":").map(Number);

      const now = new Date();
      now.setHours(hours, minutes, 0, 0);

      const utcDate = new Date(
        now.toLocaleString("en-US", { timeZone: fromZone })
      );

      const targetTime = new Date(
        utcDate.toLocaleString("en-US", { timeZone: toZone })
      );

      const options = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: toZone
      };

      const converted = targetTime.toLocaleTimeString("fr-FR", options);

      document.getElementById("result").innerHTML =
        `<strong>${timeInput}</strong> au <strong>${fromZone}</strong><br>
        correspond à : <strong>${converted}</strong> au <strong>${toZone}</strong>`;
    }
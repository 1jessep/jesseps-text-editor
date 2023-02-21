const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  console.log(event);
  event.preventDefault();

  window.defferedPrompt = event;

  butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
//This section allows the user to install the application.
butInstall.addEventListener("click", async () => {
  console.log("Click");
  const promptEvent = window.defferedPrompt;

  if (!promptEvent) {
    return;
  }

  promptEvent.prompt();

  window.defferedPrompt = null;

  butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("App Installed");

  window.defferedPrompt = null;
});

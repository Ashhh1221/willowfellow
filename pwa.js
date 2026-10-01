'use strict';
window.pocketPwaStatus = 'Offline setup requires HTTPS hosting.';
function showPwaStatus(message) {
  window.pocketPwaStatus = message;
  const el = document.querySelector('#pwa-status');
  if (el) el.textContent = message;
}
if ('serviceWorker' in navigator && window.isSecureContext && location.protocol !== 'file:') {
  showPwaStatus('Preparing offline access…');
  navigator.serviceWorker.register('./service-worker.js', { scope: './', updateViaCache: 'none' })
    .then(async registration => {
      await navigator.serviceWorker.ready;
      showPwaStatus('Ready for offline use on this device.');
      const checkUpdate = () => {
        if (registration.waiting) showPwaStatus('Update ready. Close all Pocket windows and reopen to update.');
      };
      checkUpdate();
      registration.addEventListener('updatefound', () => {
        const worker = registration.installing;
        if (worker) worker.addEventListener('statechange', () => {
          checkUpdate();
          if (worker.state === 'redundant' && !navigator.serviceWorker.controller) showPwaStatus('Offline setup failed. Reopen Pocket online to retry.');
        });
      });
    })
    .catch(() => showPwaStatus('Offline setup failed. Reopen Pocket online to retry.'));
}

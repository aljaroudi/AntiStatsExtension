
function hide_stats() {
  /*
  info-text: views and date
  menu-container: like and dislike
  sponsor-button: join button
  button: YouTube apps
  voice-search-button: voice search
  owner-sub-count: subscriber count
  */

  const stats = ['info-text', 'menu-container', 'sponsor-button', 'button', 'voice-search-button', 'owner-sub-count'].map(id => document.getElementById(id))

  const dialogs = document.querySelectorAll('[role="dialog"]')

  const elements = [...stats, ...dialogs]

  elements.map(element => element.remove())
}

// Trigger when the page fully loads
window.onload = hide_stats
window.addEventListener('load', hide_stats)
window.addEventListener('DOMContentLoaded', hide_stats)
// In case the browser doesn't support the event listener, trigger the function manually
setTimeout(hide_stats, 250)
setTimeout(hide_stats, 500)
setTimeout(hide_stats, 1000)
setTimeout(hide_stats, 1500)
setTimeout(hide_stats, 2000)
setTimeout(hide_stats, 2500)
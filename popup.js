document.addEventListener("DOMContentLoaded", function () {

  var saveButton = document.getElementById("btn_save");
  var intervalInput = document.getElementById("interval");
  var tags_field = document.getElementById("tags_field");
  var brand_field = document.getElementById("brand_field");
  var requester_field = document.getElementById("requester_field");
  var collaborators_field = document.getElementById("collaborators_field");
  var ticket_form_field = document.getElementById("ticket_form_field");
  var sharing_field = document.getElementById("sharing_field");
  var habilities_field = document.getElementById("habilities_field");

  chrome.storage.sync.get(["interval"], (result) => (intervalInput.value = result.interval / 1000));
  chrome.storage.sync.get(["tags_field"], (result) => (tags_field.checked = result.tags_field || false));
  chrome.storage.sync.get(["brand_field"], (result) => (brand_field.checked = result.brand_field || false));
  chrome.storage.sync.get(["requester_field"], (result) => (requester_field.checked = result.requester_field || false));
  chrome.storage.sync.get(["collaborators_field"], (result) => (collaborators_field.checked = result.collaborators_field || false));
  chrome.storage.sync.get(["ticket_form_field"], (result) => (ticket_form_field.checked = result.ticket_form_field || false));
  chrome.storage.sync.get(["sharing_field"], (result) => (sharing_field.checked = result.sharing_field || false));
  chrome.storage.sync.get(["habilities_field"], (result) => (habilities_field.checked = result.habilities_field || false));

  saveButton.addEventListener("click", function () {
    var interval = parseInt(intervalInput.value, 10);
    interval >= 1 && interval <= 60 ? chrome.storage.sync.set({ interval: interval * 1000 }) : alert("Somente valores entre 1 e 60");

    chrome.storage.sync.set({
      tags_field: tags_field.checked,
      brand_field: brand_field.checked,
      requester_field: requester_field.checked,
      collaborators_field: collaborators_field.checked,
      ticket_form_field: ticket_form_field.checked,
      sharing_field: sharing_field.checked,
      habilities_field: habilities_field.checked,
    });

    window.close();
  });
});

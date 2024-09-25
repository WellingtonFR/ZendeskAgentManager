function auto_refresh() { document.querySelector('[data-test-id="views_views-list_header-refresh"]')?.click(); }

function change_fields_view() {
  let collaborators_field = document.querySelector('[data-test-id="ticket-fields-followers"]');
  collaborators_field ? chrome.storage.sync.get(["collaborators_field"], (result) => collaborators_field.setAttribute("style", "display: " + (result.collaborators_field ? "none" : "block") + ";")) : null;

  let requester_field = document.querySelector(".requester_id");
  requester_field ? chrome.storage.sync.get(["requester_field"], (result) => requester_field.setAttribute("style", "display: " + (result.requester_field ? "none" : "block") + ";")) : null;

  let brand_field = document.querySelector(".brand_id");
  brand_field ? chrome.storage.sync.get(["brand_field"], (result) => brand_field.setAttribute("style", "display: " + (result.brand_field ? "none" : "block") + ";")) : null;

  let tags_field = document.querySelector('[data-test-id="ticket-fields-tags"]');
  tags_field ? chrome.storage.sync.get(["tags_field"], (result) => tags_field.setAttribute("style", "display: " + (result.tags_field ? "none" : "block") + ";")) : null;

  let sharing_field = document.querySelector(".ticket_sharing");
  sharing_field ? chrome.storage.sync.get(["sharing_field"], (result) => sharing_field.setAttribute("style", "display: " + (result.sharing_field ? "none" : "block") + ";")) : null;

  let ticket_form_field = document.querySelector('[data-test-id="ticket-fields-ticket-forms"]');
  ticket_form_field ? chrome.storage.sync.get(["ticket_form_field"], (result) => ticket_form_field.setAttribute("style", "display: " + (result.ticket_form_field ? "none" : "block") + ";")) : null;

  let habilities_field = document.querySelector('[data-test-id="TicketSkillMultiSelect"]');
  habilities_field ? chrome.storage.sync.get(["habilities_field"], (result) => habilities_field.setAttribute("style", "display: " + (result.habilities_field ? "none" : "block") + ";")) : null;

  let border_property_box = document.querySelectorAll(".property_box");
  border_property_box.forEach((box) => box.setAttribute("style", "border: none;"));
}

chrome.storage.sync.get(["interval"], (result) => setInterval(auto_refresh, result.interval));
setInterval(change_fields_view, 5000);

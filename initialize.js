chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get(["initialized"], (result) => {
      if (!result.initialized) {
        chrome.storage.sync.set(
          {
            tags_field: false,
            brand_field: false,
            requester_field: false,
            collaborators_field: false,
            ticket_form_field: false,
            sharing_field: false,
            habilities_field: false,
            interval: 5000,
          },
          () => {
            chrome.storage.sync.set({ initialized: true });
          }
        );
      }
    });
  });
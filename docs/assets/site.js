(() => {
  const qrCards = document.querySelectorAll("[data-page-qr]");

  qrCards.forEach((card) => {
    const fallbackUrl = card.dataset.pageUrl || "";
    const currentUrl =
      window.location.protocol === "http:" || window.location.protocol === "https:"
        ? `${window.location.origin}${window.location.pathname}`
        : fallbackUrl;
    const pageUrl = currentUrl || fallbackUrl;

    if (!pageUrl) return;

    const qrUrl =
      "https://api.qrserver.com/v1/create-qr-code/?size=160x160&format=svg&data=" +
      encodeURIComponent(pageUrl);
    const link = card.querySelector("[data-page-qr-link]");
    const image = card.querySelector("[data-page-qr-image]");

    if (link) {
      link.href = pageUrl;
      link.setAttribute("aria-label", `Open ${document.title}`);
    }

    if (image) {
      image.src = qrUrl;
      image.alt = `QR code for ${document.title}`;
    }
  });
})();

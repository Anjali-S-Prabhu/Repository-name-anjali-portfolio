export function openCertificates(detail = {}) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-certificates', { detail }));
  }
}

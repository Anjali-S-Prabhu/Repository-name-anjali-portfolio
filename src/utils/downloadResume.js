// Robust resume downloader and viewer utility

export async function downloadResume(e) {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }

  const resumeUrl = '/Anjali_S_Prabhu_Resume.pdf';
  const filename = 'Anjali_S_Prabhu_Resume.pdf';

  try {
    const response = await fetch(resumeUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.status} ${response.statusText}`);
    }

    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const tempLink = document.createElement('a');
    tempLink.href = blobUrl;
    tempLink.download = filename;
    tempLink.style.display = 'none';
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);

    // Revoke after download is initiated
    setTimeout(() => {
      window.URL.revokeObjectURL(blobUrl);
    }, 3000);
  } catch (err) {
    console.warn('Direct blob download failed, falling back to direct link download:', err);
    const fallbackLink = document.createElement('a');
    fallbackLink.href = resumeUrl;
    fallbackLink.download = filename;
    fallbackLink.target = '_blank';
    fallbackLink.rel = 'noopener noreferrer';
    fallbackLink.style.display = 'none';
    document.body.appendChild(fallbackLink);
    fallbackLink.click();
    document.body.removeChild(fallbackLink);
  }
}

export function viewResume(e) {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }
  window.open('/Anjali_S_Prabhu_Resume.pdf', '_blank', 'noopener,noreferrer');
}

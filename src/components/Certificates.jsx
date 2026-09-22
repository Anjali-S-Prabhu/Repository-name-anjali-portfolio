import React, { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { AwardIcon, FileIcon, CloseIcon } from './Icons';
import { CERTIFICATES } from '../data';
import { openCertificates } from '../utils/certificates';

export { openCertificates };

export function CertificatesButton({ className, variant = 'desktop', onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    } else {
      openCertificates();
    }
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className={
        className ||
        (variant === 'mobile'
          ? 'mt-2 flex items-center justify-center gap-2 border border-yellow-400/40 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all cursor-pointer'
          : 'flex items-center gap-2 border border-white/20 hover:border-yellow-400/80 hover:text-yellow-400 hover:shadow-[0_0_20px_rgba(250,204,21,0.25)] text-gray-200 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer')
      }
    >
      <AwardIcon size={14} />
      Certificates
    </button>
  );
}

export default function CertificatesModal({ isOpen: controlledIsOpen, onClose: controlledOnClose }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [preview, setPreview] = useState(null);

  const isControlled = controlledIsOpen !== undefined;
  const showModal = isControlled ? controlledIsOpen : internalOpen;

  const handleClose = useCallback(() => {
    if (preview) {
      setPreview(null);
    }
    if (isControlled && controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalOpen(false);
    }
  }, [preview, isControlled, controlledOnClose]);

  useEffect(() => {
    const handleOpenEvent = (e) => {
      setInternalOpen(true);
      if (e?.detail?.previewCert) {
        setPreview(e.detail.previewCert);
      }
    };

    window.addEventListener('open-certificates', handleOpenEvent);
    return () => window.removeEventListener('open-certificates', handleOpenEvent);
  }, []);

  useEffect(() => {
    if (showModal) {
      if (window.lenis) {
        window.lenis.stop();
      }
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      if (window.lenis) {
        window.lenis.start();
      }
    }
    return () => {
      document.body.style.overflow = '';
      if (window.lenis) {
        window.lenis.start();
      }
    };
  }, [showModal]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (preview) setPreview(null);
        else if (showModal) handleClose();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showModal, preview, handleClose]);

  if (!showModal) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-8 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      data-lenis-prevent="true"
    >
      <div
        className="w-full max-w-4xl h-[88vh] max-h-[88vh] bg-zinc-950 border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-modal-in"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 md:px-8 py-4 md:py-5 border-b border-white/10 shrink-0 bg-zinc-900/50">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400">
              <AwardIcon size={18} />
            </span>
            <div>
              <h3 className="text-base md:text-lg font-black uppercase tracking-wide text-white">Certificates & Credentials</h3>
              <p className="text-xs text-zinc-400">
                {CERTIFICATES.length} Verified Credentials
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close certificates"
            className="w-9 h-9 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <CloseIcon size={18} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div
          data-lenis-prevent="true"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-5 md:px-8 py-6 space-y-6"
          style={{ overscrollBehavior: 'contain', WebkitOverflowScrolling: 'touch' }}
        >
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-yellow-400">All Earned Credentials ({CERTIFICATES.length})</h4>
            <span className="text-[11px] text-zinc-400">Click card to preview or PDF icon to view official document</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 pb-4">
            {CERTIFICATES.map((cert, idx) => (
              <div
                key={cert.id}
                className="group relative rounded-xl overflow-hidden border border-white/10 bg-zinc-900 aspect-[3/4] animate-card-in shadow-md hover:border-yellow-400/50 transition-all duration-300"
                style={{ animationDelay: `${Math.min(idx, 10) * 0.04}s` }}
              >
                <img
                  src={cert.thumb}
                  alt={cert.name}
                  onClick={() => setPreview({ name: cert.name, data: cert.thumb, file: cert.file, type: 'image/jpeg' })}
                  className="w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                />
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${cert.name} PDF`}
                  title="Open Original Certificate PDF"
                  className="absolute top-2 right-2 w-8 h-8 rounded-full bg-zinc-950/80 backdrop-blur border border-white/15 flex items-center justify-center text-zinc-300 hover:text-yellow-400 hover:border-yellow-400 transition-all shadow-lg z-10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FileIcon size={14} />
                </a>
                <div
                  onClick={() => setPreview({ name: cert.name, data: cert.thumb, file: cert.file, type: 'image/jpeg' })}
                  className="absolute bottom-0 left-0 right-0 px-2.5 py-2 bg-gradient-to-t from-black/95 via-black/80 to-transparent cursor-pointer"
                >
                  <p className="text-[11px] font-bold text-white leading-tight line-clamp-2">{cert.name}</p>
                  <p className="text-[10px] text-yellow-400/90 font-medium truncate mt-0.5">{cert.issuer} · {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen image preview */}
      {preview && (
        <div
          className="fixed inset-0 z-[120] flex flex-col items-center justify-center p-4 md:p-8 bg-black/95 animate-fade-in"
          onClick={() => setPreview(null)}
          data-lenis-prevent="true"
        >
          <div
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={preview.data || preview.thumb}
              alt={preview.name}
              className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />
            <p className="text-white text-sm font-bold text-center mt-3 line-clamp-2 max-w-xl">{preview.name}</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              {preview.file && (
                <a
                  href={preview.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider hover:bg-yellow-300 transition-all shadow-lg cursor-pointer"
                >
                  <FileIcon size={14} />
                  Open Original PDF
                </a>
              )}
              <button
                onClick={() => setPreview(null)}
                className="border border-white/20 hover:border-white/50 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
          <button
            onClick={() => setPreview(null)}
            aria-label="Close preview"
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            <CloseIcon size={20} />
          </button>
        </div>
      )}
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
}

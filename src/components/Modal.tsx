'use client';

import { createPortal } from 'react-dom';
import { ReactNode, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import React from 'react';

interface ModalProps {
  children: ReactNode;
}

interface ModalHandles {
  openModal: () => void;
}

function Modal({ children }: ModalProps, ref: React.Ref<ModalHandles>) {
  const [portalElement, setPortalElement] = useState<Element | null>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setPortalElement(document.getElementById('modal'));
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  useImperativeHandle(ref, () => ({
    openModal() {
      setOpen(true);
    },
  }));

  if (!portalElement || !open) {
    return null;
  }

  return createPortal(
    <>
      <BackDrop onClose={handleClose} />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-md bg-white p-8">
        {children}
      </div>
    </>,
    portalElement
  );
}

export default forwardRef(Modal);

interface BackDropProps {
  onClose?: () => void;
}

function BackDrop({ onClose }: BackDropProps) {
  return <div className="backDrop" onClick={onClose} />;
}

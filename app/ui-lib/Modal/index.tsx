import { ReactNode, RefObject } from 'react';

function Modal({
  modalRef,
  children,
}: {
  modalRef: RefObject<HTMLDialogElement>;
  children: ReactNode;
}) {
  return (
    <dialog ref={modalRef} className="modal">
      <div className="modal-box mt-0 bg-brand-purple">
        <form method="dialog">
          <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">✕</button>
        </form>
        {children}
      </div>
    </dialog>
  );
}

export default Modal;

import React from 'react';
import { ModalProps } from 'pages/users/model';

const AddUserModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
        <div className="relative z-10 bg-white rounded-lg p-8 max-w-md w-full">
          {children}
          <button
            className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={onClose}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;

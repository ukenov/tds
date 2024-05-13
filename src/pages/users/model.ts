export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  skills: string[];
  dateOfRegistration: Date;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: any;
}
  
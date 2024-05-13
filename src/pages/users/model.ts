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

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
  
import { Button, Modal } from 'react-bootstrap';

type ModalWindowProps = {
  title: string;
  show?: boolean;
  onClose: () => void;
  actionTitle?: string;
  onAction?: () => void;
  children?: React.ReactNode;
};

const defaultProps = {
  show: false,
  actionTitle: undefined,
  onAction: undefined,
  children: undefined,
};

export default function ModalWindow({
  title,
  show = false,
  onClose,
  actionTitle = undefined,
  onAction = undefined,
  children = undefined,
}: ModalWindowProps) {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        {actionTitle && onAction && (
          <Button variant="dark" onClick={onAction}>
            {actionTitle}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

ModalWindow.defaultProps = defaultProps;

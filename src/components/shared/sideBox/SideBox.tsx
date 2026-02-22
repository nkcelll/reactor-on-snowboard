import type { ReactNode } from 'react';
import Overlay from '../Overlay';

type SideBoxProps = {
  isVisible: boolean;
  open: () => void;
  close: () => void;
  trigger: ReactNode;       // the button or element that opens the box
  header?: ReactNode;       // optional header content
  footer?: ReactNode;       // optional footer content
  children: ReactNode;      // main content inside box
  className?: string;       // extra class for styling
};

export default function SideBox({
  isVisible,
  open,
  close,
  trigger,
  header,
  footer,
  children,
  className,
}: SideBoxProps) {
  return (
    <div className={`side-box ${className}`}>
      <button 
        onClick={open}
        aria-label={`Overlay is ${isVisible ? 'Opened' : 'Closed'}`}> 
          {trigger}
      </button>

      <Overlay isVisible={isVisible} close={close} />

      <div className={`box-container ${isVisible ? 'box_open' : ''}`}>
        <div className="box-container-burger"></div>
        {header && <div className="box-header">{header}</div>}
        <div className="box-content">{children}</div>
        {footer && <div className="box-footer">{footer}</div>}
      </div>
    </div>
  );
}
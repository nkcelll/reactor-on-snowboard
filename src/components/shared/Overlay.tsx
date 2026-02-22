type OverlayProps = {
  isVisible: boolean;
  close: () => void;
};

export default function Overlay({ isVisible, close }: OverlayProps) {
  return (
    <button
      className={`overlay ${isVisible ? 'overlay-visible' : ''}`}
      onClick={close}
    ></button>
  );
}

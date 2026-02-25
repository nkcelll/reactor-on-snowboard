import { IconGrid2, IconGrid3, IconGrid4 } from '@/assets/icons';

interface onGridChangeProps {
  onGridChange: (columns: number) => void;
  activeGrid?: number
}

export default function GridCenterIcons({ onGridChange, activeGrid }: onGridChangeProps) {
  
  return (
    <div className="flexBox grid-column-icons">
      <button 
        onClick={() => onGridChange(2)}
        className={activeGrid === 2 ? 'active-grid' : ''} 
        style={activeGrid !== 2 ? { filter: 'blur(1px)' } : {}} 
      >
        <IconGrid2 />
      </button>
      <button 
        onClick={() => onGridChange(3)}
        aria-label={`Currently active ${activeGrid}`}
        className={activeGrid === 3 ? 'active-grid' : 'blurred'} 
        style={activeGrid !== 3 ? { filter: 'blur(1px)' } : {}} 

      >
        <IconGrid3 />
      </button>
      <button 
        onClick={() => onGridChange(4)}
        className={activeGrid === 4 ? 'active-grid' : ''} 
        style={activeGrid !== 4 ? { filter: 'blur(1px)' } : {}} 
      >
        <IconGrid4 />
      </button>
    </div>
  );
}
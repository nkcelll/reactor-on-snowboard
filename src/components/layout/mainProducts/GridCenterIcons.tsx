import { IconGrid2, IconGrid3, IconGrid4 } from '@/assets/icons';

export default function GridCenterIcons() {
  return (
    <div className="flexBox grid-column-icons">
      <button>
        <IconGrid2 />
      </button>
      <button>
        <IconGrid3 />
      </button>
      <button>
        <IconGrid4 />
      </button>
    </div>
  );
}

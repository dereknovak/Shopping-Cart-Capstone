import type { SortType } from '../types';
import { capitalize } from '../utilities/utilities';

interface ProductSortButtonProps {
  sortType: SortType;
  isSelected: (sortType: SortType) => boolean;
}

const ProductSortButton = ({
  sortType,
  isSelected,
}: ProductSortButtonProps) => {
  return (
    <dd>
      <button
        className={isSelected(sortType) ? 'active' : 'inactive'}
        value={sortType}
      >
        {capitalize(sortType)}
      </button>
    </dd>
  );
};

export default ProductSortButton;

import type {} from 'react';
import ProductSortButton from './ProductSortButton';
import type { SortType } from '../types';

interface SortingOptionsProps {
  isSelected: (sortType: SortType) => boolean;
  onProductSort: (type: SortType) => void;
}

const SortingOptions = ({ isSelected, onProductSort }: SortingOptionsProps) => {
  const handleProductSort = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = e.target as HTMLButtonElement;

    if (target.tagName === 'BUTTON') {
      onProductSort(target.value as SortType);
    }
  };

  return (
    <dl id="sorting-options" onClick={handleProductSort}>
      <dt>Sort by:</dt>
      <ProductSortButton sortType="newest" isSelected={isSelected} />
      <ProductSortButton sortType="title" isSelected={isSelected} />
      <ProductSortButton sortType="price" isSelected={isSelected} />
      <ProductSortButton sortType="quantity" isSelected={isSelected} />
    </dl>
  );
};

export default SortingOptions;

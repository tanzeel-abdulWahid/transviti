interface FilterTagsProps {
  tags: Tag[];
}

const FilterTags = ({ tags }: FilterTagsProps) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="subheading-text text-light-gray">Similar:</span>
      {tags.map((tag) => (
        <button
          key={tag.id}
          className="px-4 py-1.5 text-xs cursor-pointer subheading-text rounded-md border border-light-gray text-light-gray hover:bg-gray-50 transition-colors"
        >
          {tag.label}
        </button>
      ))}
    </div>
  );
};

export default FilterTags;

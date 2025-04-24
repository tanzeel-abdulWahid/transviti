"use client";
interface JobsHeadingProps {
  heading: string;
  actionBtnTitle: string;
  onActionBtnClick?: () => void;
}

const JobsHeadings = ({
  heading,
  actionBtnTitle,
  onActionBtnClick,
}: JobsHeadingProps) => {
  return (
    <div className="flex gap-3 items-center">
      <h1 className="subheading-text text-lg">{heading}</h1>
      <h1
        onClick={() => onActionBtnClick && onActionBtnClick()}
        className="subheading-text underline underline-offset-2 cursor-pointer text-primary"
      >
        {actionBtnTitle}
      </h1>
    </div>
  );
};

export default JobsHeadings;

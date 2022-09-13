import { Breadcrumb } from '@htmlplus/react';

const BreadcrumbCustomized = () => {
  return (
    <Breadcrumb max={2}>
      <svg slot="separator" viewBox="0 0 16 16">
        <path d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" />
      </svg>
      <a href="#"> HTMLPLUS</a>
      <a href="#"> Core</a>
      <a href="#"> UI Components</a>
      <a href="#"> Breadcrumb</a>
    </Breadcrumb>
  );
};

export default BreadcrumbCustomized;

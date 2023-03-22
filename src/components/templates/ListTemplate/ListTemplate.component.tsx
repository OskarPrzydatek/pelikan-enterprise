interface IListTemplate {
  title: string;
  page: string | undefined;
}

export const ListTemplate: React.FC<IListTemplate> = ({
  title,
  page,
}: IListTemplate) => {
  const pageLabel = page ?? 1;

  return (
    <div>
      <h2>{title}</h2>
      <p data-testid="page-number">page: {pageLabel}</p>
    </div>
  );
};

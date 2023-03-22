interface IEditTemplate {
  title: string;
  id: string | undefined;
}

export const EditTemplate: React.FC<IEditTemplate> = ({
  title,
  id,
}: IEditTemplate) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>id: {id}</p>
    </div>
  );
};

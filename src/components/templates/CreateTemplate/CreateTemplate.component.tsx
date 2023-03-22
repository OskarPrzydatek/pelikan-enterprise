interface ICreateTemplate {
  title: string;
}

export const CreateTemplate: React.FC<ICreateTemplate> = ({
  title,
}: ICreateTemplate) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

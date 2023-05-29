import { useForm } from 'react-hook-form';

import { CreateAttractionTemplate } from '~/components/templates';
import { IAttraction } from '~/models';
import { StyledComponentsProvider } from '~/providers';

interface ICreateAttractionTemplateHelper {
  onSubmitCreateAttraction: () => void;
}

export const CreateAttractionTemplateHelper: React.FC<
  ICreateAttractionTemplateHelper
> = ({ onSubmitCreateAttraction }: ICreateAttractionTemplateHelper) => {
  const methods = useForm<IAttraction>();

  return (
    <StyledComponentsProvider>
      <CreateAttractionTemplate
        createAttractionFormMethods={methods}
        onSubmitCreateAttraction={onSubmitCreateAttraction}
      />
    </StyledComponentsProvider>
  );
};

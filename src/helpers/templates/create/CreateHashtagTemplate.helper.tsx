import { useForm } from 'react-hook-form';

import { CreateHashtagTemplate } from '~/components/templates';
import { IHashtag } from '~/models';
import { StyledComponentsProvider } from '~/providers';

interface ICreateHashtagTemplateHelper {
  onSubmitCreateHashtag: () => void;
}

export const CreateHashtagTemplateHelper: React.FC<
  ICreateHashtagTemplateHelper
> = ({ onSubmitCreateHashtag }: ICreateHashtagTemplateHelper) => {
  const methods = useForm<IHashtag>();

  return (
    <StyledComponentsProvider>
      <CreateHashtagTemplate
        creatHashtagFormMethods={methods}
        onSubmitCreateHashtag={onSubmitCreateHashtag}
      />
    </StyledComponentsProvider>
  );
};

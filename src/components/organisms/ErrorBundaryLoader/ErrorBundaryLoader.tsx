import { Text } from '~/components/atoms';
import { ActivitiIndicator } from '~/components/molecules';

import * as S from './ErrorBundaryLoader.styles';

interface IErrorBundaryLoader {
  isLoading: boolean;
  error: Error | undefined;
  children: React.ReactNode;
}

export const ErrorBundaryLoader: React.FC<IErrorBundaryLoader> = ({
  isLoading,
  error,
  children,
}: IErrorBundaryLoader) => {
  if (isLoading)
    return (
      <S.ErrorBundaryLoader>
        <ActivitiIndicator dataTestID="page-layout-loading" label="Ładowanie" />
      </S.ErrorBundaryLoader>
    );

  if (error)
    return (
      <S.ErrorBundaryLoader>
        <Text dataTestID="page-layout-error">Coś poszło nie tak!</Text>
      </S.ErrorBundaryLoader>
    );

  return <S.ErrorBundaryLoader>{children}</S.ErrorBundaryLoader>;
};

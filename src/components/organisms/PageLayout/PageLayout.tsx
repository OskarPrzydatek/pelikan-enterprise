import { Text } from '~/components/atoms';

import * as S from './PageLayout.styles';

interface IPageLayout {
  isLoading: boolean;
  error: Error | undefined;
  children: React.ReactNode;
}

export const PageLayout: React.FC<IPageLayout> = ({
  isLoading,
  error,
  children,
}: IPageLayout) => {
  if (isLoading)
    return (
      <S.PageLayout>
        <Text dataTestID="page-layout-loading">Ładowanie...</Text>
      </S.PageLayout>
    );

  if (error)
    return (
      <S.PageLayout>
        <Text dataTestID="page-layout-error">Coś poszło nie tak!</Text>
      </S.PageLayout>
    );

  return <S.PageLayout>{children}</S.PageLayout>;
};

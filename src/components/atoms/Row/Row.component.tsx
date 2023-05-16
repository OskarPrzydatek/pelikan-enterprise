import React from 'react';

import * as S from './Row.styles';

interface IRow {
  children: React.ReactNode;
}

export const Row: React.FC<IRow> = ({ children }: IRow) => {
  return <S.Row>{children}</S.Row>;
};

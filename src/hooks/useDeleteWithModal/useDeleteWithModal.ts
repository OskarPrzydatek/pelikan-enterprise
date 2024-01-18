import React from 'react';

export const useDeleteWithModal = (onClickDelete: (id: number) => void) => {
  const [showModal, setShowModal] = React.useState<boolean>();
  const [deleteItemId, setDeleteItemId] = React.useState<number | null>(null);

  const refreshState = () => {
    setShowModal(false);
    setDeleteItemId(null);
  };

  const handleItemIdBeforeDelete = (id: number) => {
    setShowModal(true);
    setDeleteItemId(id);
  };

  const onClickAcceptedDelete = () => {
    refreshState();
    if (deleteItemId) onClickDelete(deleteItemId);
  };

  const onClickCloseModale = () => refreshState();

  return {
    showModal,
    handleItemIdBeforeDelete,
    onClickAcceptedDelete,
    onClickCloseModale,
  };
};

import * as React from 'react';
import { Button, useNotify, useRefresh, useUnselectAll, useUpdateMany, Confirm, useListContext } from 'react-admin';

const BulkDeactivateButton = () => {
  const { selectedIds } = useListContext(); // Récupérer les id sélectionnés
  const notify = useNotify(); // Pour afficher des notifications
  const refresh = useRefresh(); // Pour rafraîchir la liste après l'action
  const unselectAll = useUnselectAll('users'); // Pour désélectionner les utilisateurs après l'action
  const [open, setOpen] = React.useState(false); // Pour gérer la boîte de dialogue de confirmation

  // Utilisation de useUpdateMany pour mettre à jour plusieurs utilisateurs
  const [updateMany, { isLoading }] = useUpdateMany(
    'users', // Resource
    { ids: selectedIds, data: { status: 'inactive' } }, // Payload
    {
      onSuccess: () => {
        notify('Utilisateurs desactivé avec success', { type: 'success' }); // Notification de succès
        refresh(); // Rafraîchir la liste
        unselectAll(); // Désélectionner les utilisateurs
      },
      onError: (error) => {
        notify(`Error: ${error.message}`, { type: 'error' }); // Notification d'erreur
      },
    }
  );

  // Gestion de la boîte de dialogue de confirmation
  const handleClick = () => setOpen(true); // Ouvrir la boîte de dialogue
  const handleDialogClose = () => setOpen(false); // Fermer la boîte de dialogue
  const handleConfirm = () => {
    updateMany(); // Exécuter l'action de désactivation
    setOpen(false); // Fermer la boîte de dialogue
  };

  return (
    <>
      <Button
        label="Désactiver"
        onClick={handleClick}
        disabled={isLoading || selectedIds.length === 0} // Désactiver si aucun utilisateur n'est sélectionné
      />
      <Confirm
        isOpen={open}
        title="Désactivation des utilisateurs"
        content="Êtes-vous sûr de vouloir désactiver les utilisateurs sélectionnés ? "
        onConfirm={handleConfirm}
        onClose={handleDialogClose}
      />
    </>
  );
};

export default BulkDeactivateButton;
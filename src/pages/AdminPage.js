import React, { useState } from 'react';
import useItems from '../hooks/useItems';
import ItemForm from '../components/ItemForm';
import ItemList from '../components/ItemList';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import Sidebar from '../components/Sidebar';

export default function AdminPage({ onLogout }) {
  const { items, createItem, editItem, removeItem } = useItems();
  const [editData, setEditData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Modal state
  const [modalType, setModalType] = useState(null);
  const [pendingAction, setPendingAction] = useState(null);

  const openConfirmation = (type, action) => {
    setModalType(type);
    setPendingAction(() => action);
  };

  const handleConfirm = () => {
    if (pendingAction) pendingAction();
    setModalType(null);
    setPendingAction(null);
  };

  const handleCancel = () => {
    setModalType(null);
    setPendingAction(null);
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const handleSubmit = (data) => {
    if (editData) {
      openConfirmation('edit', () => {
        editItem(editData.id, data);
        setEditData(null);
      });
    } else {
      openConfirmation('add', () => createItem(data));
    }
  };

  const handleDelete = (id) => {
    openConfirmation('delete', () => removeItem(id));
  };

  return (
    <div className="admin-ui">
      <Sidebar onLogout={() => openConfirmation('logout', onLogout)} />

      <main className="main-content">
        <div className="header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1>User Manager</h1>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        <ItemForm
          onSubmit={handleSubmit}
          editItem={editData}
          cancelEdit={() => setEditData(null)}
        />

        <ItemList
          items={currentItems}
          onEdit={(item) => setEditData(item)}
          onDelete={handleDelete}
        />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </main>

      {modalType && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>
              {modalType === 'add' && 'Are you sure you want to add this user?'}
              {modalType === 'edit' && 'Have you reviewed the data and confirmed it’s correct?'}
              {modalType === 'delete' && 'Are you sure you want to delete this user?'}
              {modalType === 'logout' && 'Are you sure you want to logout?'}
            </h3>
            <div className="modal-buttons">
              <button onClick={handleConfirm}>Yes</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
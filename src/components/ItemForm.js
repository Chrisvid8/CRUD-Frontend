import React, { useState, useEffect } from 'react';

export default function ItemForm({ onSubmit, editItem, cancelEdit }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    if (editItem) {
      setForm(editItem);
    }
  }, [editItem]);

  const validate = () => {
    if (!form.name.trim()) return 'Name is required.';
    if (!/^\d{7,15}$/.test(form.phone)) return 'Phone must be valid (7–15 digits).';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Invalid email.';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) return setError(err);
    onSubmit(form);
    setForm({ name: '', phone: '', email: '' });
    setError('');
  };

  return (
    <form className="input-section" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <input
        type="email"
        placeholder="Enter email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <button type="submit">{editItem ? 'Update' : 'Add'}</button>
      {editItem && <button type="button" onClick={cancelEdit}>Cancel</button>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
}
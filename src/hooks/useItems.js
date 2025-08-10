import { useState, useEffect } from 'react';
import { getItems, addItem, updateItem, deleteItem } from '../api/itemsApi';

export default function useItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchItems = async () => {
    setLoading(true);
    const res = await getItems();
    const sortedData = res.data.sort((a, b) => Number(a.id) - Number(b.id));
    setItems(sortedData);
    setLoading(false);
  };

  const createItem = async (item) => {
    await addItem(item);
    fetchItems();
  };

  const editItem = async (id, item) => {
    await updateItem(id, item);
    fetchItems();
  };

  const removeItem = async (id) => {
    await deleteItem(id);
    fetchItems();
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return { items, createItem, editItem, removeItem, loading };
}
import { createContext, useState } from "react";

const categoryData = [
  { icone: "cupcake", nome: "Bolos" },
  { icone: "food-croissant", nome: "Salgados" },
  { icone: "pizza", nome: "Pizzas" },
  { icone: "ice-cream", nome: "Sorvetes" },
  { icone: "hamburger", nome: "Lanches" },
  { icone: "coffee", nome: "Cafeterias" },
];
const storeData = [
  {
    id: 1,
    categoria: "Bolos",
    nome: "Loja A",
    endereco: "Asa Sul",
    nota: "4,8",
  },
  {
    id: 2,
    categoria: "Salgados",
    nome: "Loja B",
    endereco: "Asa Sul",
    nota: "4,7",
  },
  {
    id: 3,
    categoria: "Pizzas",
    nome: "Loja C",
    endereco: "Asa Sul",
    nota: "4,5",
  },
  {
    id: 4,
    categoria: "Sorvetes",
    nome: "Loja D",
    endereco: "Asa Norte",
    nota: "5,0",
  },
  {
    id: 5,
    categoria: "Lanches",
    nome: "Loja E",
    endereco: "Asa Norte",
    nota: "4,7",
  },
  {
    id: 6,
    categoria: "Bolos",
    nome: "Loja F",
    endereco: "Lago Sul",
    nota: "4,8",
  },
  {
    id: 7,
    categoria: "Cafeterias",
    nome: "Loja G",
    endereco: "Lago Norte",
    nota: "4,8",
  },
  {
    id: 8,
    categoria: "Pizzas",
    nome: "Loja H",
    endereco: "Taguatinga",
    nota: "4,9",
  },
  {
    id: 9,
    categoria: "Pizzas",
    nome: "Loja I",
    endereco: "Águas Claras",
    nota: "4,6",
  },
  {
    id: 10,
    categoria: "Lanches",
    nome: "Loja J",
    endereco: "Ceilândia",
    nota: "4,7",
  },
];
const StoreContext = createContext();

function StoreProvider({ children }) {
  const [stores, setStores] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadData = () => {
    setLoading(true);
    setTimeout(() => {
      setCategories(categoryData);
      setStores(storeData);
      setLoading(false);
    }, 2000);
  };
  const searchStore = (categoryName, filter) => {
    setLoading(true);
    setTimeout(() => {
      const result = storeData.filter(
        (store) => store.categoria === categoryName
         &&
           (store.nome.toLowerCase().includes(filter.toLowerCase()) ||
        store.endereco.toLowerCase().includes(filter.toLowerCase()))
      );
      setStores(result);
      setLoading(false);
    }, 2000);
  };

  return (
    <StoreContext.Provider
      value={{ stores, categories, loading, loadData, searchStore }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export { StoreContext, StoreProvider };

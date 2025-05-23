import { createContext, useState } from "react";

const lojasDB = [
  { id: 1, nome: "Restaurante Asa Sul", nota: "4,8" },
  { id: 2, nome: "Restaurante Asa Norte", nota: "4,5" },
  { id: 3, nome: "Restaurante Tagua", nota: "5,0" },
  { id: 4, nome: "Lanchonete Sudoeste", nota: "4,7" },
  { id: 5, nome: "Lanchonete Noroeste", nota: "4,6" },
  { id: 6, nome: "Bar Ceilandia", nota: "4,4" },
  { id: 7, nome: "Bar Nucleo", nota: "4,3" },
  { id: 8, nome: "Pizzaria Sobradinho", nota: "4,0" },
];

const categoriasDB = [
  { id: 1, nome: "Restaurantes", icone: "food" },
  { id: 2, nome: "Lanchonetes", icone: "hamburger" },
  { id: 3, nome: "Bares", icone: "beer" },
  { id: 4, nome: "Pizzarias", icone: "pizza" },
  { id: 5, nome: "Mercados", icone: "shopping" },
  { id: 6, nome: "Sorveterias", icone: "ice-cream" },
  { id: 7, nome: "Cafeterias", icone: "coffee" },
  { id: 8, nome: "Padarias", icone: "bread-slice" },
];

const LojaContext = createContext();

function LojaProvider({ children }) {
  const [lojas, setLojas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const carregarDados = () => {
    setCarregando(true);
    setTimeout(() => {
      setLojas(lojasDB);
      setCategorias(categoriasDB);
      setCarregando(false);
    }, 2000);
  };

  const buscarLojas = (filtro) => {
    setCarregando(true);
    setTimeout(() => {
      const lojasEncontradas = lojasDB.filter((item) =>
        item.nome.toLowerCase().includes(filtro.toLowerCase())
      );
      setLojas(lojasEncontradas);
      setCarregando(false);
    }, 2000);
  };

  return (
    <LojaContext.Provider
      value={{ lojas, categorias, carregando, carregarDados, buscarLojas }}
    >
      {children}
    </LojaContext.Provider>
  );
}

export { LojaContext, LojaProvider };
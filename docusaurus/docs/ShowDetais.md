---
id: ShowDetails
title: Página Detalle (<ShowDetails />)
---



{/* -------------------------------------------------------- */}
{/* Helper interno para renderizar los ejemplos con Router   */}
{/* -------------------------------------------------------- */}
import ShowDetails from "../components/ShowDetails.jsx";
import { MemoryRouter, Switch, Route } from 'react-router-dom'; 

export const ShowDetailsDemo = ({ indice }) => (
  <div>
    <MemoryRouter initialEntries={[`/${indice}`]}>
      {/* Uso Switch porque la librería es v5 */}
      <Switch>
        <Route path="/:indice">
           <ShowDetails />
        </Route>
      </Switch>
    </MemoryRouter>
  </div>
);


# 🔎 Componente `ShowDetails` (Página de Detalle)

El componente `ShowDetails` es una **página completa** diseñada para mostrar la ficha técnica detallada de un electrodoméstico específico seleccionado previamente.

## Características Principales

* **Enrutamiento Dinámico:** Es un *Smart Component* que lee la URL activa (usando `useParams`) para determinar qué producto mostrar.
* **Conexión a Datos:** Recupera automáticamente la información del archivo local `electrodomesticos.js` basándose en el índice capturado.
* **Navegación:** Implementa un botón de "Volver" funcional que utiliza el historial del navegador (`useNavigate`).
* **Diseño de Tarjeta:** Utiliza una estructura CSS de tarjeta (`card_layout`) para presentar la imagen y la información de forma clara y responsiva.

## Props (Entradas)

A diferencia de los componentes UI puros, este componente **no recibe props directas**. Sus "entradas" provienen de la URL y el Router.

| Nombre | Origen | Tipo | Descripción |
| :--- | :--- | :--- | :--- |
| `indice` | **URL** | `string` | El número identificador del producto en la URL (ej: `/0`, `/5`). Se usa para buscar en el array. |
| `Maps` | **Hook** | `func` | Función interna obtenida de `useNavigate` para gestionar el retorno a la página anterior. |
| `data` | **Import** | `Array` | El array de objetos importado desde `../data/electrodomesticos.js`. |

## Estructura del Componente

El componente renderiza un contenedor principal `<div>` con la clase `card_layout` que contiene:

1.  **`<img>` (Visual):** Muestra la imagen del producto.
    * Usa la clase `card_img` para el estilo.
    * El atributo `alt` es dinámico: `"Imagen del producto [Nombre]"`.
2.  **`div.info_card` (Información):** Bloque derecho o inferior con los datos.
    * **`<h2>`:** El título/nombre del electrodoméstico (`card_title`).
    * **`<p>`:** La descripción completa del producto (`card_desc`).
    * **`<button>`:** Botón con clase `volver` que ejecuta la acción de navegación.

## Ejemplos

:::note Nota Técnica
Como este componente depende de la base de datos interna (`electrodomesticos.js`), los ejemplos a continuación muestran datos reales del array según el índice pasado a la URL simulada.
:::

### Índice 0 (Frigorífico)
Simulación de la ruta `path="/0"`.

<ShowDetailsDemo indice="0" />

<br/>

### Índice 6 (Lavadora)
Simulación de la ruta `path="/6"`.

<ShowDetailsDemo indice="6" />

<br/>

### Índice 13 (Horno)
Simulación de la ruta `path="/13"`.

<ShowDetailsDemo indice="13" />

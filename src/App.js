// Define a functional component for rendering a row with a product category.
function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

// Define a functional component for rendering a row with product details.
function ProductRow({ product }) {
  // Create a variable 'name' to conditionally style the product name.
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: 'red' }}>
      {product.name}
    </span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

// Define a functional component for rendering the product table.
function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  // Iterate through the list of products and categorize them.
  products.forEach((product) => {
    // If the product category changes, add a category row to the table.
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    // Add a product row to the table for each product.
    rows.push(
      <ProductRow
        product={product}
        key={product.name}
      />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

// Define a functional component for rendering a search bar and the product table.
function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

// Define a functional component for rendering the search bar.
function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

// Define the main application component and provide it with sample product data.
const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

// The main App component renders the FilterableProductTable with the sample product data.
export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

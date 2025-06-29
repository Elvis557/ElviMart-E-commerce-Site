import { render, screen, fireEvent } from '@testing-library/react';
import ProductsWithSidebar from './Products';

// filepath: c:\Users\HP\LOGIN_REGISTER\client\src\Products.test.jsx

describe('ProductsWithSidebar Component', () => {
  test('renders the component and displays products', () => {
    render(<ProductsWithSidebar />);
    expect(screen.getByText(/Product Marketplace/i)).toBeInTheDocument();
    expect(screen.getByText(/Sunglasses/i)).toBeInTheDocument();
    expect(screen.getByText(/Smart Watch/i)).toBeInTheDocument();
  });

  test('filters products based on search input', () => {
    render(<ProductsWithSidebar />);
    const searchInput = screen.getByPlaceholderText(/Search products/i);
    fireEvent.change(searchInput, { target: { value: 'Sunglasses' } });
    expect(screen.getByText(/Sunglasses/i)).toBeInTheDocument();
    expect(screen.queryByText(/Smart Watch/i)).not.toBeInTheDocument();
  });

  test('adds a product to the cart', () => {
    render(<ProductsWithSidebar />);
    const addToCartButton = screen.getAllByText(/Add to Cart/i)[0];
    fireEvent.click(addToCartButton);
    expect(screen.getByText(/1/i)).toBeInTheDocument(); // Floating cart button shows 1 item
  });

  test('opens the cart modal and selects a payment method', () => {
    render(<ProductsWithSidebar />);
    const addToCartButton = screen.getAllByText(/Add to Cart/i)[0];
    fireEvent.click(addToCartButton);

    const cartButton = screen.getByText(/🛒 1/i);
    fireEvent.click(cartButton);

    expect(screen.getByText(/Checkout/i)).toBeInTheDocument();

    const creditCardOption = screen.getByLabelText(/Credit \/ Debit Card/i);
    fireEvent.click(creditCardOption);
    expect(creditCardOption).toBeChecked();
  });
});import { render, screen, fireEvent } from '@testing-library/react';
import ProductsWithSidebar from './Products';

// filepath: client/src/Products.test.jsx

describe('ProductsWithSidebar Component', () => {
  test('renders the component with products', () => {
    render(<ProductsWithSidebar />);
    expect(screen.getByText(/Product Marketplace/i)).toBeInTheDocument();
    expect(screen.getByText(/Sunglasses/i)).toBeInTheDocument();
  });

  test('filters products by search term', () => {
    render(<ProductsWithSidebar />);
    const searchInput = screen.getByPlaceholderText(/Search products/i);
    fireEvent.change(searchInput, { target: { value: 'Smart Watch' } });
    expect(screen.getByText(/Smart Watch/i)).toBeInTheDocument();
    expect(screen.queryByText(/Sunglasses/i)).not.toBeInTheDocument();
  });

  test('filters products by category', () => {
    render(<ProductsWithSidebar />);
    const categorySelect = screen.getByLabelText(/Categories/i);
    fireEvent.change(categorySelect, { target: { value: 'Wearables' } });
    expect(screen.getByText(/Smart Watch/i)).toBeInTheDocument();
    expect(screen.queryByText(/Sunglasses/i)).not.toBeInTheDocument();
  });

  test('adds a product to the cart', () => {
    render(<ProductsWithSidebar />);
    const addToCartButton = screen.getAllByText(/Add to Cart/i)[0];
    fireEvent.click(addToCartButton);
    expect(screen.getByText(/1/i)).toBeInTheDocument(); // Cart count
  });

  test('removes a product from the cart', () => {
    render(<ProductsWithSidebar />);
    const addToCartButton = screen.getAllByText(/Add to Cart/i)[0];
    fireEvent.click(addToCartButton);
    const removeButton = screen.getByText(/Remove/i);
    fireEvent.click(removeButton);
    expect(screen.queryByText(/1/i)).not.toBeInTheDocument(); // Cart count
  });

  test('selects a payment method', () => {
    render(<ProductsWithSidebar />);
    const cartButton = screen.getByText(/🛒/i);
    fireEvent.click(cartButton);
    const paymentOption = screen.getByLabelText(/Credit \/ Debit Card/i);
    fireEvent.click(paymentOption);
    expect(paymentOption).toBeChecked();
  });
});
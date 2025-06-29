import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Toast, ToastContainer, Button, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaShoppingCart, FaSearch, FaSortAmountDown, FaTags } from "react-icons/fa";
import { FaStoreAlt} from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa'; // Importing the heart icon for wishlist
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


const products = [
  {
    id: 1,
    name: "Sunglasses",
    description: "Stylish sunglasses with UV protection.",
    price: "$29.99",
    category: "Accessories",
    rating: 4,
    image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Stylish smartwatch with fitness tracking features.",
    price: "$89.99",
    category: "Wearables",
    rating: 4,
    image: "https://images.pexels.com/photos/2779018/pexels-photo-2779018.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    description: "Portable speaker with deep bass and waterproof design.",
    price: "$49.99",
    category: "Audio",
    rating: 3,
    image: "https://media.istockphoto.com/id/1059154330/photo/boombox.jpg?b=1&s=612x612&w=0&k=20&c=ZOjf8dze9q9YvlYZAxSxKoX8ND53G0HUIQtcwzUgZeI="
  },
  {
    id: 4,
    name: "Gaming Mouse",
    description: "Ergonomic gaming mouse with customizable RGB lighting.",
    price: "$59.99",
    category: "Peripherals",
    rating: 4,
    image: "https://images.pexels.com/photos/14401674/pexels-photo-14401674.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 5,
    name: "Laptop Stand",
    description: "Adjustable laptop stand for better ergonomics.",
    price: "$29.99",
    category: "Stands & Mounts",
    rating: 3,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSHOeV73iaz9BBPqXY_IuIFsg2xGkWsLwYwM1ZyqGxIf2NQwi_c9jk_1C8H2BNAD_gNESBUN4ZW223GiBhqwOMlTovIwJDegOHMnSXMZtCCbIZUV4_JnyNCNPJVgLReyMaeCc_FxCnyzA4&usqp=CAc"
  },
  {
    id: 6,
    name: "Wireless Charger",
    description: "Fast wireless charger compatible with all Qi-enabled devices.",
    price: "$19.99",
    category: "Charging Accessories",
    rating: 4,
    image: "https://images.pexels.com/photos/5961044/pexels-photo-5961044.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 7,
    name: "Bicycle",
    description: "Mountain bike with 21-speed gear system and durable frame.",
    price: "$299.99",
    category: "Sports",
    rating: 5,
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 8,
    name: "Iphone XR",
    description: "Latest iPhone with A12 Bionic chip and Face ID.",
    price: "$799.99",
    category: "Mobile",
    rating: 5,
    image: "https://images.pexels.com/photos/8381360/pexels-photo-8381360.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 9,
    name: "Macbook Pro",
    description: "Powerful laptop with Retina display and Touch Bar.",
    price: "$1299.99",
    category: "Laptops",
    rating: 5,
    image: "https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 10,
    name: "Airforce 1",
    description: "Classic sneaker with premium leather and cushioning.",
    price: "$89.99",
    category: "Footwear",
    rating: 4,
    image: "https://images.pexels.com/photos/10726876/pexels-photo-10726876.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 11,
    name: "Timberland Boots",
    description: "Durable boots with waterproof leather and rugged sole.",
    price: "$149.99",
    category: "Footwear",
    rating: 5,
    image: "https://images.pexels.com/photos/23319175/pexels-photo-23319175/free-photo-of-boots-on-ground.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const ProductsWithSidebar = () => {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [quantity, setQuantity] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [wishlist, setWishlist] = useState([]);
  
  const [showWishlist, setShowWishlist] = useState(false);
  const [showOnlyWishlist, setShowOnlyWishlist] = useState(false);
  const profileImage = localStorage.getItem('profileImage') || "https://i.pravatar.cc/40?img=3";


  const handleAddToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      return found ? prev : [...prev, { ...product }];
    });
    setQuantity((prev) => ({ ...prev, [product.id]: (prev[product.id] || 0) + 1 }));
    setToastMessage(`${product.name} added to cart`);
    setShowToast(true);
  };



  const handleIncreaseQuantity = (productId) => {
    setQuantity((prev) => ({ ...prev, [productId]: (prev[productId] || 0) + 1 }));
  };

  const handleDecreaseQuantity = (productId) => {
    if (quantity[productId] > 0) {
      setQuantity((prev) => ({ ...prev, [productId]: prev[productId] - 1 }));
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
    setQuantity((prev) => {
      const { [productId]: _, ...rest } = prev;
      return rest;
    });
  };

  const handlePaymentSelection = (method) => {
    setPaymentMethod(method);
  };

  const handleToggleWishlist = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);
    const updatedWishlist = exists
      ? wishlist.filter((item) => item.id !== product.id)
      : [...wishlist, product];
  
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  
    // Optional toast feedback
    const message = exists
      ? `${product.name} removed from wishlist`
      : `${product.name} added to wishlist`;
  
    toast.success(message);
  };
  

  

 const filteredProducts = products
  .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
  .filter((p) => (categoryFilter ? p.category === categoryFilter : true))
  .filter((p) => (showOnlyWishlist ? wishlist.includes(p.id) : true))
  .sort((a, b) => {
    switch (sortOption) {
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "price-asc":
        return parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", ""));
      case "price-desc":
        return parseFloat(b.price.replace("$", "")) - parseFloat(a.price.replace("$", ""));
      default:
        return 0;
    }
  });


  return (
    <div style={{ display: "flex", fontFamily: "'Poppins', sans-serif" }}>
      {/* Sidebar */}
      <div style={{
        backgroundColor: "",
        color: "#0277bd",
        padding: "30px",
        width: "705px",
        minHeight: "100vh",
        boxShadow: "6px 0 15px rgba(0, 0, 0, 0.1)",
        borderTopRightRadius: "0px"
      }}>
        <h3 style={{ textAlign: "center", fontSize: "22px", fontWeight: "700", marginBottom: "30px" }}>Filter</h3>
        <Form.Group className="mb-3">
          <Form.Label><FaSearch /> Search</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ borderRadius: "10px", border: "1px solid #b2ebf2" }}
          />
        </Form.Group>

        {/* Categories Section */}
        <Form.Group className="mb-3">
          <Form.Label><FaTags /> Categories</Form.Label>
          <Form.Select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            style={{ borderRadius: "10px", border: "1px solid #b2ebf2" }}
          >
            <option value="">All Categories</option>
            <option value="Accessories">Accessories</option>
            <option value="Wearables">Wearables</option>
            <option value="Audio">Audio</option>
            <option value="Peripherals">Peripherals</option>
            <option value="Stands & Mounts">Stands & Mounts</option>
            <option value="Charging Accessories">Charging Accessories</option>
            <option value="Sports">Sports</option>
            <option value="Mobile">Mobile</option>
            <option value="Laptops">Laptops</option>
            <option value="Footwear">Footwear</option>
          </Form.Select>
        </Form.Group>






        {/* Sort Section */}
        <Form.Group>
          <Form.Label><FaSortAmountDown /> Sort By</Form.Label>
          <Form.Select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            style={{ borderRadius: "10px", border: "1px solid #b2ebf2" }}
          >
            <option value="">Select</option>
            <option value="name-asc">Name (A - Z)</option>
            <option value="name-desc">Name (Z - A)</option>
            <option value="price-asc">Price (Low - High)</option>
            <option value="price-desc">Price (High - Low)</option>
          </Form.Select>
        </Form.Group>

     


    
      </div>


      {/* Main Section */}
      <div style={{ flexGrow: 1, padding: "20px", background: "linear-gradient(to right, #e0f2f1, #ffffff)" }}>
      <div
      style={{
        flexGrow: 1,
        padding: "20px",
        background: "linear-gradient(to right, #e0f2f1, #ffffff)",
        position: "relative", // important
      }}
    >


      {/* Profile Avatar on the right */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
        }}
      >
        <a href="/account" style={{ textDecoration: "none" }}>
          <motion.img
            whileHover={{ scale: 1.1 }}
            src= {profileImage} // Replace with your user's image
            alt="Profile"
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #0288d1",
              cursor: "pointer",
            }}
          />
        </a>
      </div>

      {/* Centered Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#0288d1",
            margin: 0,
            marginBottom: "20px"
          }}
        >
          Product Marketplace
        </h1>
      </motion.div>
    </div>

      


    <div className="row">
  {filteredProducts.map((product) => {
    const isWishlisted = wishlist.some((item) => item.id === product.id);
    return (
      <div className="col-md-4 mb-4" key={product.id}>
        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            backgroundColor: "#fff",
            boxShadow: "0 8px 16px rgba(0,0,0,0.08)",
            transition: "transform 0.3s",
            position: "relative",
          }}
          className="hover-zoom"
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "240px",
              borderBottom: "1px solid #d0f0f5",
            }}
          />

          {/* Heart Icon */}
          <div
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              cursor: "pointer",
              zIndex: 1,
            }}
            onClick={() => handleToggleWishlist(product)}
          >
            <i
              className={`bi ${isWishlisted ? "bi-heart-fill" : "bi-heart"}`}
              style={{
                fontSize: "1.5rem",
                color: isWishlisted ? "#e91e63" : "#b0bec5",
                transition: "color 0.3s",
              }}
            ></i>
          </div>

          

          <div style={{ padding: "15px", textAlign: "center" }}>
            <h5 style={{ fontWeight: "700", color: "#0288d1" }}>{product.name}</h5>
            <p style={{ color: "#607d8b" }}>{product.description}</p>
            <p style={{ fontWeight: "bold", color: "#0097a7" }}>{product.price}</p>

            <div className="d-flex justify-content-center align-items-center mb-3">
              <Button variant="outline-info" size="sm" onClick={() => handleDecreaseQuantity(product.id)}>-</Button>
              <span className="px-3">{quantity[product.id] || 0}</span>
              <Button variant="outline-info" size="sm" onClick={() => handleIncreaseQuantity(product.id)}>+</Button>
            </div>

            <Button variant="info" onClick={() => handleAddToCart(product)} className="w-100 mb-2">
              Add to Cart
            </Button>
            <Button variant="outline-danger" onClick={() => handleRemoveFromCart(product.id)} className="w-100">
              Remove
            </Button>
          </div>
        </div>
      </div>
    );
  })}
</div>

        {/* Floating Cart Button */}
        <Button variant="primary" style={{
          position: "fixed", bottom: "20px", right: "20px", padding: "12px",
          borderRadius: "50%", fontSize: "1rem", boxShadow: "0 6px 14px rgba(0,0,0,0.2)"
        }} onClick={() => setShowModal(true)}>
          🛒 {cart.length}
        </Button>

{/* Checkout Modal */}
<Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
  <Modal.Header closeButton>
    <Modal.Title className="text-primary">
      <FaShoppingCart /> Checkout
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
  {cart.length === 0 ? (
    <p>Your cart is empty.</p>
  ) : (
    <>
      {cart.map((item) => (
        <div key={item.id} className="d-flex align-items-center justify-content-between border-bottom py-2">
          <div>
            <strong>{item.name}</strong> <br />
            <span className="text-muted">{item.price} x {quantity[item.id]}</span>
          </div>
          <div>
            <Button variant="outline-info" size="sm" onClick={() => handleDecreaseQuantity(item.id)}>-</Button>
            <span className="px-2">{quantity[item.id]}</span>
            <Button variant="outline-info" size="sm" onClick={() => handleIncreaseQuantity(item.id)}>+</Button>
            <Button
              variant="outline-danger"
              size="sm"
              className="ms-3"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              Remove
            </Button>
          </div>
        </div>
      ))}

      {/* Payment Method */}
      <div className="mt-4">
        <h5 className="text-secondary">Select Payment Method</h5>
        <Form.Check
          type="radio"
          label="Credit / Debit Card"
          name="payment"
          id="card"
          checked={paymentMethod === "card"}
          onChange={() => handlePaymentSelection("card")}
        />
        <Form.Check
          type="radio"
          label="Mobile Money"
          name="payment"
          id="momo"
          checked={paymentMethod === "momo"}
          onChange={() => handlePaymentSelection("momo")}
        />
      </div>

      {/* Payment Details */}
      {paymentMethod === "card" && (
        <div className="mt-4">
          <h6 className="text-info">Card Details</h6>
          <Form.Group className="mb-2">
            <Form.Label>Card Number</Form.Label>
            <Form.Control type="text" placeholder="1234 5678 9012 3456" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Cardholder Name</Form.Label>
            <Form.Control type="text" placeholder="John Doe" />
          </Form.Group>
          <div className="d-flex gap-2">
            <Form.Group className="mb-2 flex-fill">
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control type="text" placeholder="MM/YY" />
            </Form.Group>
            <Form.Group className="mb-2 flex-fill">
              <Form.Label>CVV</Form.Label>
              <Form.Control type="text" placeholder="123" />
            </Form.Group>
          </div>
        </div>
      )}

      {paymentMethod === "momo" && (
        <div className="mt-4">
          <h6 className="text-info">Mobile Money Details</h6>
          <Form.Group className="mb-2">
            <Form.Label>Network</Form.Label>
            <Form.Select defaultValue="">
              <option value="" disabled>Select network</option>
              <option>MTN</option>
              <option>Vodafone</option>
              <option>AirtelTigo</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>MoMo Number</Form.Label>
            <Form.Control type="text" placeholder="Enter mobile number" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Account Name</Form.Label>
            <Form.Control type="text" placeholder="Account holder's name" />
          </Form.Group>
        </div>
      )}

      {/* Total */}
      <div className="mt-4 text-end">
        <h5>
          Total: $
          {cart.reduce((acc, item) => {
            const price = parseFloat(item.price.replace("$", ""));
            return acc + price * (quantity[item.id] || 1);
          }, 0).toFixed(2)}
        </h5>
      </div>
    </>
  )}
</Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={() => setShowModal(false)}>
      Close
    </Button>
    {cart.length > 0 && (
      <Button
        variant="primary"
        onClick={() => {
          setShowModal(false);
          setCart([]);
          setQuantity({});
          setToastMessage("Order placed successfully!");
          setShowToast(true);
        }}
      >
        Confirm & Pay
      </Button>
    )}
  </Modal.Footer>
</Modal>


        {/* Toast Notifications */}
        {/* ToastContainer for showing notifications */}
<ToastContainer
  position="top-center"
  className="p-3"
  style={{
    zIndex: 1050, // Ensure the toast appears on top of other elements
  }}
>
  <Toast
    show={showToast}
    onClose={() => setShowToast(false)}
    delay={3000}
    autohide
    bg="primary"  // Subtle primary color for the background, not too harsh
    className="shadow-lg rounded-3 border-0"
    style={{
      maxWidth: '400px',  // Limit width to avoid it looking too large
      opacity: 0.95,  // Slight opacity to make it less harsh
      borderRadius: '12px',  // Rounded corners for a modern feel
    }}
  >
    <Toast.Header
      closeButton
      style={{
        backgroundColor: '#4C6A92',  // Muted blue background for the header
        color: 'white',  // White text for header for better contrast
        fontWeight: '600',  // Slightly bolder text for the header
      }}
    >
      <strong className="me-auto">Notification</strong>
      <small className="text-muted">Just now</small> 
    </Toast.Header>
    <Toast.Body
      style={{
        color: '#F7F7F7',  // Softer light text color for the body
        backgroundColor: '#1B2635',  // Darker background to maintain contrast
        padding: '12px 20px',  // Comfortable padding for body text
        fontSize: '16px',  // Slightly larger font for readability
        lineHeight: '1.5',  // Improved line height for better readability
      }}
    >
      {toastMessage}
    </Toast.Body>
  </Toast>
</ToastContainer>
      </div>
    </div>
  );
};

export default ProductsWithSidebar;


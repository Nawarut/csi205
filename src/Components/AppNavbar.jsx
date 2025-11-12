import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const AppNavbar = ({ products, carts }) => {
  return (
    <nav className="d-flex justify-content-center flex-wrap gap-3 mb-4">
      <Link to="/home">
        <Button variant="outline-primary" className="fw-bold text-nowrap w-auto">
          Home
        </Button>
      </Link>

      <Link to="/calculator">
        <Button variant="outline-success" className="fw-bold text-nowrap w-auto">
          Calculator
        </Button>
      </Link>

      <Link to="/animation">
        <Button variant="outline-warning" className="fw-bold text-nowrap w-auto">
          Animation
        </Button>
      </Link>

      <Link to="/components">
        <Button variant="outline-info" className="fw-bold text-nowrap w-auto">
          Components
        </Button>
      </Link>

      <Link to="/todos">
        <Button variant="outline-info" className="fw-bold text-nowrap w-auto">
          Todos
        </Button>
      </Link>

      <Link to="/products">
        <Button variant="outline-info" className="fw-bold text-nowrap w-auto">
          Products ({products?.length || 0})
        </Button>
      </Link>

      <Link to="/carts">
        <Button variant="outline-info" className="fw-bold text-nowrap w-auto">
          Carts ({carts?.length || 0})
        </Button>
      </Link>
    </nav>
  );
};

export default AppNavbar;

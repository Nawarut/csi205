import { Form, Table, Badge, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { fetchTodos } from "./Data/Todos";

const Todos = () => {
  const [todosRaw, setTodosRaw] = useState([]);
  const [todos, setTodos] = useState([]);
  const [onlyWaiting, setOnlyWaiting] = useState(false);
  const [itemPerPage, setItemPerPage] = useState(5);
  const [numPages, setNumPages] = useState(3);
  const [curPage, setCurPage] = useState(1);

  useEffect(() => {
    setTodosRaw(fetchTodos());
  }, []);

  useEffect(() => {
    setTodos(todosRaw);
  }, [todosRaw]);

  useEffect(() => {
    console.log(`onlyWait: ${onlyWaiting}`);
  }, [onlyWaiting]);

  return (
    <>
      <Form>
        <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-item-center">
          <Form.Check
            type="switch"
            id="custom-switch"
            // label="Show only waiting"
            onChange={(e) => setOnlyWaiting(e.target.checked)}
          />
          Show&nbsp;only&nbsp;<Button variant="warning">waitning&nbsp;<i class="bi bi-clock"></i></Button>
          </div>
          <Form.Select
            aria-label="Default select example"
            classname="w-25"
            onChange={(e) => setItemPerPage(e.target.value)}
          >
            <option value={5}>5 item per page</option>
            <option value={10}>10 item per page</option>
            <option value={50}>50 item per page</option>
            <option value={100}>100 item per page</option>
          </Form.Select>
        </div>
      </Form>

      <div>
        <Table striped bordered hover>
          <thead className="table-dark">
            <tr>
              <th className="text-center" style={{ width: "3rem" }}>
                ID
              </th>
              <th className="text-center">Title</th>
              <th className="text-end" style={{ width: "12rem" }}>
                Completed
              </th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => {
              return (
                <tr>
                  <td className="text-center">
                    <Badge bg="secondary">{todo.id}</Badge>
                  </td>
                  <td>{todo.title}</td>
                  <td className="text-end">
                    {todo.completed ? (
                      <Badge bg="success" className="fs-6">
                        done
                      </Badge>
                    ) : (
                      <Button variant="warning">
                        Waiting&nbsp;<i class="bi bi-clock"></i>
                      </Button>
                    )}
                    &nbsp;
                    <Button variant="danger">
                      <i class="bi bi-trash"></i>
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      <div className="text-center">
        <Button variant="outline-primary" onClick={() => setCurpage(1)} disabled={curPage === 1 }>First</Button>&nbsp;
        <Button variant="outline-primary" onClick={() => curPage > 1 && setCurPage((p) => p - 1)} disabled={curPage === 1 }>Previous</Button>&nbsp;
        <span>{curPage}&nbsp;/&nbsp;{numPages}</span>&nbsp;
        <Button variant="outline-primary"onClick={() => curPage < numPages && setCurPage((p) => p + 1)} disabled={curPage === numPages }>Next</Button>&nbsp;
        <Button variant="outline-primary" onClick={() => setCurPage(numPages)} disabled={curPage === numPages }>Last</Button>
      </div>
    </>
  );
};

export default Todos;

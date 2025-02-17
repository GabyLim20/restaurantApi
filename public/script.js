let app = document.getElementById('app');
const API_URL = "/api/order/"

document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('form3Example1c').value;
  const password = document.getElementById('form3Example4c').value;

  console.log(`${name}`);
  console.log(`${password}`);

  try {
    const response = await fetch('/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, password }),
    });

    const resultText = await response.text();
    console.log(resultText);

    if (response.ok) {
      alert('Success');
      document.getElementById('registerForm').reset();
    } else {
      alert(resultText || 'Error in the register');
    }
  } catch (error) {
    alert('Failed conection');
    console.error(error);
  }
});


document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('floatingInput').value;
  const password = document.getElementById('floatingPassword').value;

  console.log(`${name}`);
  console.log(`${password}`);

  try {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, password }),
    });

    const resultText = await response.text();
    console.log(resultText);

    if (response.ok) {
      alert('Login Success');
      document.getElementById('loginForm').reset();
      document.getElementById('name').textContent = `Bienvenido, ${name}!`;

    } else {
      alert(resultText || 'Error on login');
    }
  } catch (error) {
    alert('Error conection');
    console.error(error);
  }
});

document.getElementById('agregar-producto').addEventListener('click', function () {
  let productosContainer = document.getElementById('productos-container');
  let newProductoDiv = document.createElement('div');
  newProductoDiv.classList.add('mb-3', 'producto');
  newProductoDiv.innerHTML = `
      <label for="producto" class="form-label">Product</label>
      <select class="form-select" name="producto[]" required>
          <option value="" disabled selected>Seleccione un producto</option>
          <option value="Tacos">Tacos</option>
          <option value="Gorditas">Gorditas</option>
          <option value="Huevo">Huevo</option>
      </select>
  `;
  productosContainer.appendChild(newProductoDiv);

  let newCantidadDiv = document.createElement('div');
  newCantidadDiv.classList.add('mb-3', 'producto');
  newCantidadDiv.innerHTML = `
      <label for="cantidad" class="form-label">Cantidad</label>
      <input type="number" class="form-control" name="cantidad[]" required min="1" value="1">
  `;
  productosContainer.appendChild(newCantidadDiv);
});

document.getElementById('pedidoForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const items = [];
  const productoElements = document.getElementsByName('producto[]');
  const cantidadElements = document.getElementsByName('cantidad[]');
  for (let i = 0; i < productoElements.length; i++) {
    items.push({
      item: productoElements[i].value,
      amount: parseInt(cantidadElements[i].value),
    });
  }
  try {
    const response = await fetch('/api/order/addOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items }),
    });

    if (response.ok) {
      alert('PSuccess order');
      const productosContainer = document.getElementById('productos-container');
      const productos = productosContainer.getElementsByClassName('producto');
      while (productos.length > 2) {
        productosContainer.removeChild(productos[productos.length - 1]);
      }
      document.getElementById('pedidoForm').reset();
      fetchOrders()
    } else {
      const errorText = await response.text();
      alert('Error to send: ' + errorText);
    }
  } catch (error) {
    alert('Error conection');
    console.error(error);
  }
});


async function fetchOrders() {
  const res = await fetch(API_URL);
  const orders = await res.json();
  renderOrders(orders);
}

function renderOrders(orders) {
  const orderTable = document.getElementById('orderTable');
  orderTable.innerHTML = orders.map(order => {
    if (Array.isArray(order.items)) {
      return `
              <tr>
                  <td>${order.orderId}</td>
                  <td>${order.items.map(item => `${item.item} x ${item.amount}`).join(', ')}</td>
                  <td>
                      <button class="delete-btn btn-rojo" onclick="deleteOrder(${order.orderId})">Eliminar</button>
                  </td>
                  <td>
                      <button class="edit-btn btn-green" onclick="editOrder(${order.orderId})">Editar</button>
                  </td>
              </tr>
          `;
    } else {
      return `
              <tr>
                  <td colspan="3">Error en los datos del pedido</td>
              </tr>
          `;
    }
  }).join('');
}

async function deleteOrder(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  fetchOrders();
  console.log(id);
}


//Cargar los pedidos cuando cargue la pagina
fetchOrders()



const apiDocs = {
  baseEndpoint: "http://localhost:3000/api",
  endpoints: [
    {
      id: "register-user",
      title: "Register User",
      method: "POST",
      endpoint: "/users/register",
      description: "Register a new user.",
      protected: false,
      payloadType: "Request Body",
      fields: [
        { name: "usuario", type: "string", required: true },
        { name: "mail", type: "string", required: true },
        { name: "password", type: "string", required: true },
        { name: "repeatPassword", type: "string", required: true }
      ],
      requestExample: {
        usuario: "paulo",
        mail: "paulo@mail.com",
        password: "123456",
        repeatPassword: "123456"
      },
      responseExample: {
        success: true,
        message: "User registered successfully"
      }
    },

    {
      id: "login-user",
      title: "Login User",
      method: "POST",
      endpoint: "/auth/login",
      description: "Login user and return JWT token.",
      protected: false,
      payloadType: "Request Body",
      fields: [
        { name: "mail", type: "string", required: true },
        { name: "password", type: "string", required: true }
      ],
      requestExample: {
        mail: "paulo@mail.com",
        password: "123456"
      },
      responseExample: {
        success: true,
        token: "jwt-token-example"
      }
    },

    {
      id: "get-user-by-id",
      title: "Get User By ID",
      method: "GET",
      endpoint: "/users/:idUsuario",
      description: "Get user by ID.",
      protected: true,
      payloadType: "Params",
      fields: [
        { name: "idUsuario", type: "number", required: true }
      ],
      requestExample: {
        idUsuario: 1
      },
      responseExample: {
        success: true,
        message: "User fetched successfully",
        data: {
          idUsuario: 1,
          usuario: "paulo",
          mail: "paulo@mail.com"
        }
      }
    },

    {
      id: "delete-user",
      title: "Delete User",
      method: "DELETE",
      endpoint: "/users/:idUsuario",
      description: "Delete user.",
      protected: true,
      payloadType: "Params",
      fields: [
        { name: "idUsuario", type: "number", required: true }
      ],
      requestExample: {
        idUsuario: 1
      },
      responseExample: {
        success: true,
        message: "User deleted successfully"
      }
    },

    {
      id: "request-reset",
      title: "Request Reset Password",
      method: "POST",
      endpoint: "/auth/request-reset",
      description: "Request password reset link.",
      protected: false,
      payloadType: "Request Body",
      fields: [
        { name: "mail", type: "string", required: true }
      ],
      requestExample: {
        mail: "paulo@mail.com"
      },
      responseExample: {
        success: true,
        message: "Password reset link sent"
      }
    },

    {
      id: "reset-password",
      title: "Reset Password",
      method: "POST",
      endpoint: "/auth/reset-password",
      description: "Reset user password.",
      protected: false,
      payloadType: "Request Body",
      fields: [
        { name: "idUsuario", type: "number", required: true },
        { name: "token", type: "string", required: true },
        { name: "newPassword", type: "string", required: true },
        { name: "repeatPassword", type: "string", required: true }
      ],
      requestExample: {
        idUsuario: 1,
        token: "reset-token-example",
        newPassword: "new-pass-123",
        repeatPassword: "new-pass-123"
      },
      responseExample: {
        success: true,
        message: "Password updated successfully"
      }
    },

    {
      id: "create-product",
      title: "Create Product",
      method: "POST",
      endpoint: "/products",
      description: "Create product.",
      protected: true,
      payloadType: "Request Body",
      fields: [
        { name: "nombreProducto", type: "string", required: true },
        { name: "descripcion", type: "string", required: true }
      ],
      requestExample: {
        nombreProducto: "Alfajor Chocolate",
        descripcion: "Alfajor relleno de dulce de leche"
      },
      responseExample: {
        success: true,
        message: "Product created successfully"
      }
    },

    {
      id: "delete-product",
      title: "Delete Product",
      method: "DELETE",
      endpoint: "/products/:idProducto",
      description: "Delete product.",
      protected: true,
      payloadType: "Params",
      fields: [
        { name: "idProducto", type: "number", required: true }
      ],
      requestExample: {
        idProducto: 2
      },
      responseExample: {
        success: true,
        message: "Product deleted successfully"
      }
    },

    {
      id: "create-insumo",
      title: "Create Insumo",
      method: "POST",
      endpoint: "/insumos",
      description: "Create insumo.",
      protected: true,
      payloadType: "Request Body",
      fields: [
        { name: "nombreInsumo", type: "string", required: true },
        { name: "descripcion", type: "string", required: true }
      ],
      requestExample: {
        nombreInsumo: "Caja",
        descripcion: "Caja de cartón mediana"
      },
      responseExample: {
        success: true,
        message: "Insumo created successfully"
      }
    },

    {
      id: "delete-insumo",
      title: "Delete Insumo",
      method: "DELETE",
      endpoint: "/insumos/:idInsumo",
      description: "Delete insumo.",
      protected: true,
      payloadType: "Params",
      fields: [
        { name: "idInsumo", type: "number", required: true }
      ],
      requestExample: {
        idInsumo: 3
      },
      responseExample: {
        success: true,
        message: "Insumo deleted successfully"
      }
    },

    {
      id: "create-client",
      title: "Create Client",
      method: "POST",
      endpoint: "/clients",
      description: "Create client.",
      protected: true,
      payloadType: "Request Body",
      fields: [
        { name: "nombreCliente", type: "string", required: true },
        { name: "direccion", type: "string", required: true },
        { name: "telefono", type: "string", required: true },
        { name: "mail", type: "string", required: true }
      ],
      requestExample: {
        nombreCliente: "Juan Perez",
        direccion: "Montevideo 123",
        telefono: "099123456",
        mail: "juan@mail.com"
      },
      responseExample: {
        success: true,
        message: "Client created successfully"
      }
    },

    {
      id: "delete-client",
      title: "Delete Client",
      method: "DELETE",
      endpoint: "/clients/:idCliente",
      description: "Delete client.",
      protected: true,
      payloadType: "Params",
      fields: [
        { name: "idCliente", type: "number", required: true }
      ],
      requestExample: {
        idCliente: 4
      },
      responseExample: {
        success: true,
        message: "Client deleted successfully"
      }
    },

    {
      id: "create-sale",
      title: "Create Sale",
      method: "POST",
      endpoint: "/sales",
      description: "Create sale.",
      protected: true,
      payloadType: "Request Body",
      fields: [
        { name: "idCliente", type: "number", required: true },
        { name: "idProducto", type: "number", required: true },
        { name: "cantidad", type: "number", required: true },
        { name: "fecha", type: "string", required: true }
      ],
      requestExample: {
        idCliente: 1,
        idProducto: 2,
        cantidad: 3,
        fecha: "2026-03-19"
      },
      responseExample: {
        success: true,
        message: "Sale created successfully"
      }
    },

    {
      id: "delete-sale",
      title: "Delete Sale",
      method: "DELETE",
      endpoint: "/sales/:idVenta",
      description: "Delete sale.",
      protected: true,
      payloadType: "Params",
      fields: [
        { name: "idVenta", type: "number", required: true }
      ],
      requestExample: {
        idVenta: 5
      },
      responseExample: {
        success: true,
        message: "Sale deleted successfully"
      }
    }
  ]
};

function formatJSON(obj) {
  return JSON.stringify(obj, null, 2);
}

function createSidebarMenu() {
  const sidebarNav = document.getElementById("sidebar-nav");

  sidebarNav.innerHTML = apiDocs.endpoints
    .map((item, index) => {
      return `
        <button class="sidebar-item ${index === 0 ? "active" : ""}" data-id="${item.id}">
          <div class="sidebar-item-header">
            <span class="method-badge method-${item.method}">${item.method}</span>
            <p class="sidebar-item-title">${item.title}</p>
          </div>
          <div class="sidebar-item-endpoint">${item.endpoint}</div>
        </button>
      `;
    })
    .join("");
}

function validateRenderedEndpoints() {
  const totalDefinedEndpoints = apiDocs.endpoints.length;
  const totalRenderedItems = document.querySelectorAll(".sidebar-item").length;

  if (totalDefinedEndpoints !== totalRenderedItems) {
    console.error("Mismatch between defined endpoints and rendered endpoints");
  }
}

function createFieldRows(fields) {
  return fields
    .map((field) => {
      return `
        <tr>
          <td>${field.name}</td>
          <td>${field.type}</td>
          <td>
            <span class="badge ${field.required ? "bg-danger" : "bg-secondary"}">
              ${field.required ? "Required" : "Optional"}
            </span>
          </td>
        </tr>
      `;
    })
    .join("");
}

function createHeadersSection(selectedMethod) {
  const headers = selectedMethod.protected
    ? ["Authorization: Bearer <token>"]
    : [];

  const headersContent = headers.length
    ? headers.map((header) => `<li><code>${header}</code></li>`).join("")
    : `<p class="mb-0 text-muted">No required headers.</p>`;

  return `
    <h5>Headers</h5>
    <div class="info-box mb-4">
      ${headers.length ? `<ul class="mb-0">${headersContent}</ul>` : headersContent}
    </div>
  `;
}

function renderMethodDetail(endpointId) {
  const selectedMethod = apiDocs.endpoints.find((item) => item.id === endpointId);
  const methodDetail = document.getElementById("method-detail");

  if (!selectedMethod) {
    methodDetail.innerHTML = `<p class="mb-0 text-muted">Endpoint not found.</p>`;
    return;
  }

  const payloadTitle = selectedMethod.payloadType || "Request Fields";

  methodDetail.innerHTML = `
    <h3>${selectedMethod.title}</h3>
    <p>${selectedMethod.description}</p>

    <p><strong>Method:</strong> ${selectedMethod.method}</p>
    <p><strong>Endpoint:</strong> ${apiDocs.baseEndpoint}${selectedMethod.endpoint}</p>

    ${createHeadersSection(selectedMethod)}

    <h5>${payloadTitle}</h5>
    <table class="table">
      <thead>
        <tr>
          <th>Field</th>
          <th>Type</th>
          <th>Required</th>
        </tr>
      </thead>
      <tbody>
        ${createFieldRows(selectedMethod.fields)}
      </tbody>
    </table>

    <h5>Request Example</h5>
    <pre><code>${formatJSON(selectedMethod.requestExample)}</code></pre>

    <h5>Response Example</h5>
    <pre><code>${formatJSON(selectedMethod.responseExample)}</code></pre>
  `;
}

function setupSidebarEvents() {
  const buttons = document.querySelectorAll(".sidebar-item");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      renderMethodDetail(button.getAttribute("data-id"));
    });
  });
}

function initializeApp() {
  document.getElementById("base-endpoint-sidebar").textContent =
    apiDocs.baseEndpoint;

  createSidebarMenu();
  validateRenderedEndpoints();
  renderMethodDetail(apiDocs.endpoints[0].id);
  setupSidebarEvents();
}

document.addEventListener("DOMContentLoaded", initializeApp);

const apiDocs = {
  baseEndpoint: "http://monarca-fullstack-zx2j51-513751-157-254-174-74.traefik.me",
  endpoints: [
    {
      id: "register-user",
      title: "Register User",
      sdkMethod: "registerUser",
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
      validations: [
        "Email valido en mail",
        "password y repeatPassword deben coincidir",
        "usuario y mail deben ser unicos"
      ],
      requestExample: {
        usuario: "string",
        mail: "string",
        password: "string",
        repeatPassword: "string"
      },
      responseExample: {
        success: true,
        message: "User registered successfully",
        data: {
          idUsuario: 1,
          usuario: "string",
          mail: "string"
        }
      }
    },
    {
      id: "login-user",
      title: "Login User",
      sdkMethod: "login",
      method: "POST",
      endpoint: "/auth/login",
      description: "Login user and return JWT token.",
      protected: false,
      payloadType: "Request Body",
      fields: [
        { name: "mail", type: "string", required: true },
        { name: "password", type: "string", required: true }
      ],
      validations: ["Email valido en mail"],
      requestExample: {
        mail: "string",
        password: "string"
      },
      responseExample: {
        success: true,
        message: "Login successful",
        data: {
          token: "jwt",
          user: {
            idUsuario: 1,
            usuario: "string",
            mail: "string"
          }
        }
      }
    },
    {
      id: "request-reset",
      title: "Request Password Reset",
      sdkMethod: "requestPasswordReset",
      method: "POST",
      endpoint: "/auth/request-reset",
      description: "Request password reset link.",
      protected: false,
      payloadType: "Request Body",
      fields: [{ name: "mail", type: "string", required: true }],
      validations: ["Email valido en mail"],
      requestExample: {
        mail: "string"
      },
      responseExample: {
        success: true,
        message: "Password reset token generated",
        data: {
          idUsuario: 1
        }
      }
    },
    {
      id: "reset-password",
      title: "Reset Password",
      sdkMethod: "resetPassword",
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
      validations: [
        "idUsuario debe ser entero positivo",
        "newPassword y repeatPassword deben coincidir"
      ],
      requestExample: {
        idUsuario: 1,
        token: "string",
        newPassword: "string",
        repeatPassword: "string"
      },
      responseExample: {
        success: true,
        message: "Password reset successfully",
        data: {
          idUsuario: 1,
          usuario: "string",
          mail: "string"
        }
      }
    },
    {
      id: "get-user-by-id",
      title: "Get User By ID",
      sdkMethod: "getUserById",
      method: "GET",
      endpoint: "/users/:idUsuario",
      description: "Get user by ID.",
      protected: true,
      payloadType: "Params",
      fields: [{ name: "idUsuario", type: "number", required: true }],
      validations: ["idUsuario debe ser entero positivo"],
      requestExample: {
        idUsuario: 1
      },
      responseExample: {
        success: true,
        message: "User fetched successfully",
        data: {
          idUsuario: 1,
          usuario: "string",
          mail: "string"
        }
      }
    },
    {
      id: "delete-user",
      title: "Delete User",
      sdkMethod: "deleteUser",
      method: "DELETE",
      endpoint: "/users/:idUsuario",
      description: "Delete user.",
      protected: true,
      payloadType: "Params",
      fields: [{ name: "idUsuario", type: "number", required: true }],
      validations: ["idUsuario debe ser entero positivo"],
      requestExample: {
        idUsuario: 1
      },
      responseExample: {
        success: true,
        message: "User deleted successfully",
        data: {
          idUsuario: 1,
          usuario: "string",
          mail: "string"
        }
      }
    },
    {
      id: "create-product",
      title: "Create Product",
      sdkMethod: "createProduct",
      method: "POST",
      endpoint: "/products",
      description: "Create product.",
      protected: true,
      payloadType: "Request Body",
      fields: [
        { name: "nombreProducto", type: "string", required: true },
        { name: "descripcion", type: "string", required: true }
      ],
      validations: [],
      requestExample: {
        nombreProducto: "string",
        descripcion: "string"
      },
      responseExample: {
        success: true,
        message: "Product created successfully",
        data: {
          idProducto: 1,
          nombreProducto: "string",
          descripcion: "string"
        }
      }
    },
    {
      id: "delete-product",
      title: "Delete Product",
      sdkMethod: "deleteProduct",
      method: "DELETE",
      endpoint: "/products/:idProducto",
      description: "Delete product.",
      protected: true,
      payloadType: "Params",
      fields: [{ name: "idProducto", type: "number", required: true }],
      validations: ["idProducto debe ser entero positivo"],
      requestExample: {
        idProducto: 1
      },
      responseExample: {
        success: true,
        message: "Product deleted successfully",
        data: {
          idProducto: 1,
          nombreProducto: "string",
          descripcion: "string"
        }
      }
    },
    {
      id: "create-insumo",
      title: "Create Insumo",
      sdkMethod: "createInsumo",
      method: "POST",
      endpoint: "/insumos",
      description: "Create insumo.",
      protected: true,
      payloadType: "Request Body",
      fields: [
        { name: "nombreInsumo", type: "string", required: true },
        { name: "descripcion", type: "string", required: true }
      ],
      validations: [],
      requestExample: {
        nombreInsumo: "string",
        descripcion: "string"
      },
      responseExample: {
        success: true,
        message: "Insumo created successfully",
        data: {
          idInsumo: 1,
          nombreInsumo: "string",
          descripcion: "string"
        }
      }
    },
    {
      id: "delete-insumo",
      title: "Delete Insumo",
      sdkMethod: "deleteInsumo",
      method: "DELETE",
      endpoint: "/insumos/:idInsumo",
      description: "Delete insumo.",
      protected: true,
      payloadType: "Params",
      fields: [{ name: "idInsumo", type: "number", required: true }],
      validations: ["idInsumo debe ser entero positivo"],
      requestExample: {
        idInsumo: 1
      },
      responseExample: {
        success: true,
        message: "Insumo deleted successfully",
        data: {
          idInsumo: 1,
          nombreInsumo: "string",
          descripcion: "string"
        }
      }
    },
    {
      id: "create-client",
      title: "Create Client",
      sdkMethod: "createClient",
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
      validations: ["Email valido en mail"],
      requestExample: {
        nombreCliente: "string",
        direccion: "string",
        telefono: "string",
        mail: "string"
      },
      responseExample: {
        success: true,
        message: "Client created successfully",
        data: {
          idCliente: 1,
          nombreCliente: "string",
          direccion: "string",
          telefono: "string",
          mail: "string"
        }
      }
    },
    {
      id: "delete-client",
      title: "Delete Client",
      sdkMethod: "deleteClient",
      method: "DELETE",
      endpoint: "/clients/:idCliente",
      description: "Delete client.",
      protected: true,
      payloadType: "Params",
      fields: [{ name: "idCliente", type: "number", required: true }],
      validations: ["idCliente debe ser entero positivo"],
      requestExample: {
        idCliente: 1
      },
      responseExample: {
        success: true,
        message: "Client deleted successfully",
        data: {
          idCliente: 1,
          nombreCliente: "string",
          direccion: "string",
          telefono: "string",
          mail: "string"
        }
      }
    },
    {
      id: "create-sale",
      title: "Create Sale",
      sdkMethod: "createSale",
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
      validations: [
        "idCliente e idProducto deben ser enteros positivos",
        "cantidad debe ser mayor a 0",
        "fecha debe ser una fecha valida"
      ],
      requestExample: {
        idCliente: 1,
        idProducto: 1,
        cantidad: 3,
        fecha: "2026-03-19"
      },
      responseExample: {
        success: true,
        message: "Sale created successfully",
        data: {
          idVenta: 1,
          idCliente: 1,
          idProducto: 1,
          cantidad: 3,
          fecha: "2026-03-19T10:30:00Z"
        }
      }
    },
    {
      id: "delete-sale",
      title: "Delete Sale",
      sdkMethod: "deleteSale",
      method: "DELETE",
      endpoint: "/sales/:idVenta",
      description: "Delete sale.",
      protected: true,
      payloadType: "Params",
      fields: [{ name: "idVenta", type: "number", required: true }],
      validations: ["idVenta debe ser entero positivo"],
      requestExample: {
        idVenta: 1
      },
      responseExample: {
        success: true,
        message: "Sale deleted successfully",
        data: {
          idVenta: 1,
          idCliente: 1,
          idProducto: 1,
          cantidad: 3,
          fecha: "2026-03-19T10:30:00Z"
        }
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

function createValidationsSection(selectedMethod) {
  const validations = selectedMethod.validations || [];
  const validationsContent = validations.length
    ? validations.map((rule) => `<li>${rule}</li>`).join("")
    : `<p class="mb-0 text-muted">No additional validations documented.</p>`;

  return `
    <h5>Validations</h5>
    <div class="info-box mb-4">
      ${validations.length ? `<ul class="mb-0">${validationsContent}</ul>` : validationsContent}
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
    <p><strong>Access:</strong> ${selectedMethod.protected ? "Protected (Bearer token required)" : "Public"}</p>
    <p><strong>SDK Method:</strong> ${selectedMethod.sdkMethod}</p>

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

    ${createValidationsSection(selectedMethod)}

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
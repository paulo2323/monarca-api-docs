const API_BASE_URL_RAW =
  (typeof process !== "undefined" &&
    process.env &&
    process.env.API_BASE_URL) ||
  (typeof window !== "undefined" && window.API_BASE_URL) ||
  "api.alfajoresmonarca-backoffice.com";

function normalizeBaseUrl(url) {
  if (!url) {
    return "http://api.alfajoresmonarca-backoffice.com";
  }

  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  return `http://${url}`;
}

const apiDocs = {
  baseEndpoint: normalizeBaseUrl(API_BASE_URL_RAW),
  endpoints: [
    {
      id: "register-user",
      title: "Register User",
      sdkMethod: "registerUser",
      method: "POST",
      endpoint: "/users/register",
      description: "Creates a new user.",
      protected: false,
      payloadType: "Body",
      fields: [
        { name: "usuario", type: "string", required: true },
        { name: "mail", type: "string-email", required: true },
        { name: "password", type: "string", required: true },
        { name: "repeatPassword", type: "string", required: true }
      ],
      validations: [
        "mail must have valid email format",
        "password and repeatPassword must match",
        "usuario must be unique",
        "mail must be unique",
        "password is hashed and never returned"
      ],
      requestExample: {
        usuario: "test1",
        mail: "test1@mail.com",
        password: "123456",
        repeatPassword: "123456"
      },
      responseExample: {
        success: true,
        message: "User registered successfully",
        data: {
          idUsuario: 1,
          usuario: "test1",
          mail: "test1@mail.com"
        }
      }
    },
    {
      id: "list-users",
      title: "List Users",
      sdkMethod: "listUsers",
      method: "GET",
      endpoint: "/users",
      description: "Returns all users.",
      protected: true,
      payloadType: "Query Params",
      fields: [],
      validations: [],
      requestExample: {},
      responseExample: {
        success: true,
        message: "Users fetched successfully",
        data: [
          {
            idUsuario: 1,
            usuario: "test1",
            mail: "test1@mail.com"
          }
        ]
      }
    },
    {
      id: "get-user-by-id",
      title: "Get User By Id",
      sdkMethod: "getUserById",
      method: "GET",
      endpoint: "/users/:idUsuario",
      description: "Returns one user by id.",
      protected: true,
      payloadType: "Path Params",
      fields: [{ name: "idUsuario", type: "int", required: true }],
      validations: ["idUsuario must be a positive integer"],
      requestExample: {
        idUsuario: 1
      },
      responseExample: {
        success: true,
        message: "User fetched successfully",
        data: {
          idUsuario: 1,
          usuario: "test1",
          mail: "test1@mail.com"
        }
      }
    },
    {
      id: "delete-user",
      title: "Delete User",
      sdkMethod: "deleteUser",
      method: "DELETE",
      endpoint: "/users/:idUsuario",
      description: "Deletes one user by id.",
      protected: true,
      payloadType: "Path Params",
      fields: [{ name: "idUsuario", type: "int", required: true }],
      validations: ["idUsuario must be a positive integer"],
      requestExample: {
        idUsuario: 1
      },
      responseExample: {
        success: true,
        message: "User deleted successfully",
        data: {
          idUsuario: 1,
          usuario: "test1",
          mail: "test1@mail.com"
        }
      }
    },

    {
      id: "login-user",
      title: "Login",
      sdkMethod: "login",
      method: "POST",
      endpoint: "/auth/login",
      description: "Logs in a user and returns JWT token.",
      protected: false,
      payloadType: "Body",
      fields: [
        { name: "mail", type: "string-email", required: true },
        { name: "password", type: "string", required: true }
      ],
      validations: [],
      requestExample: {
        mail: "test1@mail.com",
        password: "123456"
      },
      responseExample: {
        success: true,
        message: "Login successful",
        data: {
          token: "jwt_token_here",
          user: {
            idUsuario: 1,
            usuario: "test1",
            mail: "test1@mail.com"
          }
        }
      }
    },
    {
      id: "request-reset",
      title: "Request Reset Token",
      sdkMethod: "requestPasswordReset",
      method: "POST",
      endpoint: "/auth/request-reset",
      description: "Generates reset token (simulated email flow).",
      protected: false,
      payloadType: "Body",
      fields: [{ name: "mail", type: "string-email", required: true }],
      validations: ["mail must have valid email format"],
      requestExample: {
        mail: "test1@mail.com"
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
      description: "Resets user password using token.",
      protected: false,
      payloadType: "Body",
      fields: [
        { name: "idUsuario", type: "number", required: true },
        { name: "token", type: "string", required: true },
        { name: "newPassword", type: "string", required: true },
        { name: "repeatPassword", type: "string", required: true }
      ],
      validations: [
        "passwords must match",
        "token must be valid",
        "new password is hashed before saving"
      ],
      requestExample: {
        idUsuario: 1,
        token: "token_here",
        newPassword: "new123456",
        repeatPassword: "new123456"
      },
      responseExample: {
        success: true,
        message: "Password reset successfully",
        data: {
          idUsuario: 1,
          usuario: "test1",
          mail: "test1@mail.com"
        }
      }
    },

    {
      id: "create-product",
      title: "Create Product",
      sdkMethod: "createProduct",
      method: "POST",
      endpoint: "/products",
      description: "Creates a product.",
      protected: true,
      payloadType: "Body",
      fields: [
        { name: "nombreProducto", type: "string", required: true },
        { name: "descripcion", type: "string", required: true }
      ],
      validations: [],
      requestExample: {
        nombreProducto: "Alfajor",
        descripcion: "Caja x12"
      },
      responseExample: {
        success: true,
        message: "Product created successfully",
        data: {
          idProducto: 1,
          nombreProducto: "Alfajor",
          descripcion: "Caja x12"
        }
      }
    },
    {
      id: "list-products",
      title: "List Products",
      sdkMethod: "listProducts",
      method: "GET",
      endpoint: "/products",
      description: "Returns all products.",
      protected: true,
      payloadType: "Query Params",
      fields: [],
      validations: [],
      requestExample: {},
      responseExample: {
        success: true,
        message: "Products retrieved successfully",
        data: [
          {
            idProducto: 1,
            nombreProducto: "Alfajor",
            descripcion: "Caja x12"
          }
        ]
      }
    },
    {
      id: "list-products-stock",
      title: "List Product Stock",
      sdkMethod: "listProductStock",
      method: "GET",
      endpoint: "/products/stock",
      description: "Returns stock for all products.",
      protected: true,
      payloadType: "Query Params",
      fields: [],
      validations: [
        "Data source: stockProducto",
        "Returns idProducto, nombreProducto, descripcion, cantidad"
      ],
      requestExample: {},
      responseExample: {
        success: true,
        message: "Product stock retrieved successfully",
        data: [
          {
            idProducto: 1,
            nombreProducto: "Alfajor",
            descripcion: "Caja x12",
            cantidad: 12
          }
        ]
      }
    },
    {
      id: "get-product-stock-by-id",
      title: "Get Product Stock By Id",
      sdkMethod: "getProductStockById",
      method: "GET",
      endpoint: "/products/stock/:idProducto",
      description: "Returns stock for one product.",
      protected: true,
      payloadType: "Path Params",
      fields: [{ name: "idProducto", type: "int", required: true }],
      validations: ["idProducto must be a positive integer"],
      requestExample: {
        idProducto: 1
      },
      responseExample: {
        success: true,
        message: "Product stock retrieved successfully",
        data: {
          idProducto: 1,
          nombreProducto: "Alfajor",
          descripcion: "Caja x12",
          cantidad: 12
        }
      }
    },
    {
      id: "get-product-by-id",
      title: "Get Product By Id",
      sdkMethod: "getProductById",
      method: "GET",
      endpoint: "/products/:idProducto",
      description: "Returns one product by id.",
      protected: true,
      payloadType: "Path Params",
      fields: [{ name: "idProducto", type: "int", required: true }],
      validations: ["idProducto must be a positive integer"],
      requestExample: {
        idProducto: 1
      },
      responseExample: {
        success: true,
        message: "Product retrieved successfully",
        data: {
          idProducto: 1,
          nombreProducto: "Alfajor",
          descripcion: "Caja x12"
        }
      }
    },
    {
      id: "delete-product",
      title: "Delete Product",
      sdkMethod: "deleteProduct",
      method: "DELETE",
      endpoint: "/products/:idProducto",
      description: "Deletes one product by id.",
      protected: true,
      payloadType: "Path Params",
      fields: [{ name: "idProducto", type: "int", required: true }],
      validations: ["idProducto must be a positive integer"],
      requestExample: {
        idProducto: 1
      },
      responseExample: {
        success: true,
        message: "Product deleted successfully",
        data: {
          idProducto: 1,
          nombreProducto: "Alfajor",
          descripcion: "Caja x12"
        }
      }
    },

    {
      id: "create-insumo",
      title: "Create Insumo",
      sdkMethod: "createInsumo",
      method: "POST",
      endpoint: "/insumos",
      description: "Creates an insumo.",
      protected: true,
      payloadType: "Body",
      fields: [
        { name: "nombreInsumo", type: "string", required: true },
        { name: "descripcion", type: "string", required: true }
      ],
      validations: [],
      requestExample: {
        nombreInsumo: "Dulce de leche",
        descripcion: "Balde 5kg"
      },
      responseExample: {
        success: true,
        message: "Insumo created successfully",
        data: {
          idInsumo: 1,
          nombreInsumo: "Dulce de leche",
          descripcion: "Balde 5kg"
        }
      }
    },
    {
      id: "list-insumos",
      title: "List Insumos",
      sdkMethod: "listInsumos",
      method: "GET",
      endpoint: "/insumos",
      description: "Returns all insumos.",
      protected: true,
      payloadType: "Query Params",
      fields: [],
      validations: [],
      requestExample: {},
      responseExample: {
        success: true,
        message: "Insumos retrieved successfully",
        data: [
          {
            idInsumo: 1,
            nombreInsumo: "Dulce de leche",
            descripcion: "Balde 5kg"
          }
        ]
      }
    },
    {
      id: "get-insumo-by-id",
      title: "Get Insumo By Id",
      sdkMethod: "getInsumoById",
      method: "GET",
      endpoint: "/insumos/:idInsumo",
      description: "Returns one insumo by id.",
      protected: true,
      payloadType: "Path Params",
      fields: [{ name: "idInsumo", type: "int", required: true }],
      validations: ["idInsumo must be a positive integer"],
      requestExample: {
        idInsumo: 1
      },
      responseExample: {
        success: true,
        message: "Insumo retrieved successfully",
        data: {
          idInsumo: 1,
          nombreInsumo: "Dulce de leche",
          descripcion: "Balde 5kg"
        }
      }
    },
    {
      id: "delete-insumo",
      title: "Delete Insumo",
      sdkMethod: "deleteInsumo",
      method: "DELETE",
      endpoint: "/insumos/:idInsumo",
      description: "Deletes one insumo by id.",
      protected: true,
      payloadType: "Path Params",
      fields: [{ name: "idInsumo", type: "int", required: true }],
      validations: ["idInsumo must be a positive integer"],
      requestExample: {
        idInsumo: 1
      },
      responseExample: {
        success: true,
        message: "Insumo deleted successfully",
        data: {
          idInsumo: 1,
          nombreInsumo: "Dulce de leche",
          descripcion: "Balde 5kg"
        }
      }
    },

    {
      id: "create-client",
      title: "Create Client",
      sdkMethod: "createClient",
      method: "POST",
      endpoint: "/clients",
      description: "Creates a client.",
      protected: true,
      payloadType: "Body",
      fields: [
        { name: "nombreCliente", type: "string", required: true },
        { name: "calle1", type: "string", required: true },
        { name: "calle2", type: "string", required: false },
        { name: "numeroPuerta", type: "string", required: true },
        { name: "codigoPostal", type: "string", required: false },
        { name: "ciudad", type: "string", required: true },
        { name: "telefono", type: "string", required: true },
        { name: "mail", type: "string-email", required: false }
      ],
      validations: [
        "Required: nombreCliente, calle1, numeroPuerta, ciudad, telefono",
        "Optional: calle2, codigoPostal, mail",
        "if mail is present, must have valid format"
      ],
      requestExample: {
        nombreCliente: "Cliente Test",
        calle1: "18 de Julio",
        calle2: "Yaguaron",
        numeroPuerta: "1234",
        codigoPostal: "11200",
        ciudad: "Montevideo",
        telefono: "099123456",
        mail: "cliente@test.com"
      },
      responseExample: {
        success: true,
        message: "Client created successfully",
        data: {
          idCliente: 1,
          nombreCliente: "Cliente Test",
          calle1: "18 de Julio",
          calle2: "Yaguaron",
          numeroPuerta: "1234",
          codigoPostal: "11200",
          ciudad: "Montevideo",
          telefono: "099123456",
          mail: "cliente@test.com"
        }
      }
    },
    {
      id: "list-clients",
      title: "List Clients",
      sdkMethod: "listClients",
      method: "GET",
      endpoint: "/clients",
      description: "Returns all clients.",
      protected: true,
      payloadType: "Query Params",
      fields: [],
      validations: [],
      requestExample: {},
      responseExample: {
        success: true,
        message: "Clients retrieved successfully",
        data: [
          {
            idCliente: 1,
            nombreCliente: "Cliente Test",
            calle1: "18 de Julio",
            calle2: "Yaguaron",
            numeroPuerta: "1234",
            codigoPostal: "11200",
            ciudad: "Montevideo",
            telefono: "099123456",
            mail: "cliente@test.com"
          }
        ]
      }
    },
    {
      id: "get-client-by-id",
      title: "Get Client By Id",
      sdkMethod: "getClientById",
      method: "GET",
      endpoint: "/clients/:idCliente",
      description: "Returns one client by id.",
      protected: true,
      payloadType: "Path Params",
      fields: [{ name: "idCliente", type: "int", required: true }],
      validations: ["idCliente must be a positive integer"],
      requestExample: {
        idCliente: 1
      },
      responseExample: {
        success: true,
        message: "Client retrieved successfully",
        data: {
          idCliente: 1,
          nombreCliente: "Cliente Test",
          calle1: "18 de Julio",
          calle2: "Yaguaron",
          numeroPuerta: "1234",
          codigoPostal: "11200",
          ciudad: "Montevideo",
          telefono: "099123456",
          mail: "cliente@test.com"
        }
      }
    },
    {
      id: "delete-client",
      title: "Delete Client",
      sdkMethod: "deleteClient",
      method: "DELETE",
      endpoint: "/clients/:idCliente",
      description: "Deletes one client by id.",
      protected: true,
      payloadType: "Path Params",
      fields: [{ name: "idCliente", type: "int", required: true }],
      validations: ["idCliente must be a positive integer"],
      requestExample: {
        idCliente: 1
      },
      responseExample: {
        success: true,
        message: "Client deleted successfully",
        data: {
          idCliente: 1,
          nombreCliente: "Cliente Test",
          calle1: "18 de Julio",
          calle2: "Yaguaron",
          numeroPuerta: "1234",
          codigoPostal: "11200",
          ciudad: "Montevideo",
          telefono: "099123456",
          mail: "cliente@test.com"
        }
      }
    },

    {
      id: "create-sale",
      title: "Create Sale",
      sdkMethod: "createSale",
      method: "POST",
      endpoint: "/sales",
      description: "Creates a sale.",
      protected: true,
      payloadType: "Body",
      fields: [
        { name: "idCliente", type: "number", required: true },
        { name: "idProducto", type: "number", required: true },
        { name: "cantidad", type: "number", required: true },
        { name: "fecha", type: "YYYY-MM-DD", required: true }
      ],
      validations: [
        "cantidad must be > 0",
        "client must exist",
        "product must exist",
        "product must have enough stock",
        "stockProducto is decreased on successful sale"
      ],
      requestExample: {
        idCliente: 1,
        idProducto: 1,
        cantidad: 2,
        fecha: "2026-03-20"
      },
      responseExample: {
        success: true,
        message: "Sale created successfully",
        data: {
          idVenta: 1,
          idCliente: 1,
          idProducto: 1,
          cantidad: 2,
          fecha: "2026-03-20"
        }
      },
      errorExample: {
        success: false,
        message: "Insufficient stock. Available: 3"
      }
    },
    {
      id: "list-sales",
      title: "List Sales",
      sdkMethod: "listSales",
      method: "GET",
      endpoint: "/sales",
      description: "Returns sales list with optional filters.",
      protected: true,
      payloadType: "Query Params",
      fields: [
        { name: "idCliente", type: "number", required: false },
        { name: "idProducto", type: "number", required: false },
        { name: "ciudad", type: "string", required: false },
        { name: "cantidadMin", type: "number", required: false },
        { name: "cantidadMax", type: "number", required: false },
        { name: "fechaDesde", type: "YYYY-MM-DD", required: false },
        { name: "fechaHasta", type: "YYYY-MM-DD", required: false }
      ],
      validations: [],
      requestExample: {
        idCliente: 1,
        ciudad: "Montevideo",
        fechaDesde: "2026-03-01",
        fechaHasta: "2026-03-31"
      },
      responseExample: {
        success: true,
        message: "Sales fetched successfully",
        data: [
          {
            idVenta: 1,
            idCliente: 1,
            nombreCliente: "Cliente Test",
            ciudad: "Montevideo",
            idProducto: 1,
            nombreProducto: "Alfajor",
            cantidad: 2,
            fecha: "2026-03-20"
          }
        ]
      }
    },
    {
      id: "list-sales-by-client",
      title: "List Sales By Client",
      sdkMethod: "listSalesByClient",
      method: "GET",
      endpoint: "/sales/client/:idCliente",
      description: "Returns sales for one client id.",
      protected: true,
      payloadType: "Path Params",
      fields: [{ name: "idCliente", type: "int", required: true }],
      validations: ["idCliente must be a positive integer"],
      requestExample: {
        idCliente: 1
      },
      responseExample: {
        success: true,
        message: "Sales fetched successfully",
        data: [
          {
            idVenta: 1,
            idCliente: 1,
            nombreCliente: "Cliente Test",
            ciudad: "Montevideo",
            idProducto: 1,
            nombreProducto: "Alfajor",
            cantidad: 2,
            fecha: "2026-03-20"
          }
        ]
      }
    },
    {
      id: "delete-sale",
      title: "Delete Sale",
      sdkMethod: "deleteSale",
      method: "DELETE",
      endpoint: "/sales/:idVenta",
      description: "Deletes one sale by id.",
      protected: true,
      payloadType: "Path Params",
      fields: [{ name: "idVenta", type: "int", required: true }],
      validations: ["idVenta must be a positive integer"],
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
          cantidad: 2,
          fecha: "2026-03-20"
        }
      }
    }
  ]
};

function formatJSON(obj) {
  return JSON.stringify(obj, null, 2);
}

function getPathGroup(endpointPath) {
  const parts = endpointPath.split("/").filter(Boolean);
  return parts.length ? `/${parts[0]}` : "/";
}

function createSidebarMenu() {
  const sidebarNav = document.getElementById("sidebar-nav");
  const firstEndpointId = apiDocs.endpoints[0]?.id;

  const groupedEndpoints = apiDocs.endpoints.reduce((acc, item) => {
    const groupKey = getPathGroup(item.endpoint);

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }

    acc[groupKey].push(item);
    return acc;
  }, {});

  const groupOrder = Object.keys(groupedEndpoints);

  sidebarNav.innerHTML = groupOrder
    .map((groupKey) => {
      const groupItems = groupedEndpoints[groupKey]
        .map((item) => {
          return `
            <button class="sidebar-item ${item.id === firstEndpointId ? "active" : ""}" data-id="${item.id}">
              <div class="sidebar-item-header">
                <span class="method-badge method-${item.method}">${item.method}</span>
                <p class="sidebar-item-title">${item.title}</p>
              </div>
              <div class="sidebar-item-endpoint">${item.endpoint}</div>
            </button>
          `;
        })
        .join("");

      return `
        <div>
          <span class="sidebar-label">${groupKey}</span>
          ${groupItems}
        </div>
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

function createErrorExampleSection(selectedMethod) {
  if (!selectedMethod.errorExample) {
    return "";
  }

  return `
    <h5>Error Example</h5>
    <pre><code>${formatJSON(selectedMethod.errorExample)}</code></pre>
  `;
}

function renderMethodDetail(endpointId) {
  const selectedMethod = apiDocs.endpoints.find((item) => item.id === endpointId);
  const methodDetail = document.getElementById("method-detail");

  if (!selectedMethod) {
    methodDetail.innerHTML = `<p class="mb-0 text-muted">Endpoint not found.</p>`;
    return;
  }

  const payloadTitle = selectedMethod.payloadType || "Parameters";
  const hasFields = selectedMethod.fields && selectedMethod.fields.length > 0;

  methodDetail.innerHTML = `
    <h3>${selectedMethod.title}</h3>
    <p>${selectedMethod.description}</p>

    <p><strong>Method:</strong> ${selectedMethod.method}</p>
    <p><strong>Endpoint:</strong> ${apiDocs.baseEndpoint}${selectedMethod.endpoint}</p>
    <p><strong>Access:</strong> ${selectedMethod.protected ? "Protected (Bearer token required)" : "Public"}</p>
    <p><strong>SDK Method:</strong> ${selectedMethod.sdkMethod}</p>

    ${createHeadersSection(selectedMethod)}

    <h5>${payloadTitle}</h5>
    ${
      hasFields
        ? `
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
    `
        : `<p class="text-muted">No parameters required.</p>`
    }

    ${createValidationsSection(selectedMethod)}

    <h5>Request Example</h5>
    <pre><code>${formatJSON(selectedMethod.requestExample)}</code></pre>

    <h5>Response Example</h5>
    <pre><code>${formatJSON(selectedMethod.responseExample)}</code></pre>

    ${createErrorExampleSection(selectedMethod)}

    <div class="note-box">
      <strong>Common status codes:</strong> 200, 201, 400, 401, 404, 409, 500.
    </div>
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
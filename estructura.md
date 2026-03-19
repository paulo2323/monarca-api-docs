# Backend API Structure

## Base Endpoint
http://localhost:3000/api

---

## AUTH & USERS

### POST /users/register
Public: YES

Description:
Register a new user

Request Body:
- usuario (string) [required]
- mail (string) [required]
- password (string) [required]
- repeatPassword (string) [required]

---

### POST /auth/login
Public: YES

Description:
Login user and return JWT token

Request Body:
- mail (string) [required]
- password (string) [required]

Response:
- token (string)

---

### GET /users/:idUsuario
Public: NO

Headers:
- Authorization: Bearer <token>

Description:
Get user by ID

Params:
- idUsuario (number) [required]

---

### DELETE /users/:idUsuario
Public: NO

Headers:
- Authorization: Bearer <token>

Description:
Delete user

Params:
- idUsuario (number) [required]

---

## PASSWORD RESET

### POST /auth/request-reset
Public: YES

Description:
Request password reset link

Request Body:
- mail (string) [required]

---

### POST /auth/reset-password
Public: YES

Description:
Reset user password

Request Body:
- idUsuario (number) [required]
- token (string) [required]
- newPassword (string) [required]
- repeatPassword (string) [required]

---

## PRODUCTS

### POST /products
Public: NO

Headers:
- Authorization: Bearer <token>

Description:
Create product

Request Body:
- nombreProducto (string) [required]
- descripcion (string) [required]

---

### DELETE /products/:idProducto
Public: NO

Headers:
- Authorization: Bearer <token>

Description:
Delete product

Params:
- idProducto (number) [required]

---

## INSUMOS

### POST /insumos
Public: NO

Headers:
- Authorization: Bearer <token>

Description:
Create insumo

Request Body:
- nombreInsumo (string) [required]
- descripcion (string) [required]

---

### DELETE /insumos/:idInsumo
Public: NO

Headers:
- Authorization: Bearer <token>

Description:
Delete insumo

Params:
- idInsumo (number) [required]

---

## CLIENTS

### POST /clients
Public: NO

Headers:
- Authorization: Bearer <token>

Description:
Create client

Request Body:
- nombreCliente (string) [required]
- direccion (string) [required]
- telefono (string) [required]
- mail (string) [required]

---

### DELETE /clients/:idCliente
Public: NO

Headers:
- Authorization: Bearer <token>

Description:
Delete client

Params:
- idCliente (number) [required]

---

## SALES

### POST /sales
Public: NO

Headers:
- Authorization: Bearer <token>

Description:
Create sale

Request Body:
- idCliente (number) [required]
- idProducto (number) [required]
- cantidad (number) [required]
- fecha (string YYYY-MM-DD) [required]

---

### DELETE /sales/:idVenta
Public: NO

Headers:
- Authorization: Bearer <token>

Description:
Delete sale

Params:
- idVenta (number) [required]

---

## GLOBAL RULES

- All protected endpoints require:
  Authorization: Bearer <token>

- All responses follow:
{
  "success": boolean,
  "message": string,
  "data": optional
}

- Passwords must never be returned
- Passwords must be hashed
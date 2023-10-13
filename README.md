# A Book Catalog Backend Server

### Live Link : https://book-catalloge-backend-final.vercel.app/

<hr>

### Server Description:

This backend server, built using Express.js, Prisma, and PostgreSQL as its database, serves as the core infrastructure for a digital library or bookstore. It enables efficient management of an extensive collection of books, providing a wide range of API endpoints for users to interact with the system. These functionalities include browsing and searching for books, managing user orders, and giving administrators the tools to oversee user accounts and book inventory.

The server seamlessly integrates with a relational database to store book-related information, and it leverages Prisma as an Object-Relational Mapping (ORM) tool to simplify interactions with the database. To ensure the security of sensitive data and restrict access to authorized users, the server implements robust security measures, including authentication, authorization, and data validation.

In addition to security, the server incorporates error handling, comprehensive logging, and detailed documentation to enhance its reliability and ease of maintenance. With these features, the server plays a pivotal role in the growth and scalability of the book catalog, making it an indispensable component for online book-related services.

### Technology Stack:

- TypeScript as the Programming Language.
- Express.js as the web framework.
- Prisma as the Object Relational Mapping (ORM)
- postgreSQL as the database

### Live Link: https://book-catalloge-backend-final.vercel.app/api/v1

## Login

- login for Admin:

  ```json
  {
    "email": "imran@gmail.com",
    "password": "admin123"
  }
  ```

- login for Customer:

  ```json
  {
    "email": "helal@gmail.com",
    "password": "user123"
  }
  ```

### Application Routes:

#### User

- api/v1/auth/signup (POST)
- api/v1/auth/signin (POST)
- api/v1/users (GET)
- api/v1/users/:id (Single GET) Include an id that is saved in your database
- api/v1/users/:id (PATCH)
- api/v1/users/:id (DELETE) Include an id that is saved in your database
- api/v1/profile (GET)

### Category

- api/v1/categories/create-category (POST)
- api/v1/categories (GET)
- api/v1/categories/:id (Single GET) Include an id that is saved in your database
- api/v1/categories/:id (PATCH)
- api/v1/categories/:id (DELETE) Include an id that is saved in your database

### Books

- api/v1/books/create-book (POST)
- api/v1/books (GET)
- api/v1/books/:categoryId/category (GET)
- api/v1/books/:id (GET)
- api/v1/books/:id (PATCH)
- api/v1/books/:id (DELETE)

### Orders

- api/v1/orders/create-order (POST)
- api/v1/orders (GET)
- api/v1/orders/:orderId (GET)

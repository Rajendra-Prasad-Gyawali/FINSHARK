# FINSHARK
FINSHARK is a .NET-based RESTful API application designed for robust and secure data operations. It incorporates modern practices for user authentication and authorization using Identity and JWT tokens, structured data access using Entity Framework Core with SQL Server and clean API testing through Swagger UI.


## Features
### Authentication and Authorization
1. Utilizes ASP.NET Core Identity for managing user accounts.
2. Implements JWT (JSON Web Tokens) for stateless authentication.
3. Employs roles and claims for fine-grained access control and authorization logic.
4. Secures endpoints based on user roles and custom policies.
### Entity Framework Core
1. Uses EF Core ORM to interact with a SQL Server database.
2. Establishes relationships between entities, maintaining data integrity.
3. Supports automatic and manual migrations.
4. Implements data seeding to populate default values during initial setup.
### DTOs and Data Validation
1. Separates domain models from Data Transfer Objects (DTOs).
2. Ensures robust validation using data annotations and Fluent Validation on incoming data.
### RESTful API Design
1. Follows REST principles with standard CRUD operations.
2. Applies consistent HTTP methods, status codes and route patterns.
3. Organizes API controllers clearly to handle related domain logic.
### Asynchronous Programming
1. Implements async/await across services and controller methods for better scalability and performance.
### Swagger Integration
1. Integrates Swagger for interactive API documentation and testing.
2. Provides automatic generation of API docs from controllers and models.
## Getting Started
### Prerequisites
- .NET 9.0 SDK
- SQL Server
- Optional: Postman for API testing or Swagger UI
### Setup Instructions
1. Clone the repository:
   git clone https://github.com/Rajendra-Prasad-Gyawali/FINSHARK.git
   cd FINSHARK
2. Set up your appsettings.json with your database connection string and JWT configuration.
3. Run database migrations:
   dotnet ef database update
5. Start the application:
   dotnet run
6. Open the browser and navigate to:
   https://localhost:<port>/swagger
   to explore and test API endpoints.
## Technologies Used
1. ASP.NET Core Web API
2. Entity Framework Core
3. SQL Server
4. Identity & JWT
5. Swagger
6. FluentValidation
## Acknowledgements
This project was inspired by the excellent educational content created by Teddy Smith on his YouTube series: https://youtube.com/playlist?list=PL82C6-O4XrHfrGOCPmKmwTO7M0avXyQKc&si=tuqZbsad_APmmXs0

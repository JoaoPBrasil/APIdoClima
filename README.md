# APIdoClima

A RESTful API built with ASP.NET Core 7.0 for retrieving real-time weather data using the OpenWeatherMap API.

## 🔧 Technologies Used

- **ASP.NET Core 7.0**
- **HttpClient** for external API integration
- **Swagger** for interactive documentation
- **Serilog** for structured logging
- **AutoMapper** for object mapping
- **FluentValidation** for input validation

## 🚀 Project Structure

### Prerequisites

- **.NET SDK 7.0** or higher
- **OpenWeatherMap Account** to obtain an API key

### Structure

- **Controllers/**: Defines the API endpoints and manages request routing. Each controller handles a specific route or resource.
- **Models/**: Holds the data structures used throughout the app, including entities, DTOs, and response models.
- **Services/**: Contains core logic such as calls to external APIs (like OpenWeatherMap) and helper methods.
- **Data/**: (If present) Used for database setup, EF Core DbContext configuration, and database migration scripts.
- **Properties/**: Includes configuration files like `launchSettings.json` used during development.
- **appsettings.json**: Stores configuration such as API base URLs, logging, or default values.
- **appsettings.Development.json**: Overrides base settings for development purposes; useful for secrets like API keys.
- **Program.cs**: Configures application services, middleware pipeline, and starts the application.

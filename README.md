## Sobedecor setup

    This project is a simple Laravel-React setup for building multi-page ecommerce applications.

## Requirements

  - PHP 8.1 or higher
  - Laravel framework 9.1
  - Composer
  - Node.js and npm
  - MySQL 

### Steps to setup the application
- **Clone the repository:**

      git clone https://github.com/your-username/your-repo-name.git
      cd your-repo-name

- **Install PHP dependencies:**

      composer install
      Install Node.js dependencies:

      npm install

- **Create the .env file:**

      Create a .env file and update the necessary details

- **Generate an application key**

      php artisan key:generate

- **Update database details**
    
      Open your .env and update the details.
      DB_DATABASE=<DATABASE_NAME>
      DB_USERNAME=<USERNAME>
      DB_PASSWORD=<PASSWORD>

- **Run database migrations and seed the database:**

      php artisan migrate
    
- **Build the React app**

      npm run build

- **Start the development server:**

      php artisan serve
      Open your browser and navigate to http://127.0.0.1:8000/.

## Usage

To run the React app in development mode, you can use the following command: npm run dev. This will start the development server and open your browser at http://localhost:3000. You can make changes to your React components and see them live reload in the browser.

This project includes a basic directory structure for building multi-page web applications with Laravel and React. 
You can add new pages by creating a new directory in resources/js/pages and adding a new route in routes/web.php.

React components should be stored in resources/js/components.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

# Pharmacie Garde

This repository contains a web application that displays on-duty pharmacies (pharmacies de garde) in a given area. The application helps users quickly find pharmacies that are open outside regular business hours by scraping real-time data from relevant websites.

## Features

- **Real-time Data**: Scrapes and displays up-to-date information on pharmacies that are currently on duty.
- **Search Functionality**: Users can search for pharmacies by location or other criteria.
- **Responsive Design**: The application is fully responsive, ensuring it works well on both desktop and mobile devices.
- **Interactive Map**: An integrated map feature allows users to see the exact location of on-duty pharmacies.
- **Data Scraping**: Utilizes Puppeteer and Cheerio to scrape and parse pharmacy data from relevant sources.

## Data Scraping

This application uses [Puppeteer](https://pptr.dev/) and [Cheerio](https://cheerio.js.org/) to scrape data on on-duty pharmacies from specific websites.

- **Puppeteer**: A Node.js library that provides a high-level API to control Chrome or Chromium over the DevTools Protocol. It is used to automate the browsing context and extract the raw HTML content from websites.
- **Cheerio**: A fast, flexible, and lean implementation of core jQuery designed specifically for the server. Cheerio parses the HTML and allows easy access to the data using jQuery-like syntax.

The scraped data is stored in the `/data` directory and used within the application to display up-to-date information on pharmacies.

## Usage

- **Search**: Use the search bar to enter your location or a specific pharmacy name.
- **View on Map**: Click on a pharmacy to view its location on the map.
- **Details**: View detailed information such as the address, contact number, and opening hours of each pharmacy.

## website

[Pharmacie Garde](https://pharmaciegarde.ma/)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Make your changes.
4. Commit your changes: `git commit -m 'Add some feature'`.
5. Push to the branch: `git push origin feature-branch-name`.
6. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or inquiries, please contact [Soufiane Elhamri](mailto:selhamr9@gmail.com).

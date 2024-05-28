# CoWrite

**CoWrite** is a real time web-based writing application similar to Google Docs. It allows users to write and format text in the browser with rich text formatting options.


## Installation
Follow these steps to set up and run the project locally:

### Prerequisites
- Node.js and npm should be installed on your machine.

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/PrateekRohilla/CoWrite.git
    ```
2. Navigate to the project directory:
    ```bash
    cd CoWrite
    ```

### Running the Frontend
1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2. Install the frontend dependencies:
    ```bash
    npm install
    ```
3. Run the frontend development server:
    ```bash
    npm run dev
    ```

### Running the Backend
1. Open a new terminal and navigate to the server directory:
    ```bash
    cd server
    ```
2. Install the backend dependencies:
    ```bash
    npm install
    ```
3. Run the backend server:
    ```bash
    npm start
    ```

4. Open your browser and navigate to the port on which the frontend is running to see the application.

## Usage
After running both the frontend and backend servers, you can start writing and formatting text using the rich text editor. The document content is saved automatically and persisted in the database.

## Features
- **Rich Text Formatting:** Bold, underline, strikethrough, headings (H1, H2, H3), lists, text color, background color, and font family.
- **Data Persistence:** Automatically saves document content and persists it in a MongoDB database.
- **Unique Document IDs:** Generates a unique ID for each new document, mapping and storing data in the database.
- **Real-time:** Utilized Socket IO to enable real-time editing.

## Screenshots
![CoWrite](https://github.com/PrateekRohilla/CoWrite/assets/23234142/f863dd09-a1f9-4ec2-9e5f-ba8dec41e1f2)

## Live Demo
Check out the live version of CoWrite [here](https://cowrite.netlify.app).


## ToDo / Improvements
Contributions are welcome!
Implement & raise a PR

- [x] Generate unique ID for every new Doc
- [x] Save Doc data in DB
- [ ] Share link button for Doc


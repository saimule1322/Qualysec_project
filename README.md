# Qualysec_project
1. Clone the repo:
   ```bash
   git clone https://github.com/saimule1322/Qualysec_project.git
   cd Qualysec_project
2. change the directory to frontend
   cd Qualysec_Frontend
3. Install all the dependencies
   npm install 
4 . then start the server
   npm run dev

   Backend setup
   cd demo

  1. Update your application.properties:

   spring.data.mongodb.uri=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database>?retryWrites=true&w=majority
   spring.data.mongodb.database=your_db_name
   server.port=8080

  2. Install the dependencies
     mvn clean install

 3. Run the backend project
    mvn spring-boot:run


[![Contributors](https://img.shields.io/github/contributors/In-The-Field/In_The_Field_FE.svg)](https://github.com/In-The-Field/In_The_Field_FE/graphs/contributors)
[![Forks](https://img.shields.io/github/forks/In-The-Field/In_The_Field_FE.svg)](https://github.com/In-The-Field/In_The_Field_FE/forks)
[![Stargazers](https://img.shields.io/github/stars/In-The-Field/In_The_Field_FE.svg)](https://githuB.com/In-The-Field/In_The_Field_FE/stargazers)
[![Issues](https://img.shields.io/github/issues/In-The-Field/In_The_Field_FE.svg)](https://github.com/In-The-Field/In_The_Field_FE/issues)

# In the Field

![Alt text](image.png)

## About This Project
### Important to Note
This is an SOA app and needs both this repo (front end) AND [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) ](https://github.com/In-The-Field/In_The_Field_BE) (back end) in order to be fully functioning.

### Mod 4 Capstone Project
In the Field is a mushroom identification app. Designed for folks looking to explore, learn about, and identify mushrooms. In the Field has the ability for registered users to upload pictures from mushrooms they have found in the wild and get a list of probable matches complete with information about said mushroom. Users also have the ability to create their own field guide of mushrooms they have saved.
                                                  <br><br>
                    <img src="https://www.pbs.org/food/wp-content/blogs.dir/2/files/2014/04/edible-fungi600.jpg" width="600" height="400">
                                                                                           
                                                  
## Built With
* ![React Badge](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=for-the-badge)
* ![CSS3 Badge](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=for-the-badge)
* ![Cypress Badge](https://img.shields.io/badge/Cypress-17202C?logo=cypress&logoColor=fff&style=for-the-badge)
* ![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)
* ![GraphQL Badge](https://img.shields.io/badge/GraphQL-E10098?logo=graphql&logoColor=fff&style=for-the-badge)
* ![CircleCi](https://img.shields.io/badge/circleci-343434?style=for-the-badge&logo=circleci&logoColor=white)
* ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
* ![Adobe Badge](https://img.shields.io/badge/Adobe-F00?logo=adobe&logoColor=fff&style=for-the-badge)


## Running On
  - Cypress v12 17.4
  - React 18.2.0

## <b>Getting Started</b>

To get a local copy, follow these simple instructions

### <b>Installation</b>

1. Fork the Project
2. Clone the repo 
``` 
#terminal
git clone git@github.com:CrowRising/PlayPal-FE.git 
```
3. Install the gems
```
#terminal
bundle install
```
4. Create the database
```
#terminal
rails db:{create,migrate}
```
5. Create application.yml
```
#terminal
bundle exec figaro install
```
6. Add environment variables to application.yml file
  - Navigate to the application.yml file in the config directory
  - Add the following to the file
``` 
#application.yml
GOOGLE_CLIENT_ID: 
GOOGLE_CLIENT_SECRET:
AWS_ACCESS_KEY: 
AWS_SECRET_ACCESS_KEY: 
BUCKET_NAME: 
AWS_REGION: 
```
- Get your API key at: https://code.google.com/apis/console/ Note the Client ID and the Client Secret.
- For more details, read the Google docs: https://developers.google.com/accounts/docs/OAuth2
  - Put your Client ID after `GOOGLE_CLIENT_ID:`
  - PUT you CLIENT SECRET after `GOOGLE_CLIENT_SECRET:`
- Create your AWS S3 bucket with these instructions: https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-bucket.html
  - Put the relavent information into the application.yml file for `AWS_ACCESS_KEY: AWS_SECRET_ACCESS_KEY: BUCKET_NAME: AWS_REGION:` 

7. Run Tests in the terminal to verify everything was set up correctly
```
#terminal
bundle exec rspec
```
- All tests should be passing
8. Run Rails Server from the terminal to verify page is loading
```
#terminal
rails s
```
- Open a web browser and navigate to `http://localhost:5000`
- The welcome page should display
- Note: To be able to have full functionality of the site you will also need to setup the backend repo, setup instructions can be found here: [PlayPal-BE](https://github.com/CrowRising/PlayPal-BE)

### <b>Contribute your own code</b>
1. Create your Feature Branch 
```
#terminal
git checkout -b feature/AmazingFeature
```
2. Commit your Changes 
```
#terminal
git commit -m 'Add some AmazingFeature' 
```
3. Push to the Branch 
```
#terminal
git push origin feature/AmazingFeature
```
4. Open a Pull Request


## How to Use "In the Field"
 (screenshots and or giphy here)

## Contributing  [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/In-The-Field/In_The_Field_FE/issues)
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

## Authors
#### FrontEnd Team
- Elise Jones [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) ](https://github.com/Elise-Jones) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white) ](https://www.linkedin.com/in/elise-jones-964bb5264/) 
- Joshua Martin [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) ](https://github.com/jmartin777) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white) ](https://www.linkedin.com/in/joshua-c-martin/)
- Andrea Sorenson [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) ](https://github.com/andreasorensen) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white) ](https://www.linkedin.com/in/andrea-sorensen-/)

#### BackEnd Team
- Julian Beldotti [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) ](https://github.com/JCBeldo) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white) ]()
- Sarah Garlock [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) ](https://github.com/sarahgarlock) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white) ](https://www.linkedin.com/in/sarah-garlock/)
- Matthew William Johnson [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) ]( https://github.com/MWMJohnson) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white) ]()
- Crow Rising [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) ](https://github.com/CrowRising) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white) ](https://www.linkedin.com/in/crowrising/)  

## Planning Tools
- [![Miro Board](https://img.shields.io/badge/Miro-050038?style=for-the-badge&logo=Miro&logoColor=white)](https://miro.com/app/board/uXjVMsa-Jz0=/?moveToWidget=3458764562195436996&cot=14)
- [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) ](https://github.com/orgs/In-The-Field/projects/2)

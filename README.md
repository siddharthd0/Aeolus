
**Demo** - https://aeolus.roryjames.repl.co

## An Intro to Our Project
The goal of our web app is to forecast acid rain and photochemical smog, atmospheric events which negatively impact the health of humans and the environment. With the causes of said events being largely attributed to human activities, the app also aims to be an educational tool, creating awareness by making lifestyle suggestions catered to the air quality of the location the user inputs. We wanted our app to not be just a dashboard displaying numbers grabbed from an API, but rather an inferring tool capable of making abstractions out of data. 

## How to use it
The user can input a location in latitude and longitude. The interface will then display the risk at that current location for two different atmospheric events: acid rain and photochemical smog. There are three levels of risk: low, medium, and high. Sorting these levels of risk makes it easier for the user to understand what the data is telling them. When they enter in the location, suggestions will also appear below on how they can tackle the issue with long-term and short-term solutions. The location is also stored so that the next time the user opens up the product, their previously entered location is there.

## How we came up with our idea
We originally wanted to make some kind of product that could help the environment. We started by combing through air quality/ pollution APIs to get a sense of the data available for us to work with. 

## Inspiration

We wanted to address the lack of awareness surrounding air pollution and that is the largest goal of our product. Scientists have ascertained that human activities are causing a mass extinction by changing the environment and we wanted to do our small part to raise awareness for environmental challenges. In the case of air pollution, human activities are not only harmful to nature, but also to human health, cementing the importance of increased awareness. We were also inspired by the idea of an air quality app. But we didn’t want to just create a reskin of a run-of-the-mill air quality app so we introduced two new features. Aeolus doesn’t just provide data on specific pollutants, but suggests safety measures for high levels. We originally wanted to make the safety measures feature more dynamic than it currently is by suggesting different safety features based on levels of pollution, however, as non-scientists, our knowledge is limited. As we continue to build on our current product, we may collaborate with a real scientist to expand the insights feature. The second unique feature is Aeolus’ ability to display the risk for acid rain and photochemical smog. These two variables are not available in any other air quality app or API. We wanted to do something new with our project which is why we incorporated them.

## What it does

Aeolus takes one input from the user: a city name. The app then feeds that city name into a forward geocoding API and gets back latitude and longitude coordinates. The app then feeds the coordinates into two air quality APIs to get data from specific pollutants. The weatherbit API provides pm2.5 and pm10 levels. The copernicus API provides data for sulphur dioxide, nitrogen dioxide, nitric acid, and ground level ozone (which are shown). The copernicus API also provides data for UV light and Peroxyacetyl Nitrate which are hidden but are still used to help calculate the risk of photochemical smog. The app will show a low, moderate, or high level for each visible pollutant and a low, moderate, or high risk for acid rain and photochemical smog. The risk value for acid rain equals the highest level out of sulphur dioxide and nitric acid. The calculation for the risk value of photochemical smog is more complex as it is the average of the uv, peroxyacetyl nitrate, nitric acid, and ground level ozone levels. The app also displays safety measures for high levels for different pollutants. Currently this feature is static but we hope to make it change with different levels in the future.

## How we built it

We first began to brainstorm a multitude of ideas, then we later came up with the idea of a website that determines pollution factors in an area. Then once the hackathon officially started, we began to make prototypes of what we would like our website to be. We decided that it would be best if we proceeded with our final idea of an air pollution website, where the user can input their area/city name, and in return they will get all the pollution data they need, and it will also give them lifestyle suggestions. We started the coding process of Aeolus by creating a React app using a collaborative IDE called Repl.it. The first step in the coding process was making the user interface of our home page. We began to create components such as the footer, header, and then later we began to make the home page using css. We would first write a skeleton for the page in JSX markup and then style it with CSS. We finally finished our home page, which has a clean and functional user interface. The next step in the process was to make the pollution checker page, which consists of a user input for location, data for longitude and latitude, all our various pollution numbers and data, and then finally our original safety measures. Rory and Avichal began to work on the API implementation to get our data into our website, while Siddharth worked on making the delivered data look good using a grid to output the data, and friendly to the user using css. The outcome of this page is a clean user interface design, where the user can input a city name, then it gets the data from the api, accordingly, gives safety measures/lifestyle suggestions.

## Challenges we ran into

One small, yet troublesome problem that we encountered was making our website friendly to mobile users, tablet users, and still functional to full size computer screens. For our text boxes on the check pollution page that gives the air pollution data, we used grids, however, we did not know how to make the grids adjust for smaller screen users. We simply overcome this challenge by using helpful coding websites, such as W3Schools. As you can see now, our website is completely mobile friendly, and everything is formatted to look good on all screen sizes. Another challenge we ran into was working with APIs as none of us had much experience in that area. It was frustrating because at one point we encountered a cors (cross origin resource sharing) error when making API requests. At another point our application was making too many API requests and we had been blocked. Fortunately we found ways to work around these challenges.

## Accomplishments that we're proud of

We are very proud of the fact that we were able to put together a functional final product in time for the submission deadline. Although it’s not a perfect product and does not have 100% of the features we envisioned, we still managed to build most of it and implement the most important parts.

## What we learned

During this hackathon and project, we learned things such as teamwork, coding resources, and we learned how air pollution is a big issue, and the world must address it, and we must take preventative measures to be safe. Specifically, one major thing we all gained from this hackathon was good teamwork. The ability to work properly in a team is a good skill that is beneficial for anyone. Since we all shared our ideas about this project, the end outcome goal for all of us was similar. We all wanted a website that is useful for people, and that addresses a global problem. Additionally, it was very nice for us to gain experience collaborating on a software project. Communication and collaboration are absolutely essential soft skills for engineers and designers and we are very thankful to have gotten the opportunity to practice such skills in a relevant context.

## What's next for Aeolus

While we tried to base our project on science, we are not scientists, and the project could benefit from guidance from an environmental scientist or a meteorologist. The safety measures are static and are not truly catered to different levels of pollutants. A scientist could help us figure out the implications of varying levels of pollutants. It’s also important to understand that our methods of forecasting acid rain and photochemical smog were not developed with input from a scientist. With input from a scientist, our product could have the potential to provide significant utility to individuals worldwide. We would also like to expand our project to provide more comprehensive information on the causes and effects of different pollutants as this app was originally intended to educate and raise awareness on pollution.

## Built With

copernicus-atmospheric-monitoring-api
css3
html5
javascript
rapidapi-forward-geocoding-api
react
repl.it
weatherbit-air-quality-api

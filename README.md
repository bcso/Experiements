# TTToe

## Setup

1. Webpack setup and dev server + server setup
- webpack was built following [this](https://www.freecodecamp.org/news/learn-webpack-for-react-a36d4cac5060/)
- webpack packages up javascript/css files to /dist, which are hashed (with [hash]) and pointed to the html file `index.html` created by HtmlWebpackPlugin which uses the same `index.html` file as a template
- sever created by node.js in `server.js`

12/25/2021
- Following Structure from [this](https://www.section.io/engineering-education/build-and-dockerize-a-full-stack-react-app-with-nodejs-and-nginx/)
- added Client (front end code) and /Server (backend code)
- /Client changes
  - added Dockerfile in /Client
    - Creates a docker image to serve the front end code contained in dist
  - webpack now builds new files which are placed inside dist, client instance running on the docker image will read from the /dist folder and serve contents from there, so make sure to push changes to dist to your docker image if you want docker images (prod) to show it
- /Server changes
  - added Dockerfile in /Server
  - this will be the future hit point of any backend API calls called on by Client

## Making Changes to Client

### 1. Inner dev loop
1.1 Make dev changes
- Make your changes in `/Client/src`

1.2: Test dev changes
- Run `npm run startDev` to start the webpack dev server and see your changes

### 2. Build and Push to prod
2.1: Build dev changes
- You are done testing and want to begin to push to prod now
- `npm run build` to build the files-to-be served, they will be built into `dist`

2.2: Create docker image
This will copy over the built changes in step 3 to a new docker image
- `docker build --no-cache -t gamesapp .`

2.3: Delete and Run docker image
- Remove the oldest image`docker container ls | grep 3000 | cut -c1-6 | {read imgname; docker container rm -f $imgname;} && docker container ls`

- `docker run -dp 3001:3000 gamesapp`

### 3. See your changes
3.1: See changes
- open `localhost:3001` in a new browse rwindow


# Todo

## Client
- Consider using [2 webpack configs](https://webpack.js.org/guides/production/) : one or prod and one for dev
- Create bash script to build, push docker changes
- Determine if we need to actually build a new docker image to redeploy
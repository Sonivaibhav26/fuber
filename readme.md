### fuber

### Getting Started 

## prerequisite 
    nodejs

## installation

   # after clone the repo
    ` $ cd fuber`
 
   # now install dependencies
    `$ npm i`

## Run Tests

   # browse in the directory
    `$ npm test`

## Run App
   # browse in the directory
    `$ npm start`

## Run Api's

   # will list all available cabs
    `GET /api/cabs/list`

   # will list all available pink cabs
    `GET /api/cabs/list/pink`


   # will book a cab
    requires:
        req.body.locationX : number
        req.body.locationy : number
        req.body.pink : boolean

    `post /api/cabs/book`


   # will end the trip
    requires:
        req.body.locationX : number
        req.body.locationy : number
        req.body.number : number

    `post /api/cabs/endtrip`
    
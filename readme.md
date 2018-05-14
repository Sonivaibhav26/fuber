### fuber

### Getting Started 

## prerequisite 
    nodejs

## installation

    after clone the repo

    ```shell
    $ cd fuber
    ```
    now install dependencies

    ```shell
        $ npm i
    ```

## Run Tests
    browse in the directory

    ```shell
        $ npm test
    ```

## Run App
    browse in the directory

    ```shell
        $ npm start
    ```

## Run Api's

    will list all available cabs

    ```shell
        GET /api/cabs/list
    ```

    will list all available pink cabs

    ```shell
        GET /api/cabs/list/pink
    ```


    will book a cab
    requires:
        req.body.locationX : number
        req.body.locationy : number
        req.body.pink : boolean

    ```shell
        post /api/cabs/book
    ```


    will end the trip
    requires:
        req.body.locationX : number
        req.body.locationy : number
        req.body.number : number

    ```shell
        post /api/cabs/endtrip
    ```



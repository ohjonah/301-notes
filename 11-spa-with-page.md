# SPA w/ page.js
***

** outline **: weekly outline, SPA overview, page.js/client-side routing, assignment prep


# Routing and Controllers
> controller: webserver that maps incoming HTTP URL req to a particular handler + handlers/controllers pull data from db and push it into the template

```sh
 $('.el').on('click', callback)

  =

 page('/', homecontroller.initIndex);
```

#### Client-Side Routing
* Client-side, the route can tell us a few things:
  * what resource the user wants:
    * hipmunk.com/flights
  * additional info:
    * hipmunk.com/flights#f=SEA;t=HNL;d=2015-5-12
  * JS can interpret this route
  * All from a single index file

#### Client-Side Controller
* list of cuntions/actions waiting to be called
* One conroller per resource:
  * Articlescontroller
  * FlightsController
  * etc.

#### Page.Js
* page.js
  * page('/', user.list);
  * page('/', index);
  * etc

* https://github.com/visionmedia/page.js
* install: copy/paste page.js file into your project

#### pushstate-server
* sends all requests to index.html
* passes through static files:
  * /scripts/blogArticles.json
  * /templates/article.html
* requires full path urls


#### history object
* part of the window object
* by default has:
  * length
  * scrollRestoration (where you are currently at)
  * state: allows us to make our own custom state of our app.
    * lots of state methods

#### summary
We're using page.js to capture incoming req, take that route, and build out that page using its callback chain. We are also, under the hood, leveraging the history state property to save the state of your webapp.

# Lab
routes.js
```js
// TODO:
page('/about', app.aboutController.index);

// TODO:
page();
```

aboutController.js
```js
// TODO
aboutController.index = () => {
  $('main > section').hide();
  $('#about').show();
}
```

index.html
```html
<script src="/scripts/controllers/aboutController.js"></script>
<script src="/scripts/controllers/routes.js"></script>
```

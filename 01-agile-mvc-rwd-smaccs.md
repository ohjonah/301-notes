# Agile Development
> cyclical process for programming and development. intended for quick iterations and rapid deployment. process examples include: Pair Programming, Standups, and User Stories grouped into daily Sprints.

#### Standups:
What did you do yesterday? Today? Roadblocks?

#### User Stories:
As a __________ [who], I want __________ [what], so that __________ [why].

###### Examples of User Stories:
1. As a user, I want content to fit and be readable on mobile devices  within the viewport (base on fluid media rules), so that I can switch between devices and maintain a good experience.
2. As a mobile user, I want to tap on the "Hamburger" menu to access nav links, so that I can easily navigate the page and content has maximal space.
3. As a mobile user, I want images to scale according to my screen size, so that visual content is proportionately represented without adjustment.

# MVC Development
> "Design Pattern" for organizing your code:
Model, View, Controller.

#### Model, View, Controller
* **Mode**: Source material or data
* **View**: Presentation scheme
* **Controller**: Behavior management

* *Example*:
  * model: html
  * view: css
  * controller: js

# RWD : Responsive Web Design
> You can achieve this using Media Queries

#### Media Queries
Allows you to conditionally modify the layout of a webpage. Example may be a grid system or using the following libraries.

* Libraries:
  * Foundation
  * Bootstrap
  * Skeleton

#### Rudimentary Ways to RWD
* to scale imgs
```css
img {
  max-width: 100%;
}
```
* communicates that this is a responsive page
```html
<!-- Using a meta tag -->
<meta name="viewport" content="width=device-width, intial-scale=1">
```

#### Font Icons
* [icomoon](icomoon.io) - generated icon svgs

#### Hamburger Menu
```html
<header>
  <nav>
    <span class="icon-menu"></span>
    <ul>
      <li><a href="home.html" class="icon-#">Home</a></li>
      <li><a href="about.html" class="icon-#">About</a></li>
      <li><a href="github.com/ohjonah" class="icon-#">GitHub</a></li>
      <li><a href="about.html" class="icon-#">Twitter</a></li>
    </ul>
  </nav>
</header>
```

at a certain screen width, we want it to appear with the hamburger menu
```css
nav ul {
  display: none;
}
```
to set a conditional, use a Media Query
```css
nav ul {
  display: none;
}

@media only screen and (min-width: 640px) {
  nav ul {
    display: block;
  }

  nav span.icon-menu {
    display: none;
  }
};
```

# SMACSS

> Scalable and Modular Architecture for CSS
* Resource: [SMACSS](https://smacss.com/)

#### 5 Categories of SMACSS
* Base Rules - default rules, i.e. single element selectors
* Layout Rules - divide page into sections
* Module Rules - reusable, modular parts of our design
* State Rules - how it will look in a particular state
* Theme Rules - how it will look at a particular time

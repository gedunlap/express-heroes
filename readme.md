# Utilizing this Express CRUD API

An API platform such as [Postman](https://www.postman.com/) will be needed.

<img src="https://i.imgur.com/iy0RrQj.jpg" alt="infinity" width="400">

### Getting Started

Navigate to the [Heroku](https://heroes-express-api.herokuapp.com/) hosted page.

Add `/heroes` to the end or the URL. Result should be this:

`https://heroes-express-api.herokuapp.com/heroes`

A short list of Marvel Super Heroes should now be returned in JSON format.

Copy and paste this URL into your API platform.

### Adding Heroes (ASSEMBLE!)

The Model is as follows:

    {
        hero: String,       //-- super hero identity
        name: String,       //-- secret identity
        img: String         //-- link to image of hero
    }

In order to add a Hero the route must be set to POST.

<img src="https://i.imgur.com/iACzHaD.png" alt="post-route" width="600">

Be sure to select the **'Body'** tab below the URL, set to **'raw'** and the dropdown menu to **'JSON'**.

Now write a JSON object following the Model above to add a new Hero.

<img src="https://i.imgur.com/R0jLlk8.png" alt="post-panther" width="600">

Press the blue **'Send'** button.

If entered correctly you will recieve a similar response with a generated **id** in the API platform.

<img src="https://i.imgur.com/eQBbbBc.png" alt="response-panther" width="800">

On reload of the app page in the browser, the new Hero is visible at the bottom.

Multiple Heroes can be added at one by placing a comma between objects on entry.

    {
        "hero":"",
        "name":"",
        "img":""
    },
    {
        "hero":"",
        "name":"",
        "img":""
    },
    {
        "hero":"",
        "name":"",
        "img":""
    }

### Updating Heroes (Civil War)

To update the Hero from T'Chaka to T'Challa, first change the route from **'POST'** to **'PUT'**.

<img src="https://i.imgur.com/VqL5w65.png" alt="put-panther" width="400">

Next copy the **id** from the recently added Hero, excluding quotations, and paste it after `/heroes/` in the URL.

* your id string will be different.

<img src="https://i.imgur.com/b9gYsaA.png" alt="id-panther" width="600">

Now change the name in your input and press the blue **'Send'** button.

You will recieve a response showing your changes. Reload the app page to double check it worked.

<img src="https://i.imgur.com/3F3PcVa.png" alt="response-panther-2" width="700">

### Deleting Heroes (Thanos Time)

No infinity stones needed. Again change the route, this time to **'Delete'**, without changing the URL from before.

<img src="https://imgur.com/qQEd4mf.png" width="600">

Press the blue **'Send'** button. Reload the app page to see that Black Panther has disentigrated.

<img src="https://imgur.com/QDeVXvz.jpg" alt="thort" width="400">
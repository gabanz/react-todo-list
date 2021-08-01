[<-- Back to Main](https://github.com/datastaxdevs/appdev-week1-todolist/blob/main/README.md#6-launch-gitpod-ide)

# Setup Basic App - Create React App

## Step 1 - Start in a clean environment
- Click the button to launch the GitPod IDE.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/datastaxdevs/react-basics/)


## Step 2 - create-react-app

Create React App is a fantastic tool to spin up a basic React App with all necessary dependencies.

✅ **Step 2a:** Run `npx create-react-app my-app`

✅ **Step 2b:** Run `cd my-app`

And that's it! We now have a basic React App. We can go ahead and run the app right away.

✅ **Step 2b:** Run `npm start`

![Image](/tutorial/app_basic.png)

As the message states, we can make changes to `App.js` to update the page. Let's make a few changes.

✅ **Step 2c:** Edit `src/App.js`
``` javascript
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
      </header>
    </div>
  );
}

export default App;
```

So we've removed some unnecessary links, and changed the text. Let's save and update the site.

![Image](/tutorial/app_helloWorld.png)

Cool right?

For our Todo App, we are going to want to have a list of Todos, so let's go over making a new component.


## Step 3 - Basic Component
- Create a folder, `src/components`
- Create a new file, `src/components/List.js`

✅ **Step 3a:** Edit `List.js`
``` javascript
import React from 'react'

function List() {
    return (
        
    );
}

export default List;
```

Here's our basic component. We are importing our necessary `React` library, defining our `List` component, and exporting it for use in `App.js`.

Let's think about this a bit. We are going to have a list of items, so let's define an array to hold that list, and make up some entries.

``` javascript
const itemList = ["Get milk", "Buy Amazon", "Take over the world"];
```

Now let's render this list by mapping each item in the array to a `<p>` tag.

✅ **Step 3b:** Edit `List.js`
``` javascript
import React from 'react'

function List() {
    const itemList = ["Get milk", "Buy Amazon", "Take over the world"];

    return (
        itemList.map((item) => (
            <p>{item}</p>
        ))
    );
}

export default List;
```

Great! We've created our first custom component! Now we need to import it into `App.js` and use it.

✅ **Step 3c:** Edit `App.js`
``` javascript
import logo from './logo.svg';
import './App.css';

import List from './components/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <List />
      </header>
    </div>
  );
}

export default App;
```

Now save, and reload the site.

![Image](/tutorial/app_withList.png)

Awesome! But that's just the start. We can make our component more dynamic using `props`.

## Step 4 - Component Props

Okay, so we have our `List.js` component, but it's not very dynamic. It just takes the array we specified and spits out each item as text. We can move the array out of the `List` component and provide it as a `prop` instead.

✅ **Step 4a:** Edit `List.js`
``` javascript
import React from 'react'

function List(props) {
    const { itemList } = props;

    return (
        itemList.map((item) => (
            <p>{item}</p>
        ))
    );
}

export default List;
```

Now our `List` component is going to be looking for a `prop` called `itemList` that contains an array. We will provide that prop when we use the component.

``` javascript
<List itemList={["Get milk", "Buy Amazon", "Take over the world"]}/>
```

Let's add this to `App.js`.

✅ **Step 4b:** Edit `App.js`
``` javascript
import logo from './logo.svg';
import './App.css';

import List from './components/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <List itemList={["Get milk", "Buy Amazon", "Take over the world"]}/>
      </header>
    </div>
  );
}

export default App;
```

What this allows us to do is reuse our `List` component for any given array. Let's add another `List` component.

``` javascript
<List itemList={["Get bread", "Get eggs"]} />
```

![Image](/tutorial/app_2lists.png)

Now our component is dynamic! All we need to do is get a list of items as an array, and we can use our component to list the items out.

...But we can go deeper

## Step 5 - Going Deeper

![deeper](/tutorial/deeper.gif)

Let's make another new component

✅ **Step 5a:** Create `src/components/Item.js`
``` javascript
import React from 'react';

function Item(props) {
    const { item } = props;

    return (
        <p>{item}</p>
    );
}

export default Item;
```

And import and use this component in place of `<p>{item}</p>` in our `List` component.

✅ **Step 5b:** Edit `List.js`
``` javascript
import React from 'react';
import Item from './Item';

function List(props) {
    const { itemList } = props;

    return (
        itemList.map((item) => (
            <Item item={item} />
        ))
    );
}

export default List;
```

Now we have an `Item` component that we can customize. For example, we can give the item a different background when the user mouses over.

✅ **Step 5c:** Edit `Item.js`
``` javascript
import React from 'react';

function Item(props) {
    const { item } = props;
    const [bg, setBg] = React.useState('');

    const handleMouseOver = () => {
        setBg('red');
    }
    const handleMouseOut = () => {
        setBg('');
    }

    return (
        <p 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut} 
            style={{backgroundColor: bg}}
        >
            {item}
        </p>
    );
}

export default Item;
```

![item](/tutorial/app_customItem.gif)

Or we can add input to each item.

✅ **Step 5d:** Edit `Item.js`
``` javascript
import React from 'react';

function Item(props) {
    const { item } = props;
    const [isChecked, setIsChecked] = React.useState(false);

    return (
        <div>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(true)}
            />
            <label>{item}</label>
        </div>
    );
}

export default Item;
```

![item](/tutorial/app_inputItem.gif)


Voila!

## Step 5 - State

Wait. There's some extra stuff in there. What is this `React.useState()` stuff!?!

Before we talk about State, let's briefly talk about how React renders things.

###  Rendering

Ok, so by now you should be familiar with the `return()` block. In our latest version of `Item.js` it looks like this:

``` javascript
return (
    <div>
        <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(true)}
        />
        <label>{item}</label>
    </div>
);
```

This contains the HTML that is injected into the virtual DOM when this component is used. However, this is initially done when the component first 'mounts' or initilizes and that's it. *Unless* there is a `prop` or `state` change. So in the case of our `Item.js` component. If the `item` prop is updated from the parent component, it will trigger a re-render. But what if we don't want to rely on the parent component updating the `prop`? We can use `state`.

So in the case of our `Item.js` component. We want to re-render the component whenever the checkbox is checked, so we can actually see the checked checkbox. For this we are using a `state` variable called `isChecked` and we initialize it like this:

``` javascript
const [isChecked, setIsChecked] = React.useState(false);
```

This is called a React Hook. Hooks are built in methods that we can use to do certain things, in this case create and manage a state variable.

So how does it work?

Well, the `useState()` hook takes an array of 2 variables, the first will be our state variable - `isChecked` and the second will be the function we use to update that state variable - `setIsChecked`. Then we initialize the `useState()` hook with the variable's initial value, in this case `false` since the checkbox will start out unchecked.

Now when we call  `setIsChecked(true)` whenever the checkbox changes, the state variable will change to true, triggering a re-render and making our checkbox checked.

[<-- Back to Main](https://github.com/datastaxdevs/appdev-week1-todolist/blob/main/README.md#6-launch-gitpod-ide)

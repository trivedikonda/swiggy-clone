#Namaste React

#Parcel
- Dev Build
- Local Server
- FMR- Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching- Faster builds
- Image Optimization
- Minification
- Bundling
- compressing
- Consistent Hashing
- code splitting
- Differential Bundling - support older browsers
- Error Handling
- Diagnostic
- Tree Shaking - remove unused code
- Different dev and prod bundles


-Default Export/Import

export default Component;
import Component from "path";

-Named Export/Import 
[]
export const Component;
import {Component} from "path";

### React Hooks
...
Normal JS utility functions
-useState() - used to create super powerful react variables
    useState should always be called inside the functional component.
    Do not use useState inside the ifelse conditional block, for loops or functions as react might create inconsistencies 
-useEffect()

### Optional Chaining (?.)

whenever the intermediate property is missing and when u are not sure whether it will be there or not, then we can make an optional check over there before executing it where we can avoid repeating the code.
this prevents the array or an object from evaluating it further if it doesn't find the specified key.

### 2 types of routing in web apps

1.Client side routing
2.Server side routing



# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Create slice
- Dispatch action
- Read the data using selector



# Types of Testing(developer)
1. Unit Testing
2. Integration Testing 
3. End to End Testing(e2e)

# Setting up testing in our app
- Install React Testing Library
- Install jest
- Install Babel dependencies
- Configure babel
- Configure Parcel Config file to disable default babel transpilation
- Jest Configuration - npx jest --init
- Install jsdom library
- Install @babel/preset-react to make JSX workin test cases 
- Include @babel/preset-react inside my babel config
- Install @testing-library/jest-dom

# Command to run test cases

npm run test
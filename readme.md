# react-yadav-typewriter

A lightweight and customizable Typewriter effect component for React, perfect for adding dynamic text animations to your web projects without the need for external dependencies.

## Features

- Typewriter effect with customizable speed.
- Continuous loop option for infinite typing.
- Easy integration with React projects.
- No external dependencies.

## Installation

You can install `react-yadav-typewriter` via npm or yarn:

### npm

```bash
npm install react-yadav-typewriter
```

## Usage

```

import React from 'react';
import Typewriter from 'react-yadav-typewriter';

const App = () => {
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <Typewriter
        textArray={['A Full Stack Developer', 'A MERN Stack Developer', 'A Mean Stack Developer']}
        typingSpeed={100}
        loop={true}
      />
    </div>
  );
};

export default App;


```

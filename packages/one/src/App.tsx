import * as React from 'react'
import pkg from '../package.json'

import './App.css'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World from {pkg.name} v{pkg.version} 📦 🚀</h1>
      </div>
    )
  }
}

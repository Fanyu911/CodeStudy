import { createContext, useContext, useLayoutEffect, useState, Component } from 'react';
import './App.css';

const ThemeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <Button
        onClick={() => {
          setTheme(theme === 'light' ? 'light' : 'light');
        }}>
        Switch to light theme
      </Button>
      <Index>12312</Index>
    </ThemeContext.Provider>
  );
}
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  handerClick = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        this.setState({ number: this.state.number + 1 });
        console.log(this.state.number);
      }, 1000);
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handerClick}>num++</button>
      </div>
    );
  }
}
function Form() {
  console.log('render - Form');
  return (
    <Panel title='Welcome'>
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>
        {title} {theme}
      </h1>
      {children}
    </section>
  );
}

function Button({ children, onClick }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

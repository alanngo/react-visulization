import './App.css';
import VerticalBar from './components/VerticalBar/VerticalBar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import LineGraph from './components/Line/Line';
import { Nav, Navbar} from 'react-bootstrap';
import PieChart from './components/Pie/PieChartComponent';

const GRAPHS = ["vertical", "line", "pie"]
const App = () =>  
(
    <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="mr-auto">
            {GRAPHS.map(elem => <Nav.Link href={elem}>{elem}</Nav.Link>)}
          </Nav>
        </Navbar>
        {/* <VerticalBar/> */}
      <Switch>
        <Route path="/vertical" exact component={VerticalBar}/>
        <Route path="/line" exact component={LineGraph}/>
        <Route path="/pie" exact component={PieChart}/>
      </Switch>
    </BrowserRouter>
)

export default App;

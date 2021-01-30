import {NavBar} from "./app/NavBar";
import {Grid} from "@material-ui/core";
import {Route, Switch} from "react-router-dom"
import {PairSettings} from "./features/pairs/PairSettings";
import {Practice} from "./features/practice/Practice";
import {Settings} from './features/settings/Settings'

export default function App() {
	return (
		<div className="App">
			<NavBar/>
			<Switch>
				<Route exact path="/" component={Practice}/>
				<Route exact path="/edit-pairs" component={PairSettings}/>
				<Route exact path="/settings" component={Settings}/>
			</Switch>
		</div>
	);
}

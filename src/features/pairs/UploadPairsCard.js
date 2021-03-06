import {Button, Card, CardActions} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch} from "react-redux";
import {addPairs} from "./pairsSlice";

const useStyles = makeStyles({
	actions: {
		justifyContent: "center"
	},
	button: {
		color: "green"
	}
});

export const UploadPairsCard = () => {
	const classes = useStyles()

	const dispatch = useDispatch()

	let fileReader

	const handleFileRead = () => {
		const content = fileReader.result
		dispatch(addPairs(content))
	}

	const onChange = (e) => {
		fileReader = new FileReader()
		fileReader.onloadend = handleFileRead
		fileReader.readAsText(e.target.files[0])
	}

	return (
		<div>
			<Card elevation={12}>
				<CardActions classes={{root: classes.actions}}>
					<Button
						variant="contained"
						component="label"
						classes={{root: classes.button}}
					>
						Upload Pairs
						<input
							type="file"
							hidden
							onChange={onChange}
						/>
					</Button>
				</CardActions>
			</Card>
		</div>
	)
}
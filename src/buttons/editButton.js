import React from 'react';
import axios from 'axios';
import Tooltip from '@material-ui/core/Tooltip';
import {Link} from 'react-router-dom';

class EditButton extends React.Component {

  constructor(props) {
    super(props);
		this.state = {
      // textFromChild: '',
			// id: this.props.match.params,
			textToEdit: ''
    }
  }

  // access id object from state and convert to string
	getStringID() {
		let jsonString = JSON.stringify(this.state.id);
		// extract id from JSON string
		let shortString = jsonString.slice(7, 31);
		return shortString;
	}

	// get specific post using string id
	getPostByID = () => {
		let idString = this.props.id // this.getStringID();
		axios.get("http://localhost:4000/" + idString)
			.then((response) => {
				// set entry state to data received
        this.setState({textToEdit: response.data.content});
			})
			.catch( (error) => {
                console.log(error);
            });
  }
  
  render() {
    let id = this.props.id;
    return (
      <Link to = {{pathname: "edit/" + id, state: {textToEdit : this.state.textToEdit} }}>
      <Tooltip title="edit">
        <button className="edit-button journey-button header-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path id="write" class="cls-1" d="M1450,216h-20a2,2,0,0,1-2-2V194a2,2,0,0,1,2-2h12.81l-2,2H1430v20h20V203.193l2-2V214A2,2,0,0,1,1450,216Zm-12-5-4.99.014L1433,206l13.55-13.439a1.962,1.962,0,0,1,2.78,0l2.08,2.09a1.971,1.971,0,0,1,0,2.788Zm-3-2h3l-3-3v3Zm12.94-15.045L1437,205l2,2,11.02-10.955Z" transform="translate(-1428 -192)"/>
          </svg>
        </button>
      </Tooltip>
      </Link>
    );
  }

}

export default EditButton;
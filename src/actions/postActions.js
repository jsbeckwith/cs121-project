import {
    GET_POSTS,
    NEW_POST,
    UPDATE_POST
} from "../actions/types";
import axios from 'axios';

export const getPosts = () => dispatch => {
    axios.get("http://localhost:4000/posts/")
        .then((response) => {
            console.log("before");
            dispatch({
                type: GET_POSTS,
                payload: response.data
            })
            //this.setState({entries: response.data});
            console.log("after");
        })
        .catch( (error) => {
            console.log(error);
        });
}

export const post = (text) => dispatch => {
    //var c = this.props.qText;

		// create post object to push to database
		const newPost = {
			"author": "username",
			"date": Date.now(),
			"content": text
		}

		// add item to database
		axios.post("/post", newPost)
			.then(res => {
                dispatch({
                    type: NEW_POST,
                    payload: res.data,
                })
				//this.setState({id: res.data._id});
				console.log(res.data);
                window.location = "/post/" + res.data._id;
			})
			.catch( (error) => {
				console.log(error);
			});
}

export const updatePost = (text, id) => dispatch => {
    //var c = this.props.qText;
		// var iD = id;

		const updatePost = {
			"date": Date.now(),
			"content": text
		}

		axios.patch("http://localhost:4000/post/" + id.toString(), updatePost)
			.then(response => {
                dispatch({
                    type: UPDATE_POST,
                    payload: response.data,
                    id: response._id
                })
				window.location = "/post/" + response.data._id;
			})
}
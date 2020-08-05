import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';


class PostsIndex extends Component {

    componentDidMount(){
        this.props.fetchPosts(() =>{
            console.log('after fetchPosts');
            this.render();
        });
    }

    render(){
         console.log('render');
         console.log(this.props.posts);
        return(            
            <div>Posts Index!</div>
        );
    }
}

function mapStateToProps(state) {
    console.log('mapStateToProps');
    console.log(state.posts);[]
    return {posts: state.posts};
}

export default connect(mapStateToProps , {fetchPosts}) (PostsIndex);

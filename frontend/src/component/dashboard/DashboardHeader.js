import React, { Fragment, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from "@material-ui/core/Avatar";
import { ListItem } from '@material-ui/core';
import { Home, Book } from '@material-ui/icons'
import { Switch, Route, Link, BrowserRouter as Router, Redirect } from "react-router-dom";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';
import { Add as AddIcon } from '@material-ui/icons';
import InboxItem from './Inbox';
import Dashboard from './Dashboard';
import MyPost from './MyPost';
import AddPost from './AddPost';
import getPost from '../../services/PostServices'
import axios from 'axios'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },

}));

export default class DashboardHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            posts: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/to/getPosts/')
            .then(response => {
                this.setState({ posts: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        // console.log(this.state.user)
        // console.log(this.state.posts)
        return (
            <Router>
                <Fragment>
                    <div style={useStyles.root}>
                        <AppBar position="static">
                            <Toolbar>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="primary-search-account-menu"
                                    aria-haspopup="true"
                                    color="secondary"
                                    font-size = "30"
                                  
                                >
                                    <Avatar />
                                </IconButton >
                                <Typography variant="h6" className={useStyles.title}>Lwrite</Typography>
                                <div className={useStyles.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Search…"
                                    useStyles={{
                                        root: useStyles.inputRoot,
                                        input: useStyles.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                                <Fab color="secondary" aria-label="add" component={Link} to="/addPost"
                                    style={{ position: 'fixed', marginTop: '100vh' }}
                                >
                                    <AddIcon />
                                </Fab>
                                <List component="nav">
                                    <ListItem>
                                        <Button component={Link} to='/home'>
                                            <HomeOutlinedIcon />
                                             Home
                                    </Button >
                                        <Button component={Link} to='/post'>
                                            <Book /> Posts
                                    </Button>
                                        <Button style={{marginLeft: 150}}component={Link} to='/inbox'>
                                            <InboxIcon /> Inbox
                                    </Button>
                                    </ListItem>
                                </List>
                            </Toolbar>
                        </AppBar>
                    </div>
                    <main
                        style={{ marginTop: '10vh' }}
                    >
                        <Switch>
                            <Route exact path='/home' render={() => <div><Dashboard post={this.state.posts}></Dashboard></div>} />
                            <Route path='/post' render={() => <div><MyPost username={this.state.user.user_name} post={this.state.posts}></MyPost></div>} />
                            <Route path='/inbox' render={() => <div><InboxItem></InboxItem></div>} />
                            <Route path='/addPost' render={() => <div><AddPost userData={this.state.user} username={this.state.user.user_name}></AddPost></div>} />
                            <Redirect from="/login" to="home" ></Redirect>
                        </Switch>
                    </main>
                </Fragment>
            </Router>
        );
    }
}

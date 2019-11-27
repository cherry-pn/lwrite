import React, { Component, Fragment } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import Avatar from "@material-ui/core/Avatar";
import { Home, Book } from '@material-ui/icons'
import { Switch, Route, Link, BrowserRouter, Redirect } from "react-router-dom";
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';
import { Add as AddIcon } from '@material-ui/icons';
import InboxItem from './Inbox';
import Post from './Dashboard';
import MyPost from './MyPost';
import AddPost from './AddPost';
import user from '../login&register/Login'

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: 120,
          '&:focus': {
            width: 200,
          },
        },
      },
}));

export default function SideBar() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <BrowserRouter>
            <Fragment>
                <div className={classes.root}>
                    <CssBaseline />
                    <AppBar
                        position="fixed"
                        className={clsx(classes.appBar, {
                            [classes.appBarShift]: open,
                        })}
                    >
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                className={clsx(classes.menuButton, {
                                    [classes.hide]: open,
                                })}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap>
                                LWrite
          </Typography>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </div>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="permanent"
                        className={clsx(classes.drawer, {
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        })}
                        classes={{
                            paper: clsx({
                                [classes.drawerOpen]: open,
                                [classes.drawerClose]: !open,
                            }),
                        }}
                        open={open}
                    >
                        <div className={classes.toolbar}>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                            </IconButton>
                        </div>
                        <Divider />
                        <List component="nav">
                            <ListItem component={Link} to='/home' button>
                                <Typography color="inherit" >
                                    <Home />Home
                                      </Typography>
                            </ListItem >
                            <ListItem component={Link} to='/post' button>
                                <Typography color="inherit" >
                                    <Book />Posts
                                  </Typography>
                            </ListItem>
                            <ListItem component={Link} to='/inbox' button>
                                <Typography color="inherit" >
                                    <InboxIcon />Inbox
                                  </Typography>
                            </ListItem>
                        </List>
                        <Divider />
                        <List>
                            <ListItem component={Link} to='/login' button>
                                <Typography color="inherit" >
                                    <InboxIcon />Logout
                                  </Typography>
                            </ListItem>
                        </List>
                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <Fab color="secondary" aria-label="add" component={Link} to="/addPost"
                            style={{ position: 'fixed', marginTop: '5vh' }}
                        >
                            <AddIcon />
                        </Fab>
                        <Switch>
                            <Route exact path='/home' render={() => <div><Post></Post></div>} />
                            <Route path='/post' render={() => <div><MyPost></MyPost></div>} />
                            <Route path='/inbox' render={() => <div><InboxItem></InboxItem></div>} />
                            <Route path='/addPost' render={() => <div><AddPost></AddPost></div>} />
                            <Redirect from="/login" to="home" ></Redirect>
                        </Switch>
                    </main>
                </div>
            </Fragment>
        </BrowserRouter >
    );
}

// import React, { Fragment } from 'react';
// import clsx from 'clsx';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import Avatar from "@material-ui/core/Avatar";
// import TypoGraphy from '@material-ui/core/Typography'
// import { Home, Book} from '@material-ui/icons'
// import DashboardHeader from './DashboardHeader';
// import { Switch, Route, Link, BrowserRouter, Redirect } from "react-router-dom";
// import InboxItem from './Inbox';
// import Post from './Post';
// import MyPost from './MyPost';
// import AddPost from './AddPost';
// import user from '../login&register/Login'

// const drawerWidth = 300;

// const useStyles = makeStyles(theme => ({
//     root: {
//         display: 'flex',
//     },
//     appBar: {
//         transition: theme.transitions.create(['margin', 'width'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//     },
//     appBarShift: {
//         width: `calc(100% - ${drawerWidth}px)`,
//         marginLeft: drawerWidth,
//         transition: theme.transitions.create(['margin', 'width'], {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     hide: {
//         display: 'none',
//     },
//     drawer: {
//         width: drawerWidth,
//         flexShrink: 0,
//     },
//     drawerPaper: {
//         width: drawerWidth,
//     },
//     drawerHeader: {
//         display: 'flex',
//         alignItems: 'center',
//         padding: theme.spacing(0, 1),
//         ...theme.mixins.toolbar,
//         justifyContent: 'flex-end',
//     },
//     content: {
//         flexGrow: 1,
//         padding: theme.spacing(3),
//         transition: theme.transitions.create('margin', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//         marginLeft: -drawerWidth,
//     },
//     contentShift: {
//         transition: theme.transitions.create('margin', {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//         marginLeft: 0,
//     },
// }));

// export default function SideBar(props) {
//     const classes = useStyles();
//     const theme = useTheme();
//     const [open, setOpen] = React.useState(false);

//     const handleDrawerOpen = () => {
//         setOpen(true);
//     };

//     const handleDrawerClose = () => {
//         setOpen(false);
//     };

//     return (
//         <BrowserRouter>
//             <Fragment>
//                 < div className={classes.root} >
//                     <CssBaseline />
//                     <AppBar
//                         position="fixed"
//                         className={clsx(classes.appBar, {
//                             [classes.appBarShift]: open,
//                         })}
//                     >
//                         <Toolbar>
//                             <IconButton
//                                 color="inherit"
//                                 aria-label="open drawer"
//                                 onClick={handleDrawerOpen}
//                                 edge="start"
//                                 className={clsx(classes.menuButton, open && classes.hide)}
//                             >
//                                 <MenuIcon />
//                             </IconButton>
//                             <DashboardHeader></DashboardHeader>
//                         </Toolbar>
//                     </AppBar>
//                     <Drawer
//                         className={classes.drawer}
//                         variant="persistent"
//                         anchor="left"
//                         open={open}
//                         classes={{
//                             paper: classes.drawerPaper,
//                         }}
//                     >
//                         <div className={classes.drawerHeader}>
//                             <div style={{ padding: 16, transition: "0.3s" }}>
//                                 <Avatar
//                                     style={{
//                                         paddingLeft: '50px',
//                                         width: 60,
//                                         height: 60,
//                                         transition: "0.3s",
//                                         backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqU4lsPRiLf3PHLSfUtO-Lqs6dbtwiRtPC8oR4LBRZE8u1EDUY)',
//                                         backgroundRepeat: 'no-repeat',
//                                         backgroundSize: 'cover',
//                                         backgroundPosition: 'center',
//                                     }}
//                                 />
//                                 <div style={{ paddingBottom: 16 }} />
//                                 <Typography variant={"h6"} noWrap>
//                                     {user.first_name} Feliza Banawan
//                         </Typography>
//                                 <Typography color={"textSecondary"} noWrap gutterBottom>
//                                     clairefeliz_15@gmail.com
//                         </Typography>
//                             </div>
//                             <IconButton onClick={handleDrawerClose}>
//                                 {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//                             </IconButton>
//                         </div>
//                         <Divider />

//                         <List component="nav">
//                             <ListItem component={Link} to='/home' button>
//                                 <TypoGraphy color="inherit" >
//                                     <Home />Home
//                                     </TypoGraphy>
//                             </ListItem >
//                             <ListItem component={Link} to='/post' button>
//                                 <TypoGraphy color="inherit" >
//                                     <Book />Posts
//                                 </TypoGraphy>
//                             </ListItem>
//                             <ListItem component={Link} to='/inbox' button>
//                                 <TypoGraphy color="inherit" >
//                                     <InboxIcon />Inbox
//                                 </TypoGraphy>
//                             </ListItem>
//                         </List>
//                         <Divider />
//                         <List>
//                             {['All mail', 'Trash', 'Spam'].map((text, index) => (
//                                 <ListItem button key={text}>
//                                     <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//                                     <ListItemText primary={text} />
//                                 </ListItem>
//                             ))}
//                         </List>


//                     </Drawer>
//                     <main
//                         className={clsx(classes.content, {
//                             [classes.contentShift]: open,
//                         })}
//                         style={{marginTop: '10vh'}}
//                     >
//                         <Switch>
//                             <Route exact path='/home' render={() => <div><Post></Post></div>} />
//                             <Route path='/post' render={() => <div><MyPost></MyPost></div>} />
//                             <Route path='/inbox' render={() => <div><InboxItem></InboxItem></div>} />
//                             <Route path='/addPost' render={() => <div><AddPost></AddPost></div>} />
//                             <Redirect from="/login" to="home" ></Redirect>
//                         </Switch>
//                     </main>
//                 </div >
//             </Fragment>
//         </BrowserRouter>
//     );
// }


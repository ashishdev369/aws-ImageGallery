import React from 'react';
import './App.css';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isMobileView: false
        };
    }
    componentWillMount () {
        const items = [
            { id: 'img1', src: './images/butterfly.jpeg' },
            { id: 'img2', src: './images/cool-wallpaper-natural-beauty.jpg' },
            { id: 'img3', src: './images/flowers.jpeg' },
            { id: 'img4', src: './images/natural-beauty.jpg' },
            { id: 'img5', src: './images/rose.jpeg' },
            { id: 'img6', src: './images/top-wallpaper-natural-beauty.jpg' },
            { id: 'img7', src: './images/tree.jpeg' },
            { id: 'img8', src: './images/vertical-wallpaper-natural-beauty.jpg' },
            { id: 'img9', src: './images/wallpaper-natural-beauty.jpg' },
            { id: 'img10', src: './images/water-lily.jpeg' }
        ];
        this.setState({ items: items, currentImage: items[0].src });
    }

    updateImage = (item) => {
        this.setState({ currentImage: item.src });
    }

    changeView = () => {
        this.setState({ isMobileView: true });
    }

    render () {
        const parentDiv = {
            position: 'absolute',
            left: '1.64%',
            right: '1.64%',
            top: '13.19%',
            bottom: '13.06%'
        };
        const sideDiv = {
            position: 'absolute',
            left: '85%',
            right: '0%',
            top: '0%',
            bottom: '0%',
            overflow: 'auto'
        };
        const sideDivMobileView = {
            position: 'absolute',
            left: '45%',
            right: '40%',
            top: '0%',
            bottom: '0%',
            overflow: 'auto'
        };
        const btnShow = {
            width: '230px',
            height: '68px',
            left: '263px',
            top: '5px',
            background: '#C4C4C4',
            borderRadius: '0px',
            textTransform: 'unset'
        };
        const imageView = {
            height: '100%',
            width: '85%',
            borderRadius: '5px'
        };
        const mediaText = {
            position: 'absolute',
            left: '45.5%',
            marginTop: '-22px'
        };
        const thumbnailImages = {
            height: '100%',
            width: '96%',
            marginLeft: '5px',
            borderRadius: '5px',
            cursor: 'pointer'
        };
        return (
            <Box component="div" style={parentDiv}>
                {
                    !this.state.isMobileView ?
                        <img style={imageView} src={this.state.currentImage} /> :
                        <Box component="div" style={mediaText}>Media</Box>
                }
                <Box component="div" style={this.state.isMobileView ? sideDivMobileView : sideDiv}>
                    {
                        this.state.items && this.state.items.length > 0 && this.state.items.map((item, index) => {
                            return (
                                <Box component="div" key={item.id}>
                                    <img style={thumbnailImages} src={item.src} onClick={this.updateImage.bind(this, item)} />
                                </Box>
                            );
                        })
                    }
                </Box>
                {
                    !this.state.isMobileView &&
                        <Button style={btnShow} onClick={this.changeView}>
                            Show mobile
                        </Button>
                }
            </Box>

        );
    }
}

export default App;

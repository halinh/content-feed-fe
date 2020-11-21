import { Component } from 'react';
import ContentItem from './contentItem';

class ContentFeed extends Component {

    state = {
        'items': []
    }

    componentDidMount() {
        this.getItems();
    }   
    
    getItems() {
        fetch('http://localhost:8000/api/item/')
            .then(results => results.json())
            .then(results => this.setState({'items': results}));
    }
  
    render() {
        return(
            <ul>
                { this.state.items.map ( item => {
                    return (
                        <ContentItem item = {item} key={item.id}/>
                    )                              
                })}
            </ul>
        );
    }
}

export default ContentFeed;
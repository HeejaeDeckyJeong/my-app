import React from 'react';
import styled from 'styled-components';
import './App.css';
import Header from './components/header/Header';
import Article from './components/article/Article';

function App() {
    const nav = [
        { title: 'html', body: 'html란?' },
        { title: 'css', body: 'css란?' },
        { title: 'js', body: 'js란?' },
    ];
    return (
        <div className="root">
            <Header title="React Exam Page" />
            <Article
                title="Title1"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim blandit mi, vel sagittis tortor molestie eget. Nullam tellus leo, pulvinar ut purus id, consequat rhoncus lectus. Sed eget facilisis lectus. Nullam ac metus ligula. Suspendisse quis ante suscipit nisl finibus porttitor vitae ut tortor. Duis volutpat, urna eu elementum mattis, arcu libero rutrum metus, eget commodo enim orci quis neque. Sed rhoncus orci eget tellus varius consectetur. Mauris ligula lorem, varius et augue vel, suscipit auctor nisl. Aliquam vehicula suscipit tortor eu tincidunt. Cras lacinia tempus quam, faucibus egestas justo ultricies ac. In nec lacinia quam. Aliquam neque lacus, tempor ut sodales quis, placerat quis nisl. In hac habitasse platea dictumst. Sed pellentesque erat elit, sed pharetra sem egestas ac."
            />
            <Article
                title="Title2"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim blandit mi, vel sagittis tortor molestie eget. Nullam tellus leo, pulvinar ut purus id, consequat rhoncus lectus. Sed eget facilisis lectus. Nullam ac metus ligula. Suspendisse quis ante suscipit nisl finibus porttitor vitae ut tortor. Duis volutpat, urna eu elementum mattis, arcu libero rutrum metus, eget commodo enim orci quis neque. Sed rhoncus orci eget tellus varius consectetur. Mauris ligula lorem, varius et augue vel, suscipit auctor nisl. Aliquam vehicula suscipit tortor eu tincidunt. Cras lacinia tempus quam, faucibus egestas justo ultricies ac. In nec lacinia quam. Aliquam neque lacus, tempor ut sodales quis, placerat quis nisl. In hac habitasse platea dictumst. Sed pellentesque erat elit, sed pharetra sem egestas ac."
            />
        </div>
    );
}

export default App;

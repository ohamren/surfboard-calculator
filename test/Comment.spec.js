/*
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import ReactTestUtils from 'react-addons-test-utils';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import seeds from './helpers/seeds';
import Comment from '../src/app/components/basket/comments/Comment';

var handleCommentsState = function(e) {
  seeds.comments = e;
}

var commentSeeded =
  <Comment
    comment={seeds.comments[0]}
    comments={seeds.comments}
    handleCommentsState={handleCommentsState}
    key={seeds.comments[0].id}
  />;

var shallowComponent =
    <MuiThemeProvider>
      {commentSeeded}
    </MuiThemeProvider>;

describe('<Comment />', function() {
  describe('Component is loaded properly', function() {
    it ('Returns HTML', function() {
      let wrapper = mount(shallowComponent);
      expect(wrapper.html()).to.exist;
    })
    it ('Props from seeds loads', function() {
      let wrapper = mount(shallowComponent);
      expect(wrapper.props().children.props.comment.commentText).to.equal('Hej!');
      expect(wrapper.props().children.props.comments).to.exist;
      expect(wrapper.props().children.props.handleCommentsState).to.be.a('function');
      expect(wrapper.props().children.props.comment.commentText123).to.not.exist;
    })
    it ('Has child components', function() {
      let wrapper = mount(shallowComponent);
      expect(wrapper.find('ListItem')).to.have.length(1);
      expect(wrapper.find('IconButton')).to.have.length(1);
      expect(wrapper.find('IconButton123')).to.have.length(0);
    })
    it ('Displays comment text', function() {
      let wrapper = mount(shallowComponent);
      expect(wrapper.find('ListItem').props().primaryText).to.equal('Hej!');
    })
  })

  describe('removeComment function', function() {
    it ('Returns a list of comments except one', function() {
      let wrapper = mount(shallowComponent);
      let element = wrapper.find('IconButton');
      let node = ReactDOM.findDOMNode(element.node);
      expect(wrapper.props().children.props.comments).to.length(3);
      ReactTestUtils.Simulate.touchTap(node);
      expect(seeds.comments).to.have.length(2);
    })
  })
})
*/

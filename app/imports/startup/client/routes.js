import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import './templates.js';


FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('MasterLayout', {yield: "home"});
  }
});
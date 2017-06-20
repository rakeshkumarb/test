import Ember from 'ember';

export default Ember.Route.extend({
    
          model(){
        //alert("this is application route");
        this.transitionTo('home');

       
    }
        
});

AFRAME.registerComponent('open-website', {
    schema: {},

    init: function () {
      var data = this.data;
      var el = this.el;
      
      el.addEventListener('click', function () {
        window.location = data.link;
      });

    }
  });
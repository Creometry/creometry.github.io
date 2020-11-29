(function() {
  var Application, Utils;

  window.DEMO = window.DEMO || {};

  Utils = {
    'transform': Modernizr.prefixed('transform').replace(/([A-Z])/g, (str, m1) => {
      return '-' + m1.toLowerCase();
    }).replace(/^ms-/, '-ms-'),
    'translate': (x, y) => {
      var tran, vals;
      tran = Modernizr.csstransforms3d ? 'translate3d' : 'translate';
      vals = Modernizr.csstransforms3d ? '(' + x + ', ' + y + ', 0)' : '(' + x + ', ' + y + ')';
      return tran + vals;
    }
  };

  Application = class Application {
    constructor() {
      this.onKeyup = this.onKeyup.bind(this);
      this.previous = this.previous.bind(this);
      this.next = this.next.bind(this);
      this.update = this.update.bind(this);
      DEMO.utils = Utils;
      this.$doc = $(document);
      this.$roller = $('.roller');
      this.$step = $('#steps li');
      this.$title = $('#titles li');
      this.min = 0;
      this.max = this.$step.length - 1;
      this.active_index = 0;
      this.$step.eq(this.active_index).addClass('active');
      this.$title.eq(this.active_index).addClass('active');
      this.observe();
    }


    observe() {
      // return this.$doc.on('keyup', this.onKeyup); 
      return this.$doc.on('wheel',this.onKeyup);
    }

    onKeyup(e) {
      console.log(e);
      console.log("e.deltaY: ",e.deltaY);
      console.log("e.originalEvent.deltaY: ",e.originalEvent.deltaY);
      var kc;
      kc = e.keyCode;
      // if (kc === 38 || e.deltaY < 0) {
      if (e.originalEvent.deltaY < 0) {
        e.preventDefault();
        throttle(this.previous(),1000);
        console.log('going up');
      }
      // if (kc === 40 || e.deltaY > 0) {
      if (e.originalEvent.deltaY > 0) {
        // e.preventDefault();
        console.log('going down');
        return this.next();
      }
    }

    previous() {
      console.log("active_index: ",this.active_index);
      if (this.active_index > this.min) {
        this.active_index--;
        return this.update();
      }
    }

    next() {
      console.log("active_index: ",this.active_index);
      if (this.active_index < this.max) {
        this.active_index++;
        return this.update();
      }
    }

    update() {
      var y;
      y = -(this.active_index * 100);
      this.$roller.css(DEMO.utils.transform, DEMO.utils.translate(0, `${y}%`));
      this.$step.removeClass('active');
      this.$title.removeClass('active');
      this.$step.eq(this.active_index).addClass('active');
      return this.$title.eq(this.active_index).addClass('active');
    }

   

  };

  $(function() {
    return DEMO.instance = new Application();
  });

  function throttle(fn, wait) {
    var time = Date.now();
    return function() {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
  }

  // window.addEventListener('wheel', function(event)
  // {
  //  if (event.deltaY < 0)
  //  {
  //   console.log('scrolling up');
  //   //document.getElementById('status').textContent= 'scrolling up';
  //   //Application.previous();
  //   if (this.active_index > this.min) {
  //     this.active_index--;
  //     return this.update();
  //   }
  //  }
  //  else if (event.deltaY > 0)
  //  {
  //   console.log('scrolling down');
  //   //document.getElementById('status').textContent= 'scrolling down';
  //   //Application.next();
  //   if (this.active_index < this.max) {
  //     this.active_index++;
  //     return this.update();
  //   }
  //  }
  // });

}).call(this);





//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLFdBQUEsRUFBQTs7RUFBQSxNQUFNLENBQUMsSUFBUCxHQUFjLE1BQU0sQ0FBQyxJQUFQLElBQWUsQ0FBQTs7RUFFN0IsS0FBQSxHQUFRO0lBQ04sV0FBQSxFQUNFLFNBQVMsQ0FBQyxRQUFWLENBQW1CLFdBQW5CLENBQStCLENBQUMsT0FBaEMsQ0FBd0MsVUFBeEMsRUFBb0QsQ0FBQyxHQUFELEVBQUssRUFBTCxDQUFBLEdBQUE7QUFDbEQsYUFBTyxHQUFBLEdBQU0sRUFBRSxDQUFDLFdBQUgsQ0FBQTtJQURxQyxDQUFwRCxDQUVDLENBQUMsT0FGRixDQUVVLE1BRlYsRUFFaUIsTUFGakIsQ0FGSTtJQU1OLFdBQUEsRUFBYSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQUEsR0FBQTtBQUNYLFVBQUEsSUFBQSxFQUFBO01BQUEsSUFBQSxHQUFVLFNBQVMsQ0FBQyxlQUFiLEdBQWtDLGFBQWxDLEdBQXFEO01BQzVELElBQUEsR0FBVSxTQUFTLENBQUMsZUFBYixHQUFrQyxHQUFBLEdBQU0sQ0FBTixHQUFVLElBQVYsR0FBaUIsQ0FBakIsR0FBcUIsTUFBdkQsR0FBbUUsR0FBQSxHQUFNLENBQU4sR0FBVSxJQUFWLEdBQWlCLENBQWpCLEdBQXFCO0FBQy9GLGFBQU8sSUFBQSxHQUFPO0lBSEg7RUFOUDs7RUFZRixjQUFOLE1BQUEsWUFBQTtJQUVFLFdBQWEsQ0FBQSxDQUFBO1VBa0JiLENBQUEsY0FBQSxDQUFBO1VBVUEsQ0FBQSxlQUFBLENBQUE7VUFLQSxDQUFBLFdBQUEsQ0FBQTtVQUtBLENBQUEsYUFBQSxDQUFBO01BckNFLElBQUksQ0FBQyxLQUFMLEdBQWE7TUFDYixJQUFDLENBQUEsSUFBRCxHQUFRLENBQUEsQ0FBRSxRQUFGO01BQ1IsSUFBQyxDQUFBLE9BQUQsR0FBVyxDQUFBLENBQUUsU0FBRjtNQUNYLElBQUMsQ0FBQSxLQUFELEdBQVMsQ0FBQSxDQUFFLFdBQUY7TUFDVCxJQUFDLENBQUEsTUFBRCxHQUFVLENBQUEsQ0FBRSxZQUFGO01BQ1YsSUFBQyxDQUFBLEdBQUQsR0FBTztNQUNQLElBQUMsQ0FBQSxHQUFELEdBQU8sSUFBQyxDQUFBLEtBQUssQ0FBQyxNQUFQLEdBQWdCO01BQ3ZCLElBQUMsQ0FBQSxZQUFELEdBQWdCO01BRWhCLElBQUMsQ0FBQSxLQUFLLENBQUMsRUFBUCxDQUFVLElBQUMsQ0FBQSxZQUFYLENBQXdCLENBQUMsUUFBekIsQ0FBa0MsUUFBbEM7TUFDQSxJQUFDLENBQUEsTUFBTSxDQUFDLEVBQVIsQ0FBVyxJQUFDLENBQUEsWUFBWixDQUF5QixDQUFDLFFBQTFCLENBQW1DLFFBQW5DO01BRUEsSUFBQyxDQUFBLE9BQUQsQ0FBQTtJQWJXOztJQWViLE9BQVMsQ0FBQSxDQUFBO2FBQ1AsSUFBQyxDQUFBLElBQUksQ0FBQyxFQUFOLENBQVMsT0FBVCxFQUFrQixJQUFDLENBQUEsT0FBbkI7SUFETzs7SUFHVCxPQUFTLENBQUMsQ0FBRCxDQUFBO0FBQ1AsVUFBQTtNQUFBLEVBQUEsR0FBSyxDQUFDLENBQUM7TUFFUCxJQUFHLEVBQUEsS0FBTSxFQUFUO1FBQ0UsQ0FBQyxDQUFDLGNBQUYsQ0FBQTtRQUNBLElBQUMsQ0FBQSxRQUFELENBQUEsRUFGRjs7TUFHQSxJQUFHLEVBQUEsS0FBTSxFQUFUO1FBQ0UsQ0FBQyxDQUFDLGNBQUYsQ0FBQTtlQUNBLElBQUMsQ0FBQSxJQUFELENBQUEsRUFGRjs7SUFOTzs7SUFVVCxRQUFVLENBQUEsQ0FBQTtNQUNSLElBQUcsSUFBQyxDQUFBLFlBQUQsR0FBZ0IsSUFBQyxDQUFBLEdBQXBCO1FBQ0UsSUFBQyxDQUFBLFlBQUQ7ZUFDQSxJQUFDLENBQUEsTUFBRCxDQUFBLEVBRkY7O0lBRFE7O0lBS1YsSUFBTSxDQUFBLENBQUE7TUFDSixJQUFHLElBQUMsQ0FBQSxZQUFELEdBQWdCLElBQUMsQ0FBQSxHQUFwQjtRQUNFLElBQUMsQ0FBQSxZQUFEO2VBQ0EsSUFBQyxDQUFBLE1BQUQsQ0FBQSxFQUZGOztJQURJOztJQUtOLE1BQVEsQ0FBQSxDQUFBO0FBQ04sVUFBQTtNQUFBLENBQUEsR0FBSSxDQUFDLENBQUMsSUFBQyxDQUFBLFlBQUQsR0FBZ0IsR0FBakI7TUFDTCxJQUFDLENBQUEsT0FBTyxDQUFDLEdBQVQsQ0FBYSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQXhCLEVBQW1DLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBWCxDQUFxQixDQUFyQixFQUF1QixDQUFBLENBQUEsQ0FBRyxDQUFILENBQUssQ0FBTCxDQUF2QixDQUFuQztNQUVBLElBQUMsQ0FBQSxLQUFLLENBQUMsV0FBUCxDQUFtQixRQUFuQjtNQUNBLElBQUMsQ0FBQSxNQUFNLENBQUMsV0FBUixDQUFvQixRQUFwQjtNQUVBLElBQUMsQ0FBQSxLQUFLLENBQUMsRUFBUCxDQUFVLElBQUMsQ0FBQSxZQUFYLENBQXdCLENBQUMsUUFBekIsQ0FBa0MsUUFBbEM7YUFDQSxJQUFDLENBQUEsTUFBTSxDQUFDLEVBQVIsQ0FBVyxJQUFDLENBQUEsWUFBWixDQUF5QixDQUFDLFFBQTFCLENBQW1DLFFBQW5DO0lBUk07O0VBeENWOztFQWtEQSxDQUFBLENBQUUsUUFBQSxDQUFBLENBQUE7V0FDQSxJQUFJLENBQUMsUUFBTCxHQUFnQixJQUFJLFdBQUosQ0FBQTtFQURoQixDQUFGO0FBaEVBIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LkRFTU8gPSB3aW5kb3cuREVNTyB8fCB7fVxuXG5VdGlscyA9IHtcbiAgJ3RyYW5zZm9ybSc6XG4gICAgTW9kZXJuaXpyLnByZWZpeGVkKCd0cmFuc2Zvcm0nKS5yZXBsYWNlKC8oW0EtWl0pL2csIChzdHIsbTEpID0+IFxuICAgICAgcmV0dXJuICctJyArIG0xLnRvTG93ZXJDYXNlKClcbiAgICApLnJlcGxhY2UoL15tcy0vLCctbXMtJylcbiAgLFxuICAndHJhbnNsYXRlJzogKHgsIHkpID0+XG4gICAgdHJhbiA9IGlmIE1vZGVybml6ci5jc3N0cmFuc2Zvcm1zM2QgdGhlbiAndHJhbnNsYXRlM2QnIGVsc2UgJ3RyYW5zbGF0ZSdcbiAgICB2YWxzID0gaWYgTW9kZXJuaXpyLmNzc3RyYW5zZm9ybXMzZCB0aGVuICcoJyArIHggKyAnLCAnICsgeSArICcsIDApJyBlbHNlICcoJyArIHggKyAnLCAnICsgeSArICcpJ1xuICAgIHJldHVybiB0cmFuICsgdmFsc1xufVxuXG5jbGFzcyBBcHBsaWNhdGlvblxuXG4gIGNvbnN0cnVjdG9yOiAtPlxuICAgIERFTU8udXRpbHMgPSBVdGlsc1xuICAgIEAkZG9jID0gJChkb2N1bWVudClcbiAgICBAJHJvbGxlciA9ICQoJy5yb2xsZXInKVxuICAgIEAkc3RlcCA9ICQoJyNzdGVwcyBsaScpXG4gICAgQCR0aXRsZSA9ICQoJyN0aXRsZXMgbGknKVxuICAgIEBtaW4gPSAwXG4gICAgQG1heCA9IEAkc3RlcC5sZW5ndGggLSAxXG4gICAgQGFjdGl2ZV9pbmRleCA9IDBcbiAgICBcbiAgICBAJHN0ZXAuZXEoQGFjdGl2ZV9pbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgQCR0aXRsZS5lcShAYWN0aXZlX2luZGV4KS5hZGRDbGFzcygnYWN0aXZlJylcbiAgICBcbiAgICBAb2JzZXJ2ZSgpXG4gIFxuICBvYnNlcnZlOiAtPlxuICAgIEAkZG9jLm9uKCdrZXl1cCcsIEBvbktleXVwKVxuICAgIFxuICBvbktleXVwOiAoZSkgPT5cbiAgICBrYyA9IGUua2V5Q29kZVxuICAgIFxuICAgIGlmIGtjIGlzIDM4XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIEBwcmV2aW91cygpXG4gICAgaWYga2MgaXMgNDBcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgQG5leHQoKVxuICBcbiAgcHJldmlvdXM6ID0+XG4gICAgaWYgQGFjdGl2ZV9pbmRleCA+IEBtaW5cbiAgICAgIEBhY3RpdmVfaW5kZXgtLVxuICAgICAgQHVwZGF0ZSgpXG4gIFxuICBuZXh0OiA9PlxuICAgIGlmIEBhY3RpdmVfaW5kZXggPCBAbWF4XG4gICAgICBAYWN0aXZlX2luZGV4KytcbiAgICAgIEB1cGRhdGUoKVxuICBcbiAgdXBkYXRlOiA9PlxuICAgIHkgPSAtKEBhY3RpdmVfaW5kZXggKiAxMDApXG4gICAgQCRyb2xsZXIuY3NzKERFTU8udXRpbHMudHJhbnNmb3JtLCBERU1PLnV0aWxzLnRyYW5zbGF0ZSgwLFwiI3t5fSVcIikpXG4gICAgXG4gICAgQCRzdGVwLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgIEAkdGl0bGUucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgXG4gICAgQCRzdGVwLmVxKEBhY3RpdmVfaW5kZXgpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgIEAkdGl0bGUuZXEoQGFjdGl2ZV9pbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpXG5cbiQgLT5cbiAgREVNTy5pbnN0YW5jZSA9IG5ldyBBcHBsaWNhdGlvbigpIl19
//# sourceURL=coffeescript
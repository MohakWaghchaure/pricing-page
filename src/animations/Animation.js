import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import TextPlugin from 'gsap/TextPlugin';
import Draggable from "gsap/Draggable";
import MotionPathPlugin from "gsap/MotionPathPlugin";

gsap.registerPlugin(TextPlugin, ScrollTrigger, Draggable, Flip, MotionPathPlugin);

// ------------------hero page background animations----------------------
gsap.registerEffect({
    name: "fadeOut",
    effect: (targets, config) => {
      return gsap.fromTo(targets, { duration: config.duration, opacity: 0.2 }, { duration: config.duration, opacity: 0.5 });
    },
    defaults: { duration: 10 }, 
    extendTimeline: true, 
});
gsap.registerEffect({
    name: "fadeIn",
    effect: (targets, config) => {
      return gsap.fromTo(targets, { duration: config.duration, opacity: 0.5 }, { duration: config.duration, opacity: 0.2 });
    },
    // defaults: { duration: 10 }, 
    extendTimeline: true, 
});
gsap.registerEffect({
    name: "scaleOut",
    effect: (targets, config) => {
      return gsap.fromTo(targets, { duration: config.duration, scale: 1, ease: "linear" }, { duration: config.duration, scale: 2 });
    },
    // defaults: { duration: 10 }, 
    extendTimeline: true, 
});
gsap.registerEffect({
    name: "scaleIn",
    effect: (targets, config) => {
      return gsap.fromTo(targets, { duration: config.duration, scale: 2, ease: "linear" }, { duration: config.duration, scale: 1 });
    },
    // defaults: { duration: 10 }, 
    extendTimeline: true, 
});



window.onload = function () {
    
    let tdcvsxv = document.getElementsByClassName('.backgroundCircle');
    console.log('document loaded', tdcvsxv);

    // ------------Background Objects------------------
    let t2 = gsap.timeline({repeat: 100});
    t2.fadeOut(".backgroundCircle.even", { duration: 40 })
    t2.fadeIn(".backgroundCircle.even", { duration: 40 })

    let t3 = gsap.timeline({repeat: 100});
    t3.scaleOut(".backgroundCircle.even", { duration: 40 });
    t3.scaleIn(".backgroundCircle.even", { duration: 40 });

    let t4 = gsap.timeline({repeat: 100});
    t4.fadeIn(".backgroundCircle.odd", { duration: 40 });
    t4.fadeOut(".backgroundCircle.odd", { duration: 40 });

    let t5 = gsap.timeline({repeat: 100});
    t5.scaleIn(".backgroundCircle.odd", { duration: 40 });
    t5.scaleOut(".backgroundCircle.odd", { duration: 40 });

    

};




  
 
  
  
  
  


   
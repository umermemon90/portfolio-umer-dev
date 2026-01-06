let main = document.querySelector('main');
let hoverElements = document.querySelectorAll('.logo, .toggleBtn, .hero_content, .icon-wrapper, .email');
let isMenuOpen = false;
main.addEventListener('mousemove', (e) => {
  gsap.to(".cursorCircle", {
    x: e.x,
    y: e.y,
    duration: 0.3,
    ease: "power2.out"
  });
})
hoverElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    gsap.to(".cursorCircle", {
      scale: 1.6,

      duration: 0.3,
      ease: "power2.out"
    });
  });
  el.addEventListener('mouseleave', () => {
    gsap.to(".cursorCircle", {
      scale: 1,

      duration: 0.3,
      ease: "power2.out"
    });
  });
});
// this is hero section func 
const homePage = () => {
  let timeLine = gsap.timeline();

  const entryFunc = () => {
    let welcome = document.querySelector('.slideup p');
    let welcomeText = welcome.textContent;
    let spiltText = welcomeText.split("");
    let addText = "";
    spiltText.forEach((char) => {
      addText += `<span>${char}</span>`;
    });
    welcome.innerHTML = addText;
    console.log(welcome);
    console.log(addText);
    timeLine.from(".slideup p span", {
      y: 90,
      duration: 0.5,
      stagger: 0.15,
    })

    timeLine.to(".slideup", {
      y: -1300,

      duration: 1.2,
      delay: 0.2,
      ease: "power.out"
    })
  }
  const spiltcodeCraft = () => {
    let codeCrafttext = document.querySelector('.hero_content');
    let codeCraft = codeCrafttext.textContent
    let spiltText = codeCraft.split("");
    let addText = "";
    spiltText.forEach((char) => {
      addText += `<span>${char}</span>`;
    });
    codeCrafttext.innerHTML = addText;
    console.log(codeCrafttext);
    console.log(addText);

  }
  // this is for splitting code craft text 
  spiltcodeCraft();
  // this is for entryFunc 

  entryFunc();
  const navFunc = () => {
    timeLine.from("nav", {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1.5,0.2)"
    })

    timeLine.from(".logo,.toggleBtn", {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.8,
    });
    $('.toggleBtn').on('click', () => {

      if (!isMenuOpen) {

        $('.nav_links').stop(true, true).slideDown(400);

        gsap.from('.nav_links li', {
          x: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out"
        });

      } else {

        $('.nav_links').slideUp("slow");
      }

      isMenuOpen = !isMenuOpen;
    });
  }
  // this is for only navbar 
  navFunc();
  const heroFunc = () => {
    // this is for orbital rotation in background
    timeLine.from(".space", {
      opacity: 0,
      duration: 2,
    })
    gsap.to(".planet img", {
      scale: 1.2,
      duration: 1.5,
      repeat: -1,
      ease: "linear",
      yoyo: true

    });

    gsap.to(".orbit", {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: "linear",

    });
    gsap.to(".orbitLogo", {
      rotation: -360,
      duration: 8,
      repeat: -1,
      ease: "linear",

    });
    timeLine.from(".circle-1", {
      x: 200,
      opacity: 0,
      duration: 0.8,

    }, "<");

    timeLine.from(".circle-2", {
      x: -200,
      opacity: 0,
      duration: 0.8,

    }, "<");

    timeLine.to(".circle-1, .circle-2", {
      scale: 1.2,
      duration: 1.8,
      ease: "linear",
      repeat: -1,
      yoyo: true
    });
    timeLine.from(".hero_container", {
      y: 12,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=2.7");

    timeLine.from(".hero_content span", {
      y: 70,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    }, "-=3.9");
  }
  // this is for hero section 
  heroFunc();
}
homePage();

// type js code 
var typed = new Typed('#element', {
  strings: ['Github', 'Whatsapp', 'LinkedIn', 'Instagram', 'Email', 'fiver', 'upwork'],
  typeSpeed: 50,
  loop: true,
  backSpeed: 30,
  backDelay: 1500,
});
const service = () => {
  gsap.set(".service-card", {
    opacity: 0,
    y: 60,
    scale: 0.9
  });

  let servicetl = gsap.timeline({
    scrollTrigger: {
      trigger: ".service",
      start: "top 25%",
      invalidateOnRefresh: true,
      toggleActions: "play none none reverse",
      // markers: true
    }
  });

  // Title
  servicetl.from(".service-title", {
    x: -50,
    opacity: 0,
    ease: "power3.out"
  });

  // Subtitle
  servicetl.from(".service-subtitle", {
    y: 40,
    opacity: 0,
    ease: "power3.out"
  }, "-=0.3");
  servicetl.to(".service-card:nth-child(1)", {
    y: 0,
    opacity: 1,
    scale: 1,

    ease: "power3.out"
  }, "-=0.2");
  servicetl.to(".service-card:nth-child(2)", {
    y: 0,
    opacity: 1,
    scale: 1,
    ease: "power3.out"
  }, "-=0.2");
  servicetl.to(".service-card:nth-child(3)", {
    y: 0,
    opacity: 1,
    scale: 1,
    ease: "power3.out"
  }, "-=0.2");
}
service();

const project = () => {
  let projectTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#projects",
      start: "top 10%",
      end: 'top 0',
      toggleActions: "play none none reverse",
      invalidateOnRefresh: true
    }
  });

  projectTL.from("#projects .section-title", {
    x: -60,
    opacity: 0,
    delay: 0,
    ease: "power3.out"
  });

  projectTL.from("#projects .section-description", {
    x: 60,
    opacity: 0,
    delay: 0,
    ease: "power3.out"
  }, "-=0.3");
  projectTL.from(".project-item:nth-child(1)", {
    y: 50,
    opacity: 0,
    delay: 0,

    ease: "power3.out"
  });
  projectTL.from(".project-item:nth-child(2)", {
    y: 50,
    opacity: 0,
    delay: 0,
    ease: "power3.out"
  });
  projectTL.from(".project-item:nth-child(3)", {
    y: 50,
    opacity: 0,
    delay: 0,
    ease: "power3.out"
  });
  projectTL.from(".project-item:nth-child(4)", {
    y: 50,
    opacity: 0,
    delay: 0,
    ease: "power3.out"
  });
  projectTL.from(".project-item:nth-child(5)", {
    y: 50,
    opacity: 0,
    delay: 0,
    ease: "power3.out"
  });
  projectTL.from(".project-item:nth-child(6)", {
    y: 50,
    opacity: 0,
    delay: 0,
    ease: "power3.out"
  });
}
project();

const about = () => {
  let aboutTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "top 40%",
      // end: 'top 20%',
      toggleActions: "play none none reverse",
      invalidateOnRefresh: true,

    }
  })
  aboutTL.from('#about .section-title', {
    x: -60,
    opacity: 0,
    delay: 0
  })
  aboutTL.from("#about .section-description", {
    x: 60,
    opacity: 0,
    delay: 0,
    ease: "power3.out"
  }, "-=0.3");
  aboutTL.from('.about-card', {
    y: 20,
    opacity: 0
  })
  aboutTL.from('.about-text:nth-child(1)', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out"
  }, "-=0.2")
  aboutTL.from('.about-text:nth-child(2)', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out"
  }, "-=0.2")
  aboutTL.from('.about-text:nth-child(3)', {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out"
  }, "-=0.2")
  aboutTL.from('.feature-list li:nth-child(1)', {
    x: 30,
    opacity: 0,
    duration: 0.3
  },)
  aboutTL.from('.feature-list li:nth-child(2)', {
    x: 30,
    opacity: 0,
    duration: 0.3
  },)
  aboutTL.from('.feature-list li:nth-child(3)', {
    x: 30,
    opacity: 0,
    duration: 0.3
  },)
  aboutTL.from('.feature-list li:nth-child(4)', {
    x: 30,
    opacity: 0,
    duration: 0.3
  },)
  aboutTL.from('.feature-list li:nth-child(5)', {
    x: 30,
    opacity: 0,
    duration: 0.3
  },)

}
about();
const contact = () => {
  let contactTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact",
      start: "top 40%",
      toggleActions: "play none none reverse",
      invalidateOnRefresh: true
    }
  })
  contactTL.from('.contact-container', {
    y: 30,
    opacity: 0,
    duration: 0.3
  })
  contactTL.from('.contact-container h2', {
    y: 20,
    opacity: 0,
    duration: 0.2
  })
  contactTL.from('.contact-container .email', {
    y: 20,
    opacity: 0,
    duration: 0.2
  })
  contactTL.from('.contact-container .icons_container .icon-wrapper:nth-child(1)', {
    y: 30,
    opacity: 0,
    duration: 0.3,
    ease: "power2.out"
  })
  contactTL.from('.contact-container .icons_container .icon-wrapper:nth-child(2)', {
    y: 30,
    opacity: 0,
    duration: 0.3,
    ease: "power2.out"
  })
  contactTL.from('.contact-container .icons_container .icon-wrapper:nth-child(3)', {
    y: 30,
    opacity: 0,
    duration: 0.3,
    ease: "power2.out"
  })
  contactTL.from('.contact-container .icons_container .icon-wrapper:nth-child(4)', {
    y: 30,
    opacity: 0,
    duration: 0.3,
    ease: "power2.out"
  })
}
contact();




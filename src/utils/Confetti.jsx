import React, { useEffect, useState } from 'react';

const Confetti = ({onComplete }) => {
  let confettiCtx;
  let container, confettiElements = [], clickPosition;

  const rand = (min, max) => Math.random() * (max - min) + min;

  const confettiParams = {
    number: 1170,
    size: { x: [10,12], y: [10,12] },
    initSpeed: 25,
    gravity: 0.65,
    drag: 0.08,
    terminalVelocity: 6,
    flipSpeed: 0.017,
  };

  const colors = [
    { front : '#3B870A', back: '#235106' },
    { front : '#B96300', back: '#6f3b00' },
    { front : '#E23D34', back: '#88251f' },
    { front : '#CD3168', back: '#7b1d3e' },
    { front : '#664E8B', back: '#3d2f53' },
    { front : '#394F78', back: '#222f48' },
    { front : '#008A8A', back: '#005353' },
];
const isMobile = () => {
  return window.innerWidth <= 768; 
};
const getCanvasStyle = () => {
  return isMobile()
    ? { position: 'absolute', top: '50px', left: '0', width: '100%', height: '200vh',zIndex:99900 }
    : { position: 'absolute', left: '0', width: '100%', height: '100vh', marginTop: '100px' ,zIndex:99900 };
};
  function Conf() {
    this.randomModifier = rand(-1, 1);
    this.colorPair = colors[Math.floor(rand(0, colors.length))];
    this.dimensions = {
        x: rand(confettiParams.size.x[0], confettiParams.size.x[1]),
        y: rand(confettiParams.size.y[0], confettiParams.size.y[1]),
    };
    this.position = {
        x: clickPosition[0],
        y: clickPosition[1]
    };
    this.rotation = rand(0, 2 * Math.PI);
    this.scale = { x: 1, y: 1 };
    this.velocity = {
        x: rand(-confettiParams.initSpeed, confettiParams.initSpeed) * 0.4,
        y: rand(-confettiParams.initSpeed, confettiParams.initSpeed)
    };
    this.flipSpeed = rand(0.2, 1.5) * confettiParams.flipSpeed;

    if (this.position.y <= container.h) {
        this.velocity.y = -Math.abs(this.velocity.y);
    }

    this.terminalVelocity = rand(1, 1.5) * confettiParams.terminalVelocity;

    this.update = function () {
        this.velocity.x *= 0.98;
        this.position.x += this.velocity.x;

        this.velocity.y += (this.randomModifier * confettiParams.drag);
        this.velocity.y += confettiParams.gravity;
        this.velocity.y = Math.min(this.velocity.y, this.terminalVelocity);
        this.position.y += this.velocity.y;

        this.scale.y = Math.cos((this.position.y + this.randomModifier) * this.flipSpeed);
        this.color = this.scale.y > 0 ? this.colorPair.front : this.colorPair.back;
    }
}
const adjustConfettiSize = () => {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    container = {
      w: canvasWidth,
      h: canvasHeight
    };
    // confettiParams.size.x = [canvasWidth * 0.001, canvasWidth * 0.01];
    // confettiParams.size.y = [canvasHeight * 0.02, canvasHeight * 0.035];

    confetti.width = canvasWidth;
    confetti.height = canvasHeight;
  };


  const updateConfetti =()=> {
    confettiCtx.clearRect(0, 0, container.w, container.h);

        confettiElements.forEach((c) => {
            c.update();
            confettiCtx.translate(c.position.x, c.position.y);
            confettiCtx.rotate(c.rotation);
            const width = (c.dimensions.x * c.scale.x);
            const height = (c.dimensions.y * c.scale.y);
            confettiCtx.fillStyle = c.color;
            confettiCtx.fillRect(-0.5 * width, -0.5 * height, width, height);
            confettiCtx.setTransform(1, 0, 0, 1, 0, 0)
        });
    
        confettiElements.forEach((c, idx) => {
            if (c.position.y > container.h ||
                c.position.x < -0.5 * container.x ||
                c.position.x > 1.5 * container.x) {
                confettiElements.splice(idx, 1)
            }
        });
        window.requestAnimationFrame(updateConfetti);
  }

  const setupCanvas = () => {
    container = {
        w: window.innerWidth,
        h: window.innerHeight
      };
      confetti.width = container.w;
      confetti.height = container.h;
    };

    const addConfetti = () => {
      clickPosition = [
        window.innerWidth / 2,
        window.innerHeight / 2 
      ];
    
      for (let i = 0; i < confettiParams.number; i++) {
        confettiElements.push(new Conf());
      }
    };

  const hideConfetti = () => {
      confettiElements = [];
    window.cancelAnimationFrame(updateConfetti)
  }

  const confettiLoop = () => {
    addConfetti();
    setTimeout(confettiLoop, 700 + Math.random() * 1700);
  }

  useEffect(() => {
    const confetti = document.getElementById('confetti');
    confettiCtx = confetti.getContext('2d');
    adjustConfettiSize();
    setupCanvas();

    updateConfetti();
    confettiLoop();

    const handleResize = () => {
     adjustConfettiSize();
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    const animationTimer = setTimeout(() => {
      onComplete();
    }, 3000);
    return () => {
      window.removeEventListener('resize', handleResize);
      hideConfetti();
      clearTimeout(animationTimer);
    };
  }, [onComplete]);

  return (
    <canvas
      id="confetti"
      style={getCanvasStyle()}
      width={window.innerWidth}
      height={window.innerHeight}
    ></canvas>
  )
};

export default Confetti;


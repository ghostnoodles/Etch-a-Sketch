"use strict";

const grid = document.querySelector('#grid');


for (let i = 1; i < 257; i++) {
    const boxes = document.createElement('div');
    grid.appendChild(boxes);
  }
const categoryImages = [
  import('./1.jpg').then(module => module.default),
  import('./2.jpg').then(module => module.default),
  import('./3.jpg').then(module => module.default),
  import('./4.jpg').then(module => module.default),
  import('./5.jpg').then(module => module.default),
  import('./6.jpg').then(module => module.default),
  import('./7.jpg').then(module => module.default),
  import('./8.jpg').then(module => module.default),
  import('./9.jpg').then(module => module.default),
  import('./10.jpg').then(module => module.default),
];

export default Promise.all(categoryImages);
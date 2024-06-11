const offerImages = [
  import('./1.png').then(module => module.default),
  import('./2.png').then(module => module.default),
  import('./3.png').then(module => module.default),
  import('./4.png').then(module => module.default),
  import('./5.png').then(module => module.default),
  import('./6.png').then(module => module.default),
  import('./7.png').then(module => module.default),
  import('./8.png').then(module => module.default),
  import('./9.png').then(module => module.default),
  import('./10.png').then(module => module.default),
  import('./11.png').then(module => module.default),
  import('./12.png').then(module => module.default),
];

export default Promise.all(offerImages);
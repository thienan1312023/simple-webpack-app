export const flatData = {
    '/root': {
      path: '/root',
      isRoot: true,
      children: ['/root/us', '/root/viet nam'],
    },
    '/root/us': {
      path: '/root/us',
      children: ['/root/us/california'],
    },
    '/root/us/california': {
      path: '/root/us/california',
      children: ['/root/us/california/los angeles', '/root/us/california/new york']
    },
    '/root/us/california/new york': {
      path: '/root/us/california/new york',
    },
    '/root/us/california/los angeles': {
      path: '/root/us/california/los angeles',
    },
    '/root/viet nam': {
      path: '/root/viet nam',
      children: ['/root/viet nam/dong nai', '/root/viet nam/can tho'],
    },
    '/root/viet nam/dong nai': {
      path: '/root/viet nam/dong nai',
      children: ['/root/viet nam/dong nai/hoa an'],
    },
    '/root/viet nam/dong nai/hoa an': {
      path: '/root/viet nam/dong nai/hoa an',
      children: [],
    },
    '/root/viet nam/can tho': {
      path: '/root/viet nam/can tho',
      children: [],
    },
  };
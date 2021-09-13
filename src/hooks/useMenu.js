

function useMenu(pageActive) {
  const menuList = [
    {
      name: 'Home',
      slug: 'home',
      to: '/'
    },
    {
      name: 'Tutorial',
      slug: 'tutorial',
      to: pageActive === 'home' ? '#tutorial' : '/tutorial'
    },
    {
      name: 'Source Code',
      slug: 'source-code',
      to: pageActive === 'home' ? '#source-code' : '/source-code'
    },
    {
      name: 'Blog',
      slug: 'blog',
      to: pageActive === 'home' ? '#blog' : '/blog'
    },
    {
      name: 'About',
      slug: 'about',
      to: '/about'
    },   
  ]  

  return menuList
}

export default useMenu
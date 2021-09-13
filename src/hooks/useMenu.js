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
      to: '/tutorial'
    },
    {
      name: 'Source Code',
      slug: 'source-code',
      to: '/source-code'
    },
    {
      name: 'Blog',
      slug: 'blog',
      to: '/blog'
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
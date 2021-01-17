import About from './About'
import Home from './Home'
import Movie from './Movie'
import NotFound from './NotFound'

export default {
  '/': Home,
  '/about': About,
  '/movie/:id': Movie,
  '*': NotFound
}